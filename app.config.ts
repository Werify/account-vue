interface IHeaderLinks {
  icon?: string;
  title: string;
  link: string;
  submenu?: IHeaderLinks;
}
interface IHeader {
  logo: string;
  darkLogo: string;
  menu: {
    title: string;
    link: string;
  }[];
  subnavLinks?: IHeaderLinks[];
  megaMenu: boolean | string[];
  hideSubnavLink?: boolean;
  hideSearchBar: boolean;
  hideLanguageSelector: boolean;
  hideNotifications: boolean;
  hideappMenu: boolean;
  hideUserInfo: boolean;
  languageList: {
    lang: string;
    flagSrc: string;
    text: string;
  }[];
  hideThemeSelector: boolean;
  loginButton: {
    title: string;
    hideLoginButton: boolean;
    loginButtonClass: string;
    loginButtonIconName: string;
  };
}
interface IFooter {
  logo: string;
  darkLogo: string;
  footerLinks: {
    title: string;
    links: {
      title: string;
      link: string;
      target?: string;
    }[];
  }[];
  copyRight: string;
  partOf: string;
  emailAPI: string;
  socials: {
    icon: string;
    link: string;
  }[];
}
interface IAnnouncement {
  title: string;
  badge: string;
  link: ILink;
}
interface ILink {
  text: string;
  src: string;
}
export default defineAppConfig({
  docus: {
    title: "Werify Account Documentation",
    description: "Werify Account Docs",
    url: "http://account.werify.net/docs",
    image: "/social-card-preview.png",
    layout: "page",
    socials: {
      twitter: "@werify",
      github: "werify",
    },
  },
  config: {
    header: {
      logo: "/img/h-logo.svg",
      darkLogo: "/img/h-logo-dark.svg",
      menu: [
        { title: "Home", link: "/" },
        { title: "Features", link: "/features" },
        { title: "Pro", link: "/pro" },
        { title: "Pricing", link: "/pricing" },
        { title: "Help", link: "/help" },
      ],
      megaMenu: false,
      hideSearchBar: true,
      hideLanguageSelector: false,
      hideNotifications: true,
      hideappMenu: true,
      languageList: [
        {
          lang: "en",
          flagSrc: "/img/icon/en.svg",
          text: "English",
        },
        {
          lang: "fa",
          flagSrc: "/img/icon/ir.svg",
          text: "فارسی",
        },
        {
          lang: "ar",
          flagSrc: "/img/icon/ar.svg",
          text: "العربية",
        },
        {
          lang: "tr",
          flagSrc: "/img/icon/tr.svg",
          text: "Türkçe",
        },
        {
          lang: "de",
          flagSrc: "/img/icon/de.svg",
          text: "Deutsch",
        },
        {
          lang: "es",
          flagSrc: "/img/icon/es.svg",
          text: "Español",
        },
      ],
      hideSubnavLink: false,
      subnavLinks: [
        {
          icon: "mdi:home",
          title: "Dashboard",
          link: "/my/",
        },
        {
          icon: "mdi:pencil",
          title: "Posts",
          link: "/my/posts/",
          submenu: [{ icon: "mdi:pencil", title: "List", link: "/my/posts" }],
        },
        {
          icon: "mdi:trending-up",
          title: "Trading",
          link: "/my/trading/",
          submenu: [
            { title: "Accounts", link: "/my/trading/accounts" },
            { title: "Bridge", link: "/my/trading/bridge/list" },
            { title: "Frameworks", link: "/my/trading/frameworks" },
          ],
        },
        {
          icon: "mdi:finance",
          title: "Financial Engineering",
          link: "/my/financial-engineering/",
          submenu: [
            {
              title: "Risk Managements",
              link: "/my/financial-engineering/risk-managements/",
            },
            {
              title: "Trading Plans",
              link: "/my/financial-engineering/trading-plans/",
            },
            {
              title: "Money Managements",
              link: "/my/financial-engineering/money-managements/",
            },
            {
              title: "Cash Flows",
              link: "/my/financial-engineering/cash-flows/",
            },
          ],
        },
        { icon: "mdi:cloud", title: "Cloud", link: "/my/cloud/" },
        { icon: "mdi:account", title: "Profile", link: "/my/profile" },
      ],
      hideThemeSelector: false,
      loginButton: {
        title: "Login",
        hideLoginButton: false,
        loginButtonClass:
          " py-1 rounded  text-blue-600 dark:text-gray-200 ms-3 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all",
        loginButtonIconName: "mdi:account-circle-outline",
      },
    } as IHeader,

    footer: {
      logo: "/img/h-logo.svg",
      darkLogo: "/img/h-logo-dark.svg",
      hideEmailBox: false,
      emailAPI: "https://api.briofy.net/api/Email/ContactUs",
      copyRight: `<span>© 2017-2023
                          <a href="https://werify.net" class="hover:underline">Werify</a>.
                          All Rights Reserved.</span
                        >`,
      partOf: `<p>
      Proudly Part Of
      <a
        href="https://briofy.net"
        target="_blank"
        rel="external"
        class="hover:underline font-semibold"
        >Briofy</a
      >
      Family
    </p>`,
      socials: [
        {
          icon: "mdi:linkedin",
          link: "https://www.linkedin.com/company/trader4/",
        },
        {
          icon: "mdi:youtube",
          link: "https://www.youtube.com/@traderfour",
        },
        {
          icon: "mdi:github",
          link: "https://github.com/traderfour",
        },
      ],
      footerLinks: [
        {
          title: "Quick Access",
          links: [
            { title: "About", link: "/about" },
            { title: "Contact", link: "/contact" },
            { title: "Pricing", link: "/pricing" },
            { title: "Newsroom", link: "/blog/news-room" },
            { title: "Blog", link: "/blog" },
            { title: "Careers", link: "/careers" },
            { title: "Privacy Policy", link: "/privacy" },
            { title: "Cookies Policy", link: "/cookies" },
            { title: "Terms Of Service", link: "/terms" },
          ],
        },
        {
          title: "Features",
          links: [
            { title: "One Time Password", link: "/features/one-time-password" },
            { title: "Time-base One Time Password", link: "/features/time-base-one-time-password" },
            { title: "Password less", link: "/features/password-less" },
            { title: "Auth 2.0", link: "/features/auth-2" },
            { title: "SAML", link: "/features/saml" },
            { title: "Assign", link: "/features/assign" },
            { title: "Access Management", link: "/features/features" },
            { title: "Security", link: "/features/security" },
            { title: "Privacy", link: "/features/privacy" },
          ],
        },
        {
          title: "Account For",
          links: [
            { title: "Individuals", link: "/for/individuals" },
            { title: "Small Business", link: "/for/small-business" },
            { title: "Corporation", link: "/for/corporation" },
            { title: "Enterprise", link: "/for/enterprise" },
            { title: "Organization", link: "/for/organization" },
            { title: "Government", link: "/for/government" },
            { title: "Open Source", link: "/for/open-source" },
            { title: "Non Profit", link: "/for/non-profit" },
          ],
        },
        {
          title: "Support",
          links: [
            { title: "F.A.Q", link: "/faq" },
            { title: "Documentation", link: "/docs" },
            { title: "How To", link: "/how-to" },
            { title: "APIs Docs", link: "/docs/apis" },
            {
              title: "Status System",
              link: "https://status.trader4.net",
              target: "_blank",
            },
            { title: "Use Cases", link: "/use-cases" },
            { title: "Brand Book", link: "/brand-book" },
            { title: "DMCA", link: "/dmca" },
            { title: "Do Not Sell My Info", link: "/do-not-sell-my-info" },
          ],
        },
        {
          title: "More",
          links: [
            { title: "Download Android", link: "/mobile/android" },
            { title: "Download iOS", link: "/mobile/ios" },
            { title: "Open Source", link: "/open-source" },
            { title: "#waccount", link: "/hashtag-waccount" },
            { title: "Bug Bounty", link: "/bug-bounty" },
            { title: "Disclaimer", link: "/disclaimer" },
            { title: "CSR", link: "/csr" },
          ],
        },
        {
          title: "From Family",
          links: [
            { title: "Pasles", link: "https://pasles.net", target: "_blank" },
            { title: "Werify", link: "https://werify.net", target: "_blank" },
            { title: "Trader4", link: "https://trader4.net", target: "_blank" },
            { title: "Dalan Capital", link: "https://dalan.capital", target: "_blank" },
            { title: "Bulutly", link: "https://bulutly.net", target: "_blank" },
            { title: "AzPays", link: "https://azpays.net", target: "_blank" },
            { title: "Daric", link: "https://daric.vc", target: "_blank" },
            { title: "More from Briofy", link: "https://briofy.net/products", target: "_blank" },
          ],
        },
      ],
    } as IFooter,
    announcement: {
      title:
        "Get Account Pro Today, rich feature version of Werify Account for limited time!",
      badge: "20% Off",
      link: {
        text: "Pro Version",
        src: "/pro",
      },
    } as IAnnouncement,
  },
});