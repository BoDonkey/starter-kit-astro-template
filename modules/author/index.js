export default {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Author',
    pluralLabel: 'Authors'
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Name'
      },
      profileImage: {
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {
              aspectRatio: [1, 1],
              size: 'full'
            }
          }
        }
      },
      biography: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      email: {
        type: 'email',
        label: 'Email Address'
      },
      socialLinks: {
        type: 'array',
        label: 'Social Media Links',
        titleField: 'platform',
        fields: {
          add: {
            platform: {
              type: 'select',
              choices: [
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'GitHub', value: 'github' },
                { label: 'Personal Website', value: 'website' }
              ]
            },
            url: {
              type: 'url',
              label: 'Profile URL'
            }
          }
        }
      },
      _articles: {
        type: 'relationshipReverse',
        label: 'Articles',
        withType: 'article',
        reverseOf: '_author'
      }
    },
    group: {
      basics: {
        label: 'Basic Info',
        fields: ['title', 'email', 'profileImage', '_articles']
      },
      content: {
        label: 'Content',
        fields: ['biography']
      },
      social: {
        label: 'Social Media',
        fields: ['socialLinks']
      }
    }
  }
};
