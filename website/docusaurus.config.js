// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

const math = require("remark-math")
const katex = require("rehype-katex")

const organizationName = "Coollab-Art"
const projectName = "Lab"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Coollab",
  tagline: "A free generative-art software",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: `https://coollab-art.com/`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "content",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/icomoon.css"),
          ],
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    {
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      type: "text/css",
      integrity:
        "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
      crossorigin: "anonymous",
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&family=Roboto:wght@400;700&display=swap',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Coollab Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "Tutorials/Discovery/Intro",
            position: "left",
            label: "Tutorials",
          },
          {
            to: "Gallery",
            position: "left",
            label: "Gallery",
          },
          {
            to: "Contribute",
            position: "left",
            label: "Contribute",
          },
          {
            type: "doc",
            docId: "Articles/Alpaca/Alpaca",
            position: "left",
            label: "Articles",
          },
          {
            type: "doc",
            docId: "About",
            position: "left",
            label: "About",
          },
          {
            type: "html",
            position: "right",
            value: `
        <div class="navbar-socials">
          <a class="iconBtn" href="https://discord.com/invite/QEjqnEy4aT" target="_blank" rel="noopener" aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.182.33-.391.78-.537 1.137a18.27 18.27 0 0 0-4.043 0A8.26 8.26 0 0 0 11.44 3c-1.313.232-2.58.63-3.76 1.17C4.947 6.36 4.18 9.1 4.5 11.79c1.47 1.1 2.895 1.77 4.27 2.21.345-.47.651-.97.91-1.5- .5-.19-.98-.43-1.43-.71.12-.09.24-.18.36-.27 1.35.63 2.8.96 4.35.96 1.55 0 3-.33 4.35-.96.12.09.24.18.36.27-.45.28-.93.52-1.43.71.26.53.56 1.03.91 1.5 1.375-.44 2.8-1.11 4.27-2.21.35-2.83-.38-5.56-2.45-7.42ZM9.35 11.88c-.64 0-1.16-.6-1.16-1.34 0-.74.52-1.34 1.16-1.34.65 0 1.17.6 1.17 1.34 0 .74-.52 1.34-1.17 1.34Zm5.3 0c-.64 0-1.16-.6-1.16-1.34 0-.74.52-1.34 1.16-1.34.65 0 1.17.6 1.17 1.34 0 .74-.52 1.34-1.17 1.34Z"/>
            </svg>
          </a>
          <a class="iconBtn" href="https://www.instagram.com/coollab_art" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.25 6.25Z"/>
            </svg>
          </a>
          <a class="iconBtn" href="https://mastodon.social/@Coollab" target="_blank" rel="noopener" aria-label="Mastodon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.57 7.1c-.18-3.38-2.98-4.51-2.98-4.51C16.5 1.82 12.1 1.8 9.7 2.1c-2.4.3-3.9 1.15-3.9 1.15s-2.8 1.13-2.98 4.51c-.2 3.34-.1 7.28 1.16 9.1 1.27 1.82 3.37 1.88 3.37 1.88l.04-.04c.26-.02.52-.05.78-.09 2.4.55 4.47.48 4.47.48s2.07.07 4.47-.48c.26.04.52.07.78.09l.04.04s2.1-.06 3.37-1.88c1.26-1.82 1.36-5.76 1.16-9.1ZM17.7 15.3h-1.9V9.84c0-1.16-1.2-1.2-1.2 0v3.02h-1.8V9.84c0-1.16-1.2-1.2-1.2 0v5.46H8.7V9.58c0-2.97 4.9-3.08 4.9-.42v.44c.6-.93 3.1-1 3.1 1.1V15.3Z"/>
            </svg>
          </a>
        </div>
      `,
          },
          {
            type: "doc",
            docId: "Download/download",
            position: "right",
            label: "Download",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Find Us",
            items: [
              {
                label: "LinkTree",
                to: "https://linktr.ee/coollab_art",
              },
              {
                label: "GitHub",
                to: "https://github.com/Coollab-Art/Coollab",
              },
            ],
          },
          {
            title: "Raise an issue!",
            items: [
              {
                label: "Report a bug",
                to: "https://github.com/Coollab-Art/Coollab/issues/new?assignees=&labels=bug%2Ctriage&template=bug-report.yaml&title=%5BBug%5D+",
              },
              {
                label: "Give us feedback",
                to: "https://github.com/Coollab-Art/Coollab/issues/new?assignees=&labels=enhancement%2Ctriage&template=feature-suggestion.yaml&title=%5BFeature%5D+",
              },
            ],
          },
          {
            title: "Say thank you",
            items: [
              {
                label: "Send a nice message",
                to: "https://www.instagram.com/coollab_art/",
              },
              {
                label: "Leave a like",
                to: "https://www.instagram.com/coollab_art/",
              },
              {
                label: "Make a donation",
                to: "https://utip.io/coollab/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.</div>
                    `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["glsl", "cmake"],
      },
    }),
}

module.exports = config
