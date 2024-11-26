import colorOptionsHelper from '../../lib/helpers/color-options.js';

export default {
  slideDuration: {
    type: 'integer',
    label: 'Slide Duration (ms)',
    def: 5000,
    min: 1000,
    max: 20000
  },
  transitionSpeed: {
    type: 'integer',
    label: 'Transition Speed (ms)',
    def: 300,
    min: 100,
    max: 2000
  },
  autoplay: {
    type: 'boolean',
    label: 'Enable Autoplay',
    def: true
  },
  showControls: {
    type: 'boolean',
    label: 'Show Navigation Controls',
    def: true
  },
  slides: {
    type: 'array',
    label: 'Slides',
    titleField: 'slideTitle',
    fields: {
      add: {
        slideTitle: {
          type: 'string',
          label: 'Slide Title',
          required: true
        },
        titleColor: {
          type: 'select',
          label: 'Title Color',
          choices: colorOptionsHelper.getColorOptions().filter(color =>
            color.value !== 'transparent'
          )
        },
        _image: {
          type: 'relationship',
          label: 'Slide Image',
          withType: '@apostrophecms/image',
          max: 1
        },
        cardContent: {
          type: 'string',
          label: 'Slide Content',
          textarea: true
        },
        contentColor: {
          type: 'select',
          label: 'Content Text Color',
          choices: colorOptionsHelper.getColorOptions().filter(color =>
            color.value !== 'transparent'
          )
        }
      }
    }
  }
};
