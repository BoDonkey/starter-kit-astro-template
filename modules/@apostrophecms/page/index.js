// This configures the @apostrophecms/page module to add a "home" page type to the
// pages menu

export default {
  options: {
    builders: {
      children: true,
      ancestors: {
        children: {
          depth: 2,
          relationships: false
        }
      }
    },
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/blog-page',
        label: 'Blog Page'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ]
  }
};
