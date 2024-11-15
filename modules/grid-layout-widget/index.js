export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Grid Layout Widget',
    width: 'half',
    defaultWidgets: {
      '@apostrophecms/rich-text': {},
      '@apostrophecms/image': {},
      '@apostrophecms/video': {},
      rows: {},
      card: {},
      hero: {},
      accordion: {}
    },
    widgets: false
  },
  fields(self, options) {
    const widgets = self.options.widgets || self.options.defaultWidgets;
    return {
      add: {
        layoutType: {
          type: 'select',
          label: 'Layout Type',
          help: 'Select one of the preset layouts or choose "Custom" to create your own grid layout.',
          required: true,
          choices: [
            {
              label: 'Aside + Main Content',
              value: 'asideMainThree'
            },
            {
              label: 'Main Content + Aside',
              value: 'mainAsideThree'
            },
            {
              label: 'Aside + Two Main Sections',
              value: 'asideTwoMain'
            },
            {
              label: 'Two Main Sections + Aside',
              value: 'twoMainAside'
            },
            {
              label: 'Header + 2 Columns + Footer',
              value: 'headerTwoColFooter'
            },
            {
              label: 'Featured + 3 Column Grid',
              value: 'featuredThreeGrid'
            },
            {
              label: 'Custom Grid',
              value: 'custom'
            }
          ]
        },
        maxWidth: {
          type: 'select',
          label: 'Maximum Content Width',
          choices: [
            { label: 'Full Width', value: '' },
            { label: 'Extra Narrow (768px)', value: 'max-width-768' },
            { label: 'Narrow (960px)', value: 'max-width-960' },
            { label: 'Medium (1152px)', value: 'max-width-1152' },
            { label: 'Wide (1344px)', value: 'max-width-1344' }
          ],
          def: ''
        },
        asideContent: {
          type: 'area',
          label: 'Aside Content',
          options: { widgets },
          if: {
            $or: [
              { layoutType: 'asideMainThree' },
              { layoutType: 'mainAsideThree' }
            ]
          }
        },
        mainContent: {
          type: 'area',
          label: 'Main Content',
          options: { widgets },
          if: {
            $or: [
              { layoutType: 'asideMainThree' },
              { layoutType: 'mainAsideThree' }
            ]
          }
        },
        headerContent: {
          type: 'area',
          label: 'Header Content',
          options: { widgets },
          if: {
            layoutType: 'headerTwoColFooter'
          }
        },
        leftColumnContent: {
          type: 'area',
          label: 'Left Column',
          options: { widgets },
          if: {
            layoutType: 'headerTwoColFooter'
          }
        },
        rightColumnContent: {
          type: 'area',
          label: 'Right Column',
          options: { widgets },
          if: {
            layoutType: 'headerTwoColFooter'
          }
        },
        footerContent: {
          type: 'area',
          label: 'Footer Content',
          options: { widgets },
          if: {
            layoutType: 'headerTwoColFooter'
          }
        },
        featuredContent: {
          type: 'area',
          label: 'Featured Content',
          options: { widgets },
          if: {
            layoutType: 'featuredThreeGrid'
          }
        },
        columnOneContent: {
          type: 'area',
          label: 'Column One',
          options: { widgets },
          if: {
            layoutType: 'featuredThreeGrid'
          }
        },
        columnTwoContent: {
          type: 'area',
          label: 'Column Two',
          options: { widgets },
          if: {
            layoutType: 'featuredThreeGrid'
          }
        },
        columnThreeContent: {
          type: 'area',
          label: 'Column Three',
          options: { widgets },
          if: {
            layoutType: 'featuredThreeGrid'
          }
        },
        asideLongContent: {
          type: 'area',
          label: 'Aside Content (Full Height)',
          options: { widgets },
          if: {
            $or: [
              { layoutType: 'twoMainAside' },
              { layoutType: 'asideTwoMain' }
            ]
          }
        },
        mainTopContent: {
          type: 'area',
          label: 'Main Content - Top Section',
          options: { widgets },
          if: {
            $or: [
              { layoutType: 'twoMainAside' },
              { layoutType: 'asideTwoMain' }
            ]
          }
        },
        mainBottomContent: {
          type: 'area',
          label: 'Main Content - Bottom Section',
          options: { widgets },
          if: {
            $or: [
              { layoutType: 'twoMainAside' },
              { layoutType: 'asideTwoMain' }
            ]
          }
        },
        // Custom grid settings
        customGrid: {
          type: 'object',
          label: 'Custom Grid Settings',
          if: {
            layoutType: 'custom'
          },
          fields: {
            add: {
              rows: {
                type: 'integer',
                label: 'Number of Rows',
                def: 2
              },
              columns: {
                type: 'integer',
                label: 'Number of Columns',
                def: 2
              },
              gap: {
                type: 'string',
                label: 'Grid Gap',
                help: 'Set the spacing between grid items, e.g., "10px" or "1rem".',
                def: '10px'
              },
              padding: {
                type: 'string',
                label: 'Grid Padding',
                help: 'Set the padding for the grid container, e.g., "20px" or "2rem".',
                def: '0px'
              },
              margin: {
                type: 'string',
                label: 'Grid Margin',
                help: 'Set the margin for the grid container, e.g., "20px" or "2rem".',
                def: '0px'
              },
              contentAreas: {
                type: 'array',
                label: 'Content Areas',
                titleField: 'name',
                fields: {
                  add: {
                    name: {
                      type: 'string',
                      label: 'Grid Area Name'
                    },
                    rowStart: {
                      type: 'integer',
                      label: 'Row Start'
                    },
                    rowSpan: {
                      type: 'integer',
                      label: 'Row Span',
                      def: 1
                    },
                    colStart: {
                      type: 'integer',
                      label: 'Column Start'
                    },
                    colSpan: {
                      type: 'integer',
                      label: 'Column Span',
                      def: 1
                    },
                    content: {
                      type: 'area',
                      label: 'Content',
                      options: {
                        widgets
                      }
                    }
                  }
                }
              }
            }
          }
        },
        // Global options
        addOverride: {
          type: 'boolean',
          label: 'Add CSS target override?',
          help: 'Check this box to add an additional class for custom CSS targeting.',
        },
        overrideClass: {
          type: 'string',
          label: 'Override Class',
          help: 'Add a custom class for CSS targeting.',
          if: {
            addOverride: true
          }
        }
      }
    };
  }
};