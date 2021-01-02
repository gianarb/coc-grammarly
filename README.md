# coc-grammarly

coc-grammarly uses [grammary](https://github.com/znck/grammarly) and
it acts as a bridge between [Grammarly](https://www.grammarly.com/) and vim.

![](./docs/getting-started.png)

Currently I have a problem releasing my code because of this issue
[znck/grammarly/#138](https://github.com/znck/grammarly/issues/138) I think.

## Install

`:CocInstall coc-grammarly`

## Configuration

`grammarly.pathGrammarlyLSP` starts a different grammarly language server. This
is useful in development, if you want to try a difference version of
[grammarly](https://github.com/znck/grammarly). Example:
`/Users/john/git/grammarly/out/newversion`

## Development

The command you use to build the project

```
npm run build
```

If you want to start the Coc extension from your working directory you can use
`set`, where `~/git/coc-grammarly/` is the root of the project

```
set runtimepath^=~/git/coc-grammarly/
```

## License

MIT

---

> This extension is created by [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
