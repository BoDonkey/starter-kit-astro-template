import { getFilteredWidgets } from '../../lib/helpers/area-widgets.js';

export default {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    pluralLabel: 'Articles'
  },
  fields: {
    add: {
      _heroImage: {
        type: 'relationship',
        label: 'Hero Image',
        withType: '@apostrophecms/image',
        max: 1
      },
      excerpt: {
        type: 'string',
        textarea: true,
        label: 'Article Excerpt',
        help: 'Brief summary for listings and previews'
      },
      mainContent: {
        type: 'area',
        options: {
          expanded: true,
          widgets: getFilteredWidgets({
            includeLayouts: true
          })
        }
      },
      _author: {
        type: 'relationship',
        label: 'Author',
        withType: 'author'
      },
      publishDate: {
        lable: 'Publication Date',
        type: 'date',
        required: true
      },
      _related: {
        type: 'relationship',
        label: 'Related Articles',
        withType: 'article',
        max: 4
      }
    },
    group: {
      basics: {
        label: 'Basic Info',
        fields: ['_author', 'publishDate', '_related']
      },
      content: {
        label: 'Content',
        fields: ['_heroImage', 'excerpt', 'mainContent']
      }
    }
  }
};
