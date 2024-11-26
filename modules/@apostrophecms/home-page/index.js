import colorOptionsHelper from '../../../lib/helpers/color-options.js';

import { getFilteredWidgets } from '../../../lib/helpers/area-widgets.js';
import heroFields from '../../../lib/schema-mixins/hero-fields.js';
import slideshowFields from '../../../lib/schema-mixins/slideshow-fields.js';

export default {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      layout: {
        type: 'select',
        label: 'Layout',
        choices: [
          {
            label: 'Foundation - with Hero',
            value: 'foundation',
            help: 'Traditional layout with hero section at the top'
          },
          {
            label: 'Showcase - with Slideshow',
            value: 'showcase',
            help: 'Features a prominent slideshow at the top'
          },
          {
            label: 'Minimal',
            value: 'minimal',
            help: 'Clean slate for custom designs'
          }
        ],
        def: 'foundation'
      },
      // Hero Section - For Foundation Layout
      heroSection: {
        type: 'object',
        label: 'Hero Section',
        fields: {
          add: heroFields
        },
        if: {
          layout: 'foundation'
        }
      },
      // Showcase Layout Sections
      showcaseSlideshow: {
        type: 'object',
        label: 'Showcase Slideshow',
        fields: {
          add: slideshowFields
        },
        if: {
          layout: 'showcase'
        }
      },
      addPageSections: {
        type: 'boolean',
        label: 'Add Premade Page Sections',
        help: 'You can elect to add premade sections to your homepage to get started quickly.',
        def: true,
        if: {
          $or: [
            { layout: 'foundation' },
            { layout: 'showcase' }
          ]
        }
      },
      additionalSectionsContent: {
        type: 'array',
        label: 'Additional Content Sections',
        help: 'Add more sections to your homepage. They will be added in the same order as the array. Add an "area" section for a free-form content area.',
        titleField: 'sectionType',
        inline: {
          alwaysExpand: false
        },
        fields: {
          add: {
            sectionType: {
              type: 'select',
              label: 'Section Type',
              choices: [
                { label: 'Floating Cards', value: 'flcards' },
                { label: 'Testimonials', value: 'testimonials' },
                { label: 'Content Grid', value: 'contentGrid' },
                { label: 'Area', value: 'area' }
              ],
              required: true
            },
            floatingCardsSection: {
              type: 'object',
              label: 'Floating Cards content',
              fields: {
                add: {
                  topTitle: {
                    type: 'string',
                    label: 'Top Title'
                  },
                  mainTitle: {
                    type: 'string',
                    label: 'Main Title'
                  },
                  topBackgroundColor: {
                    type: 'select',
                    label: 'Top Section Background',
                    choices: colorOptionsHelper.getColorOptions().filter(color =>
                      color.value !== 'transparent'
                    )
                  },
                  bottomBackgroundColor: {
                    type: 'select',
                    label: 'Bottom Section Background',
                    choices: colorOptionsHelper.getColorOptions().filter(color =>
                      color.value !== 'transparent'
                    )
                  },
                  features: {
                    type: 'array',
                    label: 'Feature Cards',
                    fields: {
                      add: {
                        title: {
                          type: 'string',
                          label: 'Card Title'
                        },
                        description: {
                          type: 'string',
                          textarea: true,
                          label: 'Card Description'
                        },
                        addCardImage: {
                          type: 'boolean',
                          label: 'Add card image?',
                          def: true
                        },
                        _image: {
                          type: 'relationship',
                          Label: 'Card image',
                          withType: '@apostrophecms/image',
                          max: 1,
                          if: {
                            addCardImage: true
                          }
                        }
                      }
                    }
                  },
                  columns: {
                    type: 'select',
                    label: 'Cards per Row',
                    choices: [
                      { label: '2 Cards', value: '6' },
                      { label: '3 Cards', value: '4' },
                      { label: '4 Cards', value: '3' }
                    ]
                  }
                }
              },
              if: {
                sectionType: 'flcards'
              }
            },
            testimonialsSection: {
              type: 'object',
              label: 'Testimonials',
              fields: {
                add: {
                  sectionTitle: {
                    type: 'string',
                    label: 'Section Title'
                  },
                  backgroundColor: {
                    type: 'select',
                    label: 'Background Color',
                    choices: colorOptionsHelper.getColorOptions().filter(color =>
                      color.value !== 'transparent'
                    )
                  },
                  testimonials: {
                    type: 'array',
                    label: 'Testimonials',
                    titleField: 'author',
                    fields: {
                      add: {
                        quote: {
                          type: 'string',
                          textarea: true,
                          label: 'Testimonial Quote'
                        },
                        author: {
                          type: 'string',
                          label: 'Author Name'
                        },
                        role: {
                          type: 'string',
                          label: 'Author Role/Company'
                        },
                        addAuthorImage: {
                          type: 'boolean',
                          label: 'Add Author Image?',
                          def: true
                        },
                        _avatar: {
                          label: 'Author Avatar',
                          type: 'relationship',
                          withType: '@apostrophecms/image',
                          max: 1,
                          if: {
                            addAuthorImage: true
                          }
                        },
                      }
                    }
                  }
                }
              },
              if: {
                sectionType: 'testimonials'
              }
            },
            contentGridSection: {
              type: 'object',
              label: 'Content Grid',
              fields: {
                add: {
                  contentTitle: {
                    type: 'string',
                    label: 'Section Title'
                  },
                  contentSubtitle: {
                    type: 'string',
                    label: 'Section Subtitle'
                  },
                  backgroundColor: {
                    type: 'select',
                    label: 'Background Color',
                    choices: colorOptionsHelper.getColorOptions().filter(color =>
                      color.value !== 'transparent'
                    )
                  },
                  gridItems: {
                    type: 'array',
                    label: 'Content Blocks',
                    titleField: 'blockTitle',
                    fields: {
                      add: {
                        _image: {
                          type: 'relationship',
                          label: 'Content Image',
                          withType: '@apostrophecms/image',
                          max: 1
                        },
                        imagePosition: {
                          type: 'select',
                          label: 'Image Position',
                          choices: [
                            { label: 'Left', value: 'left' },
                            { label: 'Right', value: 'right' }
                          ]
                        },
                        blockTitle: {
                          type: 'string',
                          label: 'Content Title'
                        },
                        content: {
                          type: 'area',
                          options: {
                            widgets: {
                              '@apostrophecms/rich-text': {
                                toolbar: ['styles', 'bold', 'italic', 'link', 'bulletList', 'orderedList']
                              }
                            }
                          },
                          label: 'Content Text'
                        },
                        ctaText: {
                          type: 'string',
                          label: 'Button Text'
                        },
                        ctaUrl: {
                          type: 'url',
                          label: 'Button URL'
                        },
                        ctaColor: {
                          type: 'select',
                          label: 'Button Color',
                          choices: colorOptionsHelper.getColorOptions().filter(color =>
                            color.value !== 'transparent'
                          )
                        }
                      }
                    }
                  }
                }
              },
              if: {
                sectionType: 'contentGrid'
              }
            },
            areaSection: {
              type: 'area',
              label: 'Custom Content Area',
              options: {
                widgets: getFilteredWidgets({
                  includeLayouts: true
                })
              },
              if: {
                sectionType: 'area'
              }
            }
          }
        }
      },
      // Main Content Area - Available for all layouts
      main: {
        type: 'area',
        label: 'Main Content',
        options: {
          widgets: getFilteredWidgets({
            includeLayouts: true
          })
        }
      }
    },
    group: {
      utility: {
        label: 'Layout Settings',
        fields: [
          'layout'
        ]
      },
      hero: {
        label: 'Hero Section',
        fields: [
          'heroSection'
        ]
      },
      showcase: {
        label: 'Showcase Content',
        fields: [
          'showcaseSlideshow'
        ]
      },
      content: {
        label: 'Content',
        fields: [
          'addPageSections',
          'additionalSectionsContent',
          'main'
        ]
      }
    }
  }
};
