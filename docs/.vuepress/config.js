module.exports = {
  title: 'Goodwin at Scripps College',
  base: '/',
  dest: 'public',
  description: 'Fletcher-Jones Scholar of Computation at Scripps College',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
    displayAllHeaders: true, // Default: false
    nav: [
      { text: 'home', link: '/' },
      { text: 'about', link: '/pages/about' },
      { text: 'pages', link: '/pages/', exact: false },
      { text: 'posts', link: '/' },
      { text: 'cairn.com', link: 'https://cairn.com' }
    ],
    authors: [
      {
        name: 'Doug',
        avatar: './assets/img/doug.jpg',
        link: 'https://cairn.com/',
        linktext: 'Follow',
      },
      {
        name: 'Douglas Goodwin',
        avatar: './assets/img/avatar.png',
        link: 'https://cairn.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/douglasgoodwin',
        },
        {
          type: 'instagram',
          link: 'https://www.instagram.com/douglasrgoodwin',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://opensource.org/licenses/MIT/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/douglasgoodwin/vuepress-theme-mediumish/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    // newsletter: {
    //   endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    // },
    // feed: {
    //   canonical_base: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    // },
    smoothScroll: true
  },
}
