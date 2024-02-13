'use strict';

// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
var theme = {
  plain: {
    color: 'white',
    backgroundColor: 'black',
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
      types: ['namespace'],
      style: {
        opacity: 0.7,
        color: 'red',
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: '#86b300',
      },
    },
    {
      types: ['operator', 'punctuation'],
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
        color: '#36acaa',
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
        color: '#5ccfe6',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#ffae57',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#bae67e',
      },
    },
  ],
};

module.exports = theme;
