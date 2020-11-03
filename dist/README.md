There is not an easy way to import [grammarly]() as node modules because of this
issue: [znck/grammarly#138](https://github.com/znck/grammarly/issues/138).

An easy way I have to make this integration to work is via manually building the
language server from the [grammarly](https://github.com/znck/grammarly) repository.

The workflow looks like what follows:

```
// clone Grammarly
npm run build
cp ./out/server.js ~/coc-grammarly/dist/server.js
```
