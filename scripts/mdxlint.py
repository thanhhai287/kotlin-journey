#!/usr/bin/env python3
"""Static check for the MDX v2 trap: bare < { } in prose break the Nextra build.

Strips fenced code blocks and inline code spans, then flags what is left.
Not a parser - it catches the one failure mode that actually breaks this repo.
"""
import re, sys, pathlib

# JSX tags that are legitimately allowed in prose (valid MDX elements)
OK_TAG = re.compile(r'</?[A-Za-z][A-Za-z0-9.]*(\s[^<>]*)?/?>')

def check(path):
    problems = []
    in_fence = False
    fence = None
    for n, raw in enumerate(path.read_text(encoding='utf-8').splitlines(), 1):
        line = raw
        m = re.match(r'^\s*(`{3,}|~{3,})', line)
        if m:
            tok = m.group(1)[0] * 3
            if not in_fence:
                in_fence, fence = True, tok
            elif fence and line.strip().startswith(fence):
                in_fence, fence = False, None
            continue
        if in_fence:
            continue
        if re.match(r'^( {4,}|\t)\S', line) and not line.lstrip().startswith(('-', '*', '|', '>', '+')):
            continue  # indented code block
        line = re.sub(r'`[^`]*`', '', line)          # strip inline code
        line = re.sub(r'`{2,}.*?`{2,}', '', line)    # strip double-backtick spans
        line = OK_TAG.sub('', line)                  # allow real JSX tags
        for ch, why in (('<', 'JSX open'), ('{', 'MDX expression')):
            if ch in line:
                problems.append((n, ch, why, raw.strip()[:110]))
        if '}' in line:
            problems.append((n, '}', 'stray brace', raw.strip()[:110]))
    return problems

bad = 0
for p in sorted(pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else 'pages').rglob('*.mdx')):
    for n, ch, why, txt in check(p):
        bad += 1
        print(f"{p}:{n}: bare '{ch}' ({why}) -> {txt}")
print(f"\n{'FAIL' if bad else 'OK'}: {bad} problem(s)")
sys.exit(1 if bad else 0)
