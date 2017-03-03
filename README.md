DESCRIPTION
-----------

**Magazine** theme is fresh, fully responsive, simple and ultra fast Superdesk Publisher theme built to serve those media operations that are not primarily focused on daily content production, but on fewer stories per day/week that have longer time span. Naturally this applies to traditional weekly, be-weekly or even monthly type of magazines from the print world. 

**Magazine** theme features customizable menu-, html- and content list widgets which enable live-site editing from frontend.

To create richer user experience, 3rd-party services can be incorporated. In **Magazine** theme we showcase it with Disqus article comments.

SETTING UP DEVELOPMENT ENVIRONMENT
----------------------------------

For information and explanation on theme structure, please see http://superdesk-web-publisher.readthedocs.io/en/latest/themes.html 

This Superdesk Publisher theme uses Gulp workflow automation (http://gulpjs.com/). 

To correclty set-up working environment for theme development, you can follow these steps:

- Fork and clone, or just download the theme from GitHub (https://github.com/SuperdeskWebPublisher/theme-magazine)
- Make sure Gulp is working on your system (how to get it up and running see here: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- Gulp file is already there in theme. It has all necessary methods already implemented. For development purposes, you can simply fire the task 'watch' and it will automatically a) compile and add all css/scss/sass changes from `public/css/` to `public/dist/style.css`
b) add all js changes from `public/js/` to `public/dist/all.js` file
- For applying changes for production, there is the task 'build' which will also minify css and js and add specific version to these files (to prevent browser caching issues)
- You can also manually run tasks `sass`, `js`, `cssmin`, `jsmin`, `version`, as well as `sw` (service worker steps that ensure propper pre-caching on browser side)

ADJUSTING AND CUSTOMIZING THEME
-------------------------------
**Magazine** theme comes with predefined functionality which includes:
- front page with automatically or manually created content list of articles, editable html widget and list of most read articles (automatic content list)
- category pages
- article page divided on halves - fancy big image in one (with link to open article gallery if it exists), and article content in other half, with Disqus commenting enabled on the bottom
- Theme has built-in support for Google AMP (accelerated mobile pages). These templates are in subfolder `/amp`. More information on Google AMP project is here: https://www.ampproject.org/

For theme templates customization please refer to Superdesk Publisher documentation, starting here: http://superdesk-web-publisher.readthedocs.io/en/latest/templates_system/index.html
