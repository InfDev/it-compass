import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ІТ-компас',
  tagline: 'Мій помічник. Коротко за тематикою та посилання на ресурси',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://infdev.com.ua',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'InfDev', // Usually your GitHub org/user name.
  projectName: 'it-compass', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'ru', 'en'],
    localeConfigs: {
      uk: { htmlLang: 'uk-UA' },
      ru: { htmlLang: 'ru-RU' },
      en: { htmlLang: 'en-US' },
    }
  },

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-3XXFJH827W',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Блог Олександра Шляхто',
          blogSidebarTitle: 'Останні пости',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ІТ-компас',
      logo: {
        alt: 'Логотип сайту',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Теми',
        },
        {to: '/blog', label: 'Блог', position: 'left'},
        {
          href: 'https://github.com/InfDev/it-compass',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
/*      
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
*/
      copyright: `${new Date().getFullYear()} InfDev. Створено за допомогою <a href='https://docusaurus.io/' target='_blank'>Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'csharp'],
    },
  },
/*
  themes: [
    [
      // @ts-ignore
      "@easyops-cn/docusaurus-search-local",
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "ru", "uk"],
        highlightSearchTermsOnTargetPage: true,
        // explicitSearchResultPath: true,
      }),
    ],
  ],
*/
};

export default config;
