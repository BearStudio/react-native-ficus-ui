'use strict';

// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
var theme = {
  plain: {
    color: '#393A34',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['maybe-class-name'],
      style: {
        opacity: 0.7,
        color: 'black',
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#86b300',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#abb0b6',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#ffae57',
      },
    },
    {
      types: ['atrule', 'attr-name'],
      style: {
        color: '#ffae57',
      },
    },
    {
      types: ['function', 'deleted'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector'],
      style: {
        color: '#41a6d9',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#f2590c',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#abb0b6',
      },
    },
  ],
};
module.exports = theme;
