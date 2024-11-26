export const contentWidgets = {
  '@apostrophecms/image': {},
  '@apostrophecms/video': {},
  '@apostrophecms/rich-text': {
    toolbar: [
      'styles',
      '|',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'bulletList',
      'orderedList',
      '|',
      'blockquote',
      'codeBlock',
      '|',
      'horizontalRule',
      '|',
      'undo',
      'redo'
    ],
    styles: [
      {
        tag: 'p',
        label: 'Paragraph (P)'
      },
      {
        tag: 'h3',
        label: 'Heading 3 (H3)'
      },
      {
        tag: 'h4',
        label: 'Heading 4 (H4)'
      }
    ],
    insert: [
      'table',
      'image'
    ]
  },
  slideshow: {},
  card: {},
  hero: {},
  accordion: {},
  link: {}
};

export const layoutWidgets = {
  'grid-layout': {},
  rows: {}
};

/**
 * Combines content and layout widgets with optional exclusions.
 * @param {Object} options - Options to customize the widget list.
 * @param {boolean} options.includeLayouts - If true, includes layout widgets.
 * @param {Array<string>} options.exclude - Array of widget keys to exclude.
 * @returns {Object} Filtered widgets.
 *
 * @example
 * // Get only content widgets
 * const contentOnly = getFilteredWidgets();
 *
 * @example
 * // Include layout widgets but exclude grid-layout
 * const noGridLayout = getFilteredWidgets({
 *   includeLayouts: true,
 *   exclude: ['grid-layout']
 * });
 *
 */

export const getFilteredWidgets = ({ includeLayouts = false, exclude = [] } = {}) => {
  const combinedWidgets = includeLayouts
    ? { ...contentWidgets, ...layoutWidgets }
    : { ...contentWidgets };

  // Validate excluded widgets exist
  const invalidWidgets = exclude.filter(key => !(key in combinedWidgets));
  if (invalidWidgets.length > 0) {
    throw new Error(`Invalid widget keys in exclude array: ${invalidWidgets.join(', ')}`);
  }

  return Object.fromEntries(
    Object.entries(combinedWidgets).filter(([key]) => !exclude.includes(key))
  );
};
