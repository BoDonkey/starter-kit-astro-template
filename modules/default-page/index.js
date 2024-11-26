import { getFilteredWidgets } from '../../lib/helpers/area-widgets.js';

export default {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Default Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: getFilteredWidgets({
            includeLayouts: true
          })
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'main'
        ]
      }
    }
  }
};
