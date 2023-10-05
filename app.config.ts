export default defineAppConfig({
  docus: {
    title: 'Auto ID Technologies',
    description: 'Auto ID Components and Tools by Krystian Duma',
    url: 'https://autoid.duma.sh/',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      // twitter: 'nuxt_js',
      github: 'kduma-autoid',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'autoid.duma.sh',
      owner: 'kduma-autoid',
      edit: true
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: false,
        text: 'Created by Krystian Duma',
        href: 'https://krystian.duma.sh',
      },
      // iconLinks: [
      //   {
      //     label: 'NuxtJS',
      //     href: 'https://nuxtjs.org',
      //     icon: 'IconNuxtLabs',
      //   },
      //   {
      //     label: 'Vue Telescope',
      //     href: 'https://vuetelescope.com',
      //     icon: 'IconVueTelescope',
      //   },
      // ],
      }
    }
})
