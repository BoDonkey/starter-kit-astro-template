export default {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Article Page',
    perPage: 12
  },
  fields: {
    add: {
      masthead: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            rows: {},
            hero: {},
            slideshow: {}
          }
        }
      },
      beforeContent: {
        type: 'area',
        label: 'Before Articles Section',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            rows: {},
            hero: {},
            slideshow: {}
          }
        }
      },
      sidebarContent: {
        type: 'area',
        label: 'Sidebar Content',
        if: {
          indexLayout: 'sidebar'
        },
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            rows: {},
            hero: {},
            slideshow: {}
          }
        }
      },
      afterContent: {
        type: 'area',
        label: 'After Articles Section',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            rows: {},
            hero: {},
            slideshow: {}
          }
        }
      },
      indexLayout: {
        type: 'select',
        label: 'Index Page Layout',
        def: 'standard',
        choices: [
          {
            label: 'Hero Grid',
            value: 'heroGrid',
            help: 'Featured article with grid layout below'
          },
          {
            label: 'List with Aside',
            value: 'listAside',
            help: 'Articles in a list with side navigation'
          },
          {
            label: 'Standard',
            value: 'standard',
            help: 'Traditional blog-style listing'
          }
        ]
      },
      showLayout: {
        type: 'select',
        label: 'Article Display Layout',
        def: 'standard',
        choices: [
          {
            label: 'Full Width',
            value: 'fullWidth',
            help: 'Hero image and content spanning full width'
          },
          {
            label: 'With Sidebar',
            value: 'sidebar',
            help: 'Content with related articles sidebar'
          },
          {
            label: 'Magazine Style',
            value: 'magazine',
            help: 'Enhanced typography with pull quotes and featured sections'
          }
        ]
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['masthead', 'beforeContent', 'sidebarContent', 'afterContent']
      },
      utility: {
        label: 'Display Options',
        fields: ['indexLayout', 'showLayout']
      }
    }
  }
};
