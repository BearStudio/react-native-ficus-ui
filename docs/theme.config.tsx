/* eslint sort-keys: error */
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import { LocaleSwitch, useConfig, useTheme } from 'nextra-theme-docs';
import type { ComponentProps, ReactElement } from 'react';

export const FicusLogo = (props: ComponentProps<'svg'>): ReactElement => (
  <svg viewBox="0 0 200 250" width="30" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#1dc98d"
      d="M100,20 C60,40 35,80 50,140 C70,200 100,240 100,240 C100,240 130,200 150,140 C165,80 140,40 100,20 Z"
    />

    <line x1="100" y1="20" x2="100" y2="240" stroke="white" strokeWidth="2" />
  </svg>
);

const TITLE = {
  'en-US': 'React Native Ficus UI',
};

const EDIT_TEXT = {
  'en-US': 'Edit this page on GitHub →',
};

const FOOTER_LINK = {
  'en-US': 'https://bearstudio.fr',
};

const FOOTER_LINK_TEXT = {
  'en-US': (
    <>
      Powered by
      <Image
        src="/img/bearstudio.png"
        width={100}
        height={50}
        alt="Bearstudio logo"
      />
    </>
  ),
};

const FOOTER_LINK_TEXT_DARK = {
  'en-US': (
    <>
      Powered by
      <Image
        src="/img/bearstudio-yellow.png"
        width={100}
        height={50}
        alt="Bearstudio logo"
      />
    </>
  ),
};

const config: DocsThemeConfig = {
  darkMode: true,
  docsRepositoryBase:
    'https://github.com/BearStudio/react-native-ficus-ui/tree/main/docs',
  editLink: {
    text: function useText() {
      const { locale } = useRouter();
      return EDIT_TEXT[locale!];
    },
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
    useLink() {
      const config = useConfig();
      return `https://google.com/search?q=${encodeURIComponent(
        `Feedback for ${config.title}`
      )}`;
    },
  },
  footer: {
    text: function useText() {
      const { locale } = useRouter();
      const { theme } = useTheme();

      return (
        <a
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 font-semibold"
          href={FOOTER_LINK[locale!]}
        >
          {}
          {theme === 'dark'
            ? FOOTER_LINK_TEXT_DARK[locale!]
            : FOOTER_LINK_TEXT[locale!]}
        </a>
      );
    },
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const description =
      'Ficus UI is a simple, modular and accessible UI library for React Native, forked from Magnus UI and inspired by Chakra UI';
    const image = '/img/banner.png';
    return (
      <>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={image} />
        <meta name="og:title" content={config.title} />
        <meta name="og:image" content={image} />
      </>
    );
  },
  i18n: [{ locale: 'en-US', text: 'English' }],
  logo: function Logo() {
    const { locale } = useRouter();
    return (
      <>
        <FicusLogo className="h-3" />
        <span
          className="hidden select-none font-extrabold ltr:ml-2 rtl:mr-2 md:inline"
          title={TITLE[locale!] || ''}
        >
          React Native Ficus UI
        </span>
      </>
    );
  },
  navbar: {
    extraContent: LocaleSwitch,
  },
  nextThemes: {
    defaultTheme: 'light',
  },
  project: {
    link: 'https://github.com/BearStudio/react-native-ficus-ui',
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) =>
      type === 'separator' ? (
        <div className="flex items-center gap-2">
          <FicusLogo className="h-1.5 shrink-0" />
          {title}
        </div>
      ) : (
        <>{title}</>
      ),
    toggleButton: true,
  },
  toc: {
    backToTop: true,

    float: true,
    headingComponent: function Heading({ id, children }) {
      return (
        <>
          {children}
          {id === 'installation' && ' 💿'}
        </>
      );
    },
  },
  primaryHue: 145,
  primarySaturation: 50,
  useNextSeoProps() {
    const { locale } = useRouter();
    return {
      titleTemplate: '%s | React Native Ficus UI',
    };
  },
};

export default config;
