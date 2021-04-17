/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CircuitVerse Simulator',
  tagline: 'Simulator Codebase Explained',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CircuitVerse',
      logo: {
        alt: 'CircuitVerse Logo',
        src: 'data:image/png;base64,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',
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
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
