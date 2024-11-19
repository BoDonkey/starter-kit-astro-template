import apostrophe from 'apostrophe';

export default apostrophe({
  root: import.meta,
  shortName: 'apos-material',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
    },
    '@apostrophecms/image-widget': {
    },
    '@apostrophecms/video-widget': {
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // '@apostrophecms/vite': {},
    // '@apostrophecms/asset': {
    //   options: {
    //     hmr: false
    //   }
    // },
    // The project's first custom page type.
    'default-page': {},
    article: {},
    'article-page': {},
    author: {},
    'grid-layout-widget': {},
    'accordion-widget': {},
    'card-widget': {},
    'hero-widget': {},
    'link-widget': {},
    'slideshow-widget': {},
    'rows-widget': {}
  }
});
