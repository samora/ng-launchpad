# ng-launchpad

Opinionated kickstarter for [AngularJS](http://angularjs.org) projects.
Inspired by [ngBoilerplate](https://github.com/ngbp/ngbp).

## Quick Start

Install Node.js and Git and then:

```sh
$ git clone git://github.com/samora/ng-launchpad
$ cd ng-launchpad
$ sudo npm install -g gulp bower
$ npm install
$ gulp
```

Visit `localhost:8000` in your browser.

Enjoy!

## Purpose

`ng-launchpad`, like `ngBoilerplate`, is meant to make life easy by providing a
basic framework with which to kickstart AngularJS projects.

However, ng-launchpad is simpler and differs in a few ways:

* [gulp.js](http://gulpjs.com), instead of [Grunt](http://gruntjs.com), as a build/management tool.
* [Jade](http://jade-lang.com) instead of HTML for templates.
  Jade is a necessity for me and probably my core motivation for creating ng-launchpad.
* Integrated development server.
* [Protractor](https://github.com/angular/protractor) integration for end-to-end (e2e) tests.
* Development build has a similar directory structure to production.
  However the files are not minified and compressed.
* No support for CoffeeScript... yet.

`ng-launchpad` is a little simpler than `ngBoilerplate` on purpose, yet keeps the same ideas.

## Features

* Modular application structure to encourage component re-use.
  If you don't know why this is important, read
  [this](https://medium.com/opinionated-angularjs/9f01b594bf06).
* Automagically minify, compress, uglify and package files for production.
* Built-in development server which reloads the page on file changes.
* Automagically re-run tests on file changes.
* Use Jade to simplify your HTML.
* Use Less to simplify your CSS.

## Components

The following have already been added because I believe they are the bare 
minimum components you may need. Add or remove according to your requirements.

* [Angular JS](http://angularjs.org)
* [UI Router](https://github.com/angular-ui/ui-router)
* [Bootstrap](http://getbootstrap.com/)
* [UI Bootstrap](http://angular-ui.github.io/bootstrap)
* [Font Awesome](http://fontawesome.io)

## Learn 

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
ng-launchpad/
  |- src/
  |  |- common/
  |  |  |- <shared modules>
  |  |- img/
  |  |  |- <images>
  |  |- less/
  |  |  |- main.less
  |  |  |- variables.less
  |  |- modules/
  |  |  |- <app modules>
  |  |- index.jade
  |- vendor/
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- Gulpfile.js
  |- karma.conf.js
  |- package.json
  |- protractor.conf.js
```

* `src/`- app's sources.
  * `common/`- shared components used by other modules in `src/modules/`.
    If the folder doesn't exisit you must create it.
  * `img/`- drop images here. Remember's directory structure when copying
    into build/production folder.
  * `less/`-
    * `main.less`- main css file used to generate `main.css`.
      All Less files in `src/common` & `src/modules` are concatenated into `main.less`
      before generating `main.css`. Don't you love this? :)
    * `variables.less`- override bootstrap variables or add your own.
  * `modules`- main app components go here.
* `vendor/`- 3rd-party libraries. Bower will install packages here.
  __Note__: Anything added here should be manually added to `build.config.js`'s
  `files.js.vendor` property.
* `.bowerrc`- tells Bower to install dependencies to `vendor/`.
* `bower.json`- project's Bower configuration.
* `build.config.js`- custom build settings.
* `Gulpfile.js`- build script.
* `karma.conf.js`- Karma settings.
* `package.json`- used by NPM.
* `protractor.conf.js`- Protractor settings.




### File naming conventions for `src/common` and `src/modules`

* Start file names within a specific module with a common prefix.
  Example: In the `src/modules/home/` all file names should begin with `home`; 
  `home.js`, `homeCtrl.js`, `homeCtrl.spec.js`, `home.tpl.jade`, `home.scenario.js`,
  `home.less`.
* Templates: `*.tpl.jade`.
  Templates in `src/common` are added to Angular's template cache and
  bundled into `templates-common` module in file `templates-common.js`.
  Templates in `src/modules` are added to Angular's template cache and
  bundled into `templates-modules` module in file `templates-modules.js`.
  Template names are without `src/common` or `src/modules` prefix.
  Example: `src/modules/home/home.tpl.jade` becomes `home/home.tpl.html`.
* Unit tests: `*.spec.jade`.
* e2e tests: `*.scenario.jade`.


### Build System: Managing Tasks with gulp.js

[gulp.js](http://gulpjs.com) is used to manage all tasks. The best way to
learn how the tasks work is by familiarizing yourself with gulp.js and reading
through the documented build script, `Gulpfile.js`. But you don't need to do
that to be very productive with `ng-launchpad`.

Below are the important tasks that come pre-configured with ng-launchpad. All tasks
should be run in a terminal or command prompt from the root of your app  with `gulp`. 

Example:

```sh
$ gulp compile
```

* `build`- Process and package files into `build/` folder.
* `compile`- Process files into production directory (default: `_public`). These
  files have been minified and compressed, ready for deployment!
* `default`- Build files, run local server, run unit tests using Karma and 
  watch for changes. Can also be run with just `gulp` command.
  __Note__: Does not run e2e tests.
* `karma`- Run unit tests with Karma.
* `karma:watch`- Run unit tests with Karma and watch for changes.
* `protractor`- Run e2e tests with Protractor.
* `protractor:watch`- Run e2e tests with Protractor and watch for changes.
* `test`- Run unit and e2e tests.
* `watch:files`- Build files, run local server and watch for changes.
* `watch:test`- Run unit tests with Karma, run e2e tests with Protractor and watch
  for changes.
* `watch`- Build files, run local server, run unit tests with Karma, run e2e tests
  with Protractor and watch for changes.
* `clean`- Delete `build` & production (default: `_public`) directories.
* `clean:build`- Delete `build` directory.
* `clean:_public`- Delete `_public` directory.
* `server`- Run local server. __Note__: No Live Reload.

Some tasks, notably those which run e2e tests with Protractor, may take a while to complete
on first run. This is because the webdriver needs to be downloaded and installed first.

You can change the output production directory by changing the `productionDir` variable
in `Gulpfile.js`. This will rename the `clean:_public` task to `clean:<production directory>`.

### Development server & Live Reload

`ng-launchpad`'s local server can be found at `http://localhost:8000` or `http://127.0.0.1:8000`.

`ng-launchpad` also includes [Live Reload](http://livereload.com/), so you no longer have to
refresh your page after making changes. You need a Live Reload brower plugin for this:

- Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- Firefox - [Download from Live Reload](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
- Safari - [Download from Live Reload](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)

When you load your page, click the Live Reload icon in your toolbar and
everything should work magically. 

If you'd prefer to not install a browser extension, then you must add the
following to the end of the `body` tag in `index.jade`:

```jade
script(src='http://localhost:35729/livereload.js')
```

## Contributing

A good starting point, but surely improvements can be made. Feel free to [contact me](http://www.samora.me).
Better still, submit a pull request.