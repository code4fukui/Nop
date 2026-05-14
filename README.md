# Nop - no operators programming language

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Nop is a structured programming language without operators, forked from [Nor](https://github.com/code4fukui/Nor).

## Demo
- Runtime on web: [Nop Playground](https://code4fukui.github.io/Nop/)
- Embedded in HTML: [Nop on web](https://code4fukui.github.io/Nop/nopweb.html)
- CLI (Command Line Interface): calculation BMI [examples/add.nop](examples/add.nop)
- Debugging app: [nop2js](https://code4fukui.github.io/Nop/nop2js.html)

## Features
- No operators, only if/else, loop, function
- Arrays and bit-level access to numbers
- Print, input, and other basic programming constructs

## Requirements
The Nop runtime can be embedded in HTML or run via Deno on the command line.

## Usage
To run Nop programs in the browser, include the Nop runtime script:

```html
<script type="module" src="https://code4fukui.github.io/Nop/web.js"></script>
<script type="text/nop">
print 1
</script>
```

To run Nop programs on the command line, use Deno:

```sh
deno -A https://code4fukui.github.io/Nop/cli.js examples/add.nop
```

## License
MIT License — see [LICENSE](LICENSE).