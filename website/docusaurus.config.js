// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Morphir',
  tagline: `A multi-language system built on a data format that captures an application's domain model and business logic in a technology agnostic manner`,
  url: 'https://zngly.github.io',
  baseUrl: '/morphir/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zngly',
  projectName: 'morphir',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/zngly/morphir/tree/main/docs/',
        },
        blog: {
          path: '../blog',
          showReadingTime: true,
          editUrl: 'https://github.com/zngly/morphir/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        // title: '',
        logo: {
          alt: 'Morphir Logo',
          src: 'img/logo_wide.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/zngly/morphir',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'FINOS Initiatives',
            items: [
              {
                label: 'FINOS Projects on GitHub',
                to: 'https://github.com/finos',
              },
              {
                label: 'Engage the FINOS Community',
                to: 'https://www.finos.org/engage-with-our-community',
              },
              {
                label: 'FINOS News and Events',
                to: 'https://www.finos.org/news-and-events',
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Browse Morphir Good First Issues',
                href: 'https://github.com/finos/morphir/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
              },
              {
                label: 'Ask a Morphir Question',
                href: 'https://github.com/finos/morphir/issues/new?assignees=&labels=&template=Support_question.md',
              },
            ],
          },
          {
            title: 'FINOS Community',
            items: [
              {
                label: 'FINOS Community Handbook',
                to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook',
              },
              {
                label: 'FINOS Community Governance',
                href: 'https://github.com/finos/community/tree/master/governance',
              },
              {
                label: 'FINOS on LinkedIn',
                href: 'https://www.linkedin.com/company/finosfoundation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Morphir - FINOS - The Fintech Open Source Foundation`,
        logo: {
          alt: 'FINOS Logo',
          src: 'img/finos_wordmark.svg',
          href: 'https://finos.org'
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
