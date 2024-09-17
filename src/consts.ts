// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "KisaragiAkari";
export const SITE_TITLE = "φ(゜▽゜*)♪";
export const SITE_DESCRIPTION = "blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "KisaragiAkari";
export const USER_AVATAR = "/avatar.jpg";

// Server and transition settings
export const SERVER_URL = "https://kisaragiakari.netlify.app";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "friend",
    text: "Friend",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/KisaragiAkari",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/295357491",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
