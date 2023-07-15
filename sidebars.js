/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    { type: 'category', label: 'Навички загальні',
      items: [
        { type: 'doc', id: 'skills/knowledge-skills-abilities' },
        { type: 'doc', id: 'skills/languages-of-communication' },
        { type: 'doc', id: 'skills/work-with-documents-on-pc'},
        { type: 'doc', id: 'skills/business-correspondence' },
        { type: 'doc', id: 'skills/about-web' },
        { type: 'doc', id: 'skills/information-search'},
        { type: 'doc', id: 'skills/time-management' },
      ]
    },
    {
      type: 'category', label: 'Стандарти',
      items: [
        { type: 'doc', id: 'standards/index', },
        { type: 'doc', id: 'standards/what-standards-to-follow', },
        { type: 'doc', id: 'standards/maintenance-standards' },
        { type: 'doc', id: 'standards/naming-conventions' },
        { type: 'doc', id: 'standards/it-law' },
        { type: 'doc', id: 'standards/license-types' },
        { type: 'doc', id: 'standards/api-architecture-styles'},
      ]
    },
    {
      type: 'category', label: 'Документування',
      items: [
        { type: 'doc', id: 'documentation/index' },
        { type: 'doc', id: 'documentation/markdown' },
        { type: 'doc', id: 'documentation/html-special-characters' },
      ]
    },
    {
      type: 'category', label: 'Системи',
      items: [
        { type: 'doc', id: 'os/index' },
        { type: 'doc', id: 'os/windows' },
        { type: 'doc', id: 'os/linux' },
        { type: 'doc', id: 'os/powershell-core' },
        { type: 'doc', id: 'os/docker' },
      ]
    },
    {
      type: 'category', label: 'Інструменти',
      items: [
        { type: 'doc', id: 'tools/common-apps' },
        { type: 'doc', id: 'tools/user-tools' },
        { type: 'doc', id: 'tools/developer-tools' },
        { type: 'doc', id: 'tools/cheat-sheets' },
      ]
    },
    {
      type: 'category', label: 'Проектування',
      items: [
        { type: 'doc', id: 'designing/design-tools' },
        { type: 'doc', id: 'designing/design-patterns' },
        { type: 'doc', id: 'designing/programming-paradigms' },
        { type: 'doc', id: 'designing/oop' },
        { type: 'doc', id: 'designing/functional-programming' },
        { type: 'doc', id: 'designing/refactoring' },
        //{ type: 'doc', id: 'designing/' },
      ]
    },
    {
      type: 'category', label: 'Мови кодування',
      items: [
        { type: 'doc', id: 'сoding-languages/language-types' },
        { type: 'doc', id: 'сoding-languages/html5+css3' },
        { type: 'doc', id: 'сoding-languages/js-ts' },
        { type: 'doc', id: 'сoding-languages/python' },
        { type: 'doc', id: 'сoding-languages/csharp' },
      ]
    },
    {
      type: 'category', label: 'Веб-розробка',
      items: [
        { type: 'doc', id: 'web-development/intro' },
        { type: 'doc', id: 'web-development/asp.net-core' },
        { type: 'doc', id: 'web-development/js-frameworks' },
        { type: 'doc', id: 'web-development/e-commerce' },
        { type: 'doc', id: 'web-development/book-cloud-native' },
      ]
    },
    {
      type: 'category', label: 'Тренди та робота',
      items: [
        { type: 'doc', id: 'trends/software-development-trends', },
        { type: 'doc', id: 'trends/programming-language-trends', },
        { type: 'doc', id: 'trends/how-to-find-work' }
      ]
    },
    {
      type: 'category', label: 'Плюшки',
      items: [
        { type: 'doc', id: 'buns/cron-expressions', },
        //{ type: 'doc', id: 'buns/', },
        //{ type: 'doc', id: 'buns/' }
      ]
    },
  ],
};

module.exports = sidebars;
