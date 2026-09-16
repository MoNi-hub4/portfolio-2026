// Professional portfolio content. Add only your own public contact/project URLs.
export const site = {
  name: "Monishan",
  fullName: "Monishan Rajhkumar",
  role: "Full-stack development",
  location: "Sri Lanka",
  email: "",
  githubUrl: "",
  linkedinUrl: "",
  currentRole: "Onsite Operations Executive",
  company: "noon",
  education: "BSc studies in Data Science",
  heroIntro: "Full-stack projects. E-commerce experience. Data engineering next.",
};

export type ProjectKind = "ai" | "commerce" | "rental";
export interface Project {
  id: string;
  name: string;
  category: string;
  kind: ProjectKind;
  headline: [string, string];
  summary: string;
  teaser: string;
  stack: string[];
  features: string[];
  liveUrl: string;
  sourceUrl: string;
  // Exactly three screenshots: the first also appears on the project card.
  images: [string, string, string];
  // Remove this object after replacing the sample images with your own.
  sample?: { name: string; repositoryUrl: string; liveUrl: string };
}

export const aboutText = "I’m Monishan Rajhkumar, a Data Science student based in Sri Lanka. I work in e-commerce onsite operations at noon. I build web applications with React, Next.js, Express, and MongoDB, using real business workflows as project ideas. My long-term focus is data engineering: connecting useful software with reliable data.";

interface Technology {
  name: string;
  use: string;
  logo: string;
  logoClassName?: string;
}

// Original logo assets are bundled locally. Public sources: LOGO-SOURCES.md.
export const technologies: Technology[] = [
  { name: "React", use: "Interactive interfaces", logo: "/logos/react.svg" },
  { name: "Next.js", use: "Full-stack applications", logo: "/logos/nextjs.svg", logoClassName: "w-9 rounded-full ring-1 ring-white/20 sm:w-10" },
  { name: "Express", use: "REST APIs", logo: "/logos/express.svg", logoClassName: "w-24 brightness-0 invert sm:w-28" },
  { name: "MongoDB", use: "Application data", logo: "/logos/mongodb.svg" },
  { name: "Tailwind CSS", use: "Responsive styling", logo: "/logos/tailwindcss.svg" },
  { name: "JavaScript", use: "Web development", logo: "/logos/javascript.svg" },
  { name: "Node.js", use: "Backend development", logo: "/logos/nodejs.svg" },
  { name: "TypeScript", use: "Typed application code", logo: "/logos/typescript.svg" },
  { name: "Python", use: "Data-science coursework", logo: "/logos/python.svg" },
  { name: "PySpark", use: "Data-processing coursework", logo: "/logos/apachespark.svg" },
  { name: "Playwright", use: "Browser automation", logo: "/logos/playwright.svg" },
  { name: "Tesseract.js", use: "Text recognition", logo: "/logos/tesseract.png" },
];

export const services = [
  { name: "Full-stack development", description: "Building personal web applications with React, Next.js, Express, and MongoDB, from responsive interfaces to APIs and database models." },
  { name: "E-commerce operations", description: "Working on onsite campaigns, category pages, coupons, curated assortments, and content quality checks for UAE and Saudi Arabia markets." },
  { name: "Workflow automation", description: "Turning repeated tasks into useful tools, including AI-assisted promotional copy and automated banner capture with OCR keyword search." },
  { name: "APIs & databases", description: "Connecting frontends to REST APIs, modeling application data with Mongoose, and building create, read, update, and delete workflows." },
  { name: "Data science & learning", description: "Studying Data Science, exploring sales and customer analytics with Python and PySpark, and building toward a career in data engineering." },
];

export const projects: Project[] = [
  {
    id: "01",
    name: "PushPilot AI",
    category: "Personal project",
    kind: "ai",
    headline: ["From brief", "to push."],
    summary: "An AI-assisted push-notification generator that turns campaign details into promotional headers and body copy, with rules for length, brand mentions, and coupon formatting.",
    teaser: "AI-assisted campaign copy with brand, length, and coupon rules.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Gemini"],
    features: ["Generate campaign copy", "Apply brand and coupon rules", "Check header and body lengths"],
    liveUrl: "",
    sourceUrl: "",
    images: ["/images/projects/pushpilot-01.png", "/images/projects/pushpilot-02.png", "/images/projects/pushpilot-03.png"],
    sample: { name: "NextChat", repositoryUrl: "https://github.com/ChatGPTNextWeb/NextChat", liveUrl: "https://app.nextchat.club" },
  },
  {
    id: "02",
    name: "Commerce CMS",
    category: "Personal project",
    kind: "commerce",
    headline: ["Storefront.", "Managed."],
    summary: "A mobile-first e-commerce project combining a storefront with product management and a page builder for category grids, product showcases, videos, and promotional banners.",
    teaser: "A storefront, product manager, and page builder in one application.",
    stack: ["Next.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    features: ["Manage products and categories", "Build reusable page sections", "Maintain galleries and product details"],
    liveUrl: "",
    sourceUrl: "",
    images: ["/images/projects/commerce-01.png", "/images/projects/commerce-02.png", "/images/projects/commerce-03.png"],
    sample: { name: "EverShop", repositoryUrl: "https://github.com/evershopcommerce/evershop", liveUrl: "https://demo.evershop.io" },
  },
  {
    id: "03",
    name: "Rental Manager",
    category: "Personal prototype",
    kind: "rental",
    headline: ["Rentals.", "Organised."],
    summary: "A rental-management prototype for customer, vehicle, and rental records, with saved video clips associated with vehicle pickup and return workflows.",
    teaser: "Customer, vehicle, and rental records linked to saved handover clips.",
    stack: ["React", "Express", "MongoDB", "FFmpeg"],
    features: ["Maintain customer and vehicle records", "Track rental entries", "Associate saved handover clips"],
    liveUrl: "",
    sourceUrl: "",
    images: ["/images/projects/rental-01.png", "/images/projects/rental-02.png", "/images/projects/rental-03.png"],
    sample: { name: "Shadcn Admin", repositoryUrl: "https://github.com/satnaing/shadcn-admin", liveUrl: "https://shadcn-admin.netlify.app" },
  },
];

export const explorations = [
  { name: "Banner search automation", category: "Personal tool", summary: "Captures homepage sections with Playwright and searches banner text using Tesseract.js, Sharp preprocessing, and multiple OCR passes.", stack: "Playwright · Tesseract.js · Sharp" },
  { name: "Campaign workflow dashboard", category: "Project in development", summary: "Explores a central workspace for campaigns, coupon tracking, and monthly planning across UAE and Saudi Arabia markets.", stack: "React · Express · MongoDB" },
  { name: "E-commerce analytics", category: "Data Science coursework", summary: "Explores sales, customer activity, funnels, and conversion by category using e-commerce datasets and PySpark.", stack: "Python · PySpark · Data visualisation" },
];
