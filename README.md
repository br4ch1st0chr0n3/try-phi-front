# Halogen Template

This is another attempt to write try-phi editor, this time in PureScript.
It's based on this [template](https://github.com/purescript-halogen/purescript-halogen-template).

### Quick Start
* Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)

```sh
git clone https://github.com/br4ch1st0chr0n3/try-phi-front
cd try-phi-front
npm install
npm run build
npm run serve
```

* If there is an [inotify error](https://askubuntu.com/a/1088275), run
```sh
echo fs.inotify.max_user_watches=1000000 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
Now, your browser will open, showing [http://localhost:1234](http://localhost:1234)

### Development Cycle

If you're using an [editor](https://github.com/purescript/documentation/blob/master/ecosystem/Editor-and-tool-support.md#editors) that supports [`purs ide`](https://github.com/purescript/purescript/tree/master/psc-ide) or are running [`pscid`](https://github.com/kRITZCREEK/pscid), you simply need to keep the previous `npm run serve` command running in a terminal. Any save to a file **used** in the project will trigger an incremental recompilation, rebundle, and web page refresh, so you can immediately see your changes.

If your workflow does not support automatic recompilation, then you will need to manually re-run `npm run build`. Even with automatic recompilation, a manual rebuild is occasionally required, such as when you add, remove, or modify module names, or notice any other unexpected behavior.

### Production

When you are ready to create a minified bundle for deployment, run the following command:
```sh
npm run build-prod
```

Parcel output appears in the `./dist/` directory.

You can test the production output locally with a tool like [`http-server`](https://github.com/http-party/http-server#installation). It seems that `parcel` should also be able to accomplish this, but it unfortunately will only serve development builds locally.
```sh
npm install -g http-server
http-server dist -o
```

If everything looks good, you can then upload the contents of `dist` to your preferred static hosting service.

## Deployment to GitHub Pages

* If you'd like to upload your site to GitHub Pages, run
    ```sh
    npm run deploy
    ```

    This will do the following:
    * Go through the steps of [production](#production)
    * Copy the contents of `dev` into `docs`
    * Minify the `prod/index.js` via [esbuild](https://esbuild.github.io/) and write into `docs/index.js`
    * Publish the contents of the `docs` directory via [gh-pages](https://github.com/tschaub/gh-pages) into `gh-pages` branch (see this [post](https://javascript.plainenglish.io/deploying-any-app-to-github-pages-1e8e946bf890))

* Next,
    * Go to your repository Settings -> Pages
    * Select the branch `gh-pages` and `/(root)` as the source
    * Save and check the site when it's built!