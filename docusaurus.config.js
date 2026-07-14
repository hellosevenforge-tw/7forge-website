// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '7Forge',
  tagline: 'The API Documentation Operating System for Technical Writers, Freelancers, Startups & Agencies',
  favicon: 'img/favicon.ico',
  url: 'https://your-domain.com',
  baseUrl: '/',
  organizationName: '7forge',
  projectName: '7forge-docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '7Forge',
        logo: {
          alt: '7Forge Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation System',
          },
          {
            href: 'https://gumroad.com',
            label: 'Get the Template',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '7Forge',
            items: [
              { label: 'YouTube', href: 'https://www.youtube.com/channel/UClGBfS-XWqxpOaMt1ffA73w' },
              { label: 'Instagram', href: 'https://www.instagram.com/7forgetechwriting?igsh=MWdibTI0MDJydDRjOQ==' },
              { label: 'Gumroad Store', href: 'https://forgefire48.gumroad.com/l/xmyqub' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 7Forge. API Documentation Operating System.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml', 'python', 'javascript'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;

