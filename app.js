import apostrophe from 'apostrophe';

export default apostrophe({
  root: import.meta,
  shortName: 'starter-kit-astro-template',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // Most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    //
    // ********************************

    // pieces
    article: {},
    author: {},

    // pages
    'default-page': {},
    'article-page': {},

    // widgets
    'grid-layout-widget': {},
    'accordion-widget': {},
    'card-widget': {},
    'hero-widget': {},
    'link-widget': {},
    'slideshow-widget': {},
    'rows-widget': {}
  }
});
