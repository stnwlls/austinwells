const projectsData = [
  {
    title: "Three.js Solar System",
    description: "A Three.js scene focused on core 3D concepts: scene/camera/renderer setup, mesh creation, texture mapping, lighting, object hierarchies, orbital transforms, axial rotation, shader-based overlays, animation loops, and OrbitControls navigation.",
    month: "June",
    year: 2026,
    links: {
      github: "https://github.com/stnwlls/threejs-solar-system",
      live: "/projects/threejs-solar-system/index.html"
    },
    hashtags: [
      "#threejs",
      "#javascript",
      "#vite",
      "#webgl"
    ],
    image: "/images/project-images/threejs-solar-system.png",
  },
  {
    title: "Python Construction GUI",
    description: "A Python desktop application for construction service browsing, quote requests, manager workflows, service records, tax calculations, threaded logging, file persistence, and search/sort utilities.",
    month: "May",
    year: 2026,
    links: {
      github: "https://github.com/stnwlls/python-construction-gui",
      live: "/projects/python-construction-gui/index.html"
    },
    hashtags: [
      "#python",
      "#gui",
      "#oop",
      "#fileio"
    ],
    image: "/projects/python-construction-gui/assets/construction-gui.png",
    imageFit: "contain",
  },
  {
    title: "OrderApp iOS",
    description: "A UIKit restaurant ordering app that fetches menu categories and items, decodes JSON responses, loads images asynchronously, manages an order cart, submits orders, and displays confirmation details.",
    month: "October",
    year: 2025,
    links: {
      github: "https://github.com/stnwlls/orderapp-ios",
      live: "/projects/orderapp/index.html"
    },
    hashtags: [
      "#swift",
      "#ios",
      "#uikit",
      "#api"
    ],
    image: "/projects/orderapp/assets/order-app.png",
  },
  {
    title: "Color Pop iOS Game",
    description: "A SpriteKit color-matching game with randomized prompts, touch-based balloon selection, score tracking, countdown timing, bonus time rewards, particle effects, and high-score persistence.",
    month: "November",
    year: 2025,
    links: {
      github: "https://github.com/stnwlls/color-pop-ios",
      live: "/projects/color-pop/index.html"
    },
    hashtags: [
      "#swift",
      "#ios",
      "#spritekit"
    ],
    image: "/projects/color-pop/assets/color-pop.png",
  },
  {
    title: "Amazon Storefront Checkout",
    description: "A JavaScript Amazon-style storefront with a product grid, cart state, localStorage persistence, delivery-option selection, dynamic checkout totals, tax calculation, local product data, and browser-based tests.",
    month: "December",
    year: 2024,
    links: {
      github: "https://github.com/stnwlls/amazon-storefront-checkout",
      live: "/projects/storefront-checkout/index.html"
    },
    hashtags: [
      "#javascript",
      "#html",
      "#css",
      "#ecommerce"
    ],
    image: "/images/project-images/amazon-storefront.png",
  },
  {
    title: "Concept WordPress Theme Wireframe",
    description: "A static wireframe concept for a minimalist WordPress theme. The design focuses on layout structure, typography, whitespace, and visual hierarchy to explore how content can be presented with maximum clarity and minimal distraction.",
    month: "November",
    year: 2025,
    links: {
      figma: "https://www.figma.com/design/BHcFIyPcMHMPT94tvumJmL/WordPress-Theme?node-id=0-1&t=rtI1VvDyXxYD9szP-1",
      imagelink: "/projects/wordpressthemewireframe.png"
    },
    hashtags: [
      "#figma",
      "#wireframe",
      "#uxdesign"
    ],
    image: "/images/project-images/wordpresstheme.png",
  },
  {
    title: "Syntax & Coffee - WordPress",
    description: "Syntax & Coffee is a personal blog where I share my journey as a web developer. Built using WordPress, I handled theme customization, implemented custom CSS, configured plugins, and structured content to support a modern, maintainable blog layout.",
    month: "August",
    year: 2025,
    links: {
      live: "https://syntaxandcoffee.io"
    },
    hashtags: [
      "#wordpress",
      "#css"
    ],
    image: "/images/project-images/syntaxandcoffee.png",
  },
  {
    title: "Content Audit and Redesign in Figma",
    description: "Conducted a content audit and full redesign of the Memorial Health Bariatric Surgery page using Figma. The redesign focused on reorganizing content for improved user experience and readability. Key changes included consolidating large blocks of text into smaller, scannable sections with clear headings, and integrating more engaging visuals.",
    month: "October",
    year: 2024,
    links: {
      imagelink: "/projects/MemorialHealthRedesign.png",
      figma: "https://www.figma.com/design/malDhWIrAcl9GaCXQwtiDn/MemorialHealth.com-Redesign?m=auto&t=PgeJ28VkPvXK8PiC-1"
    },
    hashtags: [
      "#figma",
      "#contentaudit",
      "#uxdesign",
      "#uidesign"
    ],
    image: "/images/project-images/contentaudit.png"
  },
  {
    title: "A/B Testing Mobile App Prototype in Figma",
    description: "Created two distinct prototypes for the fictional TourView mobile app to conduct an A/B test, focusing on user interface (UI) and user experience (UX) design. Leveraged Figma and adhered to Apple's Human Interface Guidelines to ensure the design stayed true to iOS standards. The prototypes include a text-based search interface (Prototype A) and a map-based selection interface (Prototype B).",
    month: "October",
    year: 2024,
    links: {
      imagelink: "/projects/tourviewAppABTesting.png",
      figma: "https://www.figma.com/design/lh2C2bMnTbdk7M2u49qQXw/tourviewAppABtesting?m=auto&t=PgeJ28VkPvXK8PiC-1"
    },
    hashtags: [
      "#figma",
      "#abtesting",
      "#mobileappdesign",
      "#uxdesign"
    ],
    image: "/images/project-images/abtesting.png"
  },
  {
    title: "Wireframe Design in Figma",
    description: "Developed a wireframe for the home page of orbitmedia.com using Figma. The project involved recreating the website's header, footer, and five key sections of the page based on the desktop view. This wireframe showcases expertise in visual hierarchy, content arrangement, and design tools to plan web layouts effectively. Placeholders for text and images were used to simulate content and structure, adhering to the principles of wireframing.",
    month: "October",
    year: 2024,
    links: {
      imagelink: "/projects/orbitmediaWireframe.png",
      figma: "https://www.figma.com/design/T20hYYDkY7geaG3tY6cfAT/orbitmedia.com-Wireframe?m=auto&t=PgeJ28VkPvXK8PiC-1"
    },
    hashtags: [
      "#figma",
      "#wireframe",
      "#uxdesign"
    ],
    image: "/images/project-images/wireframe.png"
  },
];

export default projectsData;
