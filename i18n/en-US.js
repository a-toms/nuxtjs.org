import en from '~docus-i18n/en-US'

export default {
  ...en,
  header: {
    Docs: "Docs",
    Examples: "Examples",
    Resources: "Resources",
    Blog: "Blog",
    Modules: "Modules",
    Partners: "Partners",
    "Video Courses": "Video courses"
  },
  footer: {
    titles: {
      Discover: "Discover",
      Help: "Help",
      Support: "Support"
    },
    "Our team": "Our team",
    "Design Kit": "Design Kit",
    "Contact us": "Contact us",
    "Resources": "Resources",
    "Chat with us": "Chat with us",
    "Contribution guide": "Contribution guide",
    Sustainability: "Sustainability",
    Training: "Training",
    newsletter: {
      title: "Subscribe to our newsletter",
      description: "The latest news, articles, and resources, sent to your inbox monthly.",
      form: {
        email: 'Email',
        subscribing: 'Subscribing...',
        subscribe: 'Subscribe',
        already_registered: 'You are already registered',
        invalid_address: 'Invalid address',
        subscribed_messages: {
          pre: 'An email to confirm your subscription has been sent to',
          confirmation: 'Email confirmed'
        }
      }
    },
    license: "NuxtJS is an open source framework under MIT license."
  },
  sidebar: {
    partners: {
      title: "Partners",
      button: "Support Us"
    },
    ads: {
      fallback: {
        title: "NuxtJS needs you!",
        description: "By allowing nuxtjs.org on your Ad-Blocker, you support our work and help us financially."
      }
    }
  },
  home: {
    discover: {
      pages: 'Pages',
      ui: 'UI',
      data: 'Data',
      modules: 'Modules',
      deployment: 'Deployment'
    },
    cli: 'From CLI',
    scratch: 'From Scratch'
  },
  modules: {
    search: "Search a module (name, category, username, etc.)",
    sort_by: "Sort by",
    sort_fields: {
      downloads: "Downloads",
      stars: "Stars"
    },
    loading: "Loading...",
    error: "Une erreur est survenue lors de la récupération des modules"
  },
  resources: {
    themes: {
      get_for_it: "Get it for {price}",
      video_course: "Start course"
    }
  },
  sustainability: {
    tiers: {
      mvp_partners: "MVP Partners",
      partners: "Partners",
      sponsors: "Sponsors",
      donations: "Donate"
    },
    mvp_detail: {
      services: "Services",
      location: "Location",
      contact_partner: "Contact Partner",
      visit_website: "Visit Website"
    }
  },
  showcases: {
    loading: 'Loading...'
  },
  common: {
    an_error_occurred: 'An error occurred',
    page_not_found: "We couldn't find the page you are looking for.",
    please_define_title: 'Please define a title in the front matter',
    please_define_description: 'Please define a description in the front matter',
    search: 'Search ("/" to focus)',
    settings: 'Settings',
    version: 'Version',
    currently_version: 'Currently in private beta',
    back: 'Back',
    go_to: "Go to {title}",
    go_home: "Go home",
    read_article: "Read article"
  },
  iso: 'en'
}
