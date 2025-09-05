import nextra from 'nextra';
import webpack from 'webpack';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  transform(content, { route }) {
    if (route.startsWith('/docs/advanced/more/tree/two')) {
      return `
${content}
export function getStaticProps() {
  return {
    props: {
      foo: 'from nextra config'
    }
  }
}`;
    }
    return content;
  },
  latex: true,
});

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  i18n: {
    locales: ['en-US', 'es-ES', 'ru'],
    defaultLocale: 'en-US',
  }, // basePath: "/some-base-path",
  distDir: './.next', // Nextra supports custom `nextConfig.distDir`
  redirects: () => [
    // {
    //   source: "/docs.([a-zA-Z-]+)",
    //   destination: "/docs/getting-started",
    //   statusCode: 301,
    // },
    // {
    //   source: "/advanced/performance",
    //   destination: "/docs/advanced/performance",
    //   statusCode: 301,
    // },
    // {
    //   source: "/advanced/cache",
    //   destination: "/docs/advanced/cache",
    //   statusCode: 301,
    // },
    // {
    //   source: "/docs/cache",
    //   destination: "/docs/advanced/cache",
    //   statusCode: 301,
    // },
    {
      source: '/change-log',
      destination: '/docs/change-log',
      statusCode: 301,
    },
    {
      source: '/docs.([a-zA-Z-]+)',
      destination: '/docs/v2/getting-started',
      statusCode: 302,
    },
    {
      source: '/docs',
      destination: '/docs/v2/getting-started',
      statusCode: 302,
    },
  ],
  reactStrictMode: false,

  transpilePackages: [
    'react-native',
    'react-native-modal',
    'react-native-animatable',
    'react-native-web',
    'react-native-toast-message',
    'react-native-vector-icons',
    'react-native-ficus-ui',
    'react-native-confirmation-code-field',
    'react-native-gesture-handler',
    'react-native-picker-select',
    'react-native-reanimated',
    'react-native-tab-view',
    'recyclerlistview',
    '@gorhom/bottom-sheet',
    '@react-native-picker/picker',
    '@react-native-community/slider',
    '@shopify/flash-list'
  ],

  webpack: (config, { isDevelopment }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      'react-native/index.js': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    config.plugins.push(new webpack.DefinePlugin({ __DEV__: isDevelopment, }));
    return config;
  },
});
