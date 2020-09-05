# Bundless vue example

How to use vue progressively withou needing a bundler.
This reminds me a lot of how AngularJS worked, but seems better.

If you use "slot" extensivelly with some kind of server side redering for the raw components you could get great SSO performance.

It even includes an example for dinamy component loading.

In any case, you should at least consider a bundler to minimize the JS and to allow you to use something like SASS for your styles, my suggestion is Gulp.

For better development experiencie consider this VSCode extensions:

[Vue inline template](https://marketplace.visualstudio.com/items?itemName=faisalhakim47.vue-inline-template)
[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)


You might also like to add this to you VSCode user settings:

```json
"emmet.includeLanguages": {
    "javascript": "html"
}
```

This will allow you to hame emmet as well as code higlighting inside the `template:` segments.