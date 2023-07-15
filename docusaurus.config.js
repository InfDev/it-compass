// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'Блог Олександра Шляхто',
          //blogDescription: 'A Docusaurus powered blog!',
          //postsPerPage: 'ALL',
          blogSidebarTitle: 'Останні пости',
          // blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/InfDev/it-compass/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            title: 'Документи',
            items: [
              {
                label: 'Теми',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Спільнота',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'Більше',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/InfDev/it-compass',
              },
            ],
          },
        ],
*/        
        copyright: `${new Date().getFullYear()} InfDev. Створено за допомогою <a href='https://docusaurus.io/' target='_blank'>Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp'],
      },
    }),

    themes: [
      [
        // @ts-ignore
        "@easyops-cn/docusaurus-search-local",
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        // @ts-ignore
        ({
          hashed: true,
          language: ["en", "ru", "uk"],
          highlightSearchTermsOnTargetPage: true,
          // explicitSearchResultPath: true,
        }),
      ],
    ],
      
//    plugins: [
//      [
//        require.resolve("@cmfcmf/docusaurus-search-local"),
//        {
//          indexDocs: true,
//          indexBlog: true,
//          indexPages: true,
//          language: ["uk", "ru", "en"],
//        },
//      ],
//    ],
  };

module.exports = config;
