import colorOptionsHelper from '../../lib/helpers/color-options.js';
import { getFilteredWidgets } from '../../lib/helpers/area-widgets.js';

export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Accordion',
    icon: 'arrow-down-drop-circle',
    previewImage: 'svg',
    description: 'An accordion of items with headers and content.'
  },
  icons: {
    'arrow-down-drop-circle': 'ArrowDownDropCircle'
  },
  fields: {
    add: {
      itemBackgroundColor: {
        type: 'select',
        label: 'Item Background Color',
        choices: colorOptionsHelper.getColorOptions(),
        def: 'white'
      },
      allowMultipleOpen: {
        type: 'boolean',
        label: 'Allow Multiple Items Open',
        def: false
      },
      defaultOpenIndex: {
        type: 'integer',
        label: 'Default Open Item (0-based, -1 for none)',
        def: -1
      },
      items: {
        type: 'array',
        label: 'Items',
        titleField: 'header',
        fields: {
          add: {
            header: {
              type: 'string',
              label: 'Header'
            },
            headerColor: {
              type: 'select',
              label: 'Header Color',
              choices: colorOptionsHelper.getColorOptions(),
              def: 'black'
            },
            headerAlignment: {
              type: 'select',
              label: 'Header Alignment',
              choices: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' }
              ],
              def: 'left'
            },
            content: {
              type: 'area',
              label: 'Content',
              options: {
                widgets: getFilteredWidgets({
                  exclude: ['accordion']
                })
              }
            }
          }
        }
      }
    }
  }
};
