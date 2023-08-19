// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

//const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Verza Docs',
  tagline: 'Documentation',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.verza.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'verzaio', // Usually your GitHub org/user name.
  projectName: 'verza-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/verzaio/verza-docs/tree/main',
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const sidebarItems = await defaultSidebarItemsGenerator(args);

            //const sdk = sidebarItems.find(e => e.label === 'SDK');

            return sidebarItems;
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        indexBlog: false,

        indexDocs: true,

        docsRouteBasePath: '/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'Verza',
        logo: {
          alt: 'Logo',
          src: 'img/logo-v2.svg',
        },
        items: [
          /* {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          }, */
          {
            position: 'left',
            label: 'Get Started',
            href: '/getting-started',
          },
          {
            position: 'left',
            label: 'Concepts',
            href: '/concepts',
          },
          {
            position: 'left',
            label: 'Guides',
            href: '/guides',
          },
          {
            position: 'left',
            label: 'SDK Reference',
            href: '/sdk',
          },
          {
            position: 'left',
            label: 'React SDK',
            href: '/sdk/react',
          },
          {
            position: 'left',
            label: 'References',
            items: [
              {
                label: 'Managers',
                href: '/sdk/managers',
              },
              {
                label: 'Events',
                href: '/sdk/events',
              },
              {
                label: 'Types',
                href: '/sdk/types',
              },
            ],
          },

          /* {
            type: 'localeDropdown',
            position: 'right',
          }, */
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://verza.io',
            label: 'verza.io',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/welcome',
              },
              {
                label: 'Concepts',
                to: '/concepts',
              },
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'SDK Reference',
                to: '/sdk',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.verza.io/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/verza_io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/verzaio',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/verzaio/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Verza Labs, Inc.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
