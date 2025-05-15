import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/logo.png";

export { logo };

// company
export const companyDetails = {
  name: "Kalyx AI Labs",
  address: "525T Sector 42 Gurgaon, Haryana, 122002, India",
  phone: "+91-9953360965",
  email: "info@kalyxailabs.com",
  instagram: "https://www.instagram.com/kalyxailabs/",
  linkedin: "https://www.linkedin.com/company/106725954/admin/dashboard/",
  facebook: "https://www.facebook.com/profile.php?id=61554934723617",
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Requirement Gathering & Analysis",
    description:
      "We begin by collaborating closely with clients to gather detailed project requirements. Through in-depth consultations, we define clear objectives, analyze feasibility, and outline the technical and business scope—ensuring a strong foundation for successful project execution.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "UI/UX Design & Scalable Development",
    description:
      "Our design team crafts user-centric, responsive interfaces that elevate engagement and usability. Simultaneously, our developers build scalable, secure, and high-performing solutions using the latest technologies, adhering to industry standards and client specifications.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Quality Assurance, Launch & Support",
    description:
      "Every solution undergoes comprehensive testing—covering functionality, performance, and security. After final validations, we deploy the product efficiently and continue to offer post-launch support, ensuring reliability and long-term client success.",
    icon: Rocket,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Website Development",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Launch powerful and scalable e-commerce websites tailored to your business needs. Our solutions enhance user experience, boost conversions, and streamline your online store's operations.",
  },
  {
    id: 2,
    title: "Social Media Website Development",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Build engaging social media platforms that drive user interaction, community growth, and brand loyalty. Custom features and modern UI for a standout digital presence.",
  },
  {
    id: 3,
    title: "Landing Page Development",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      "Design high-converting landing pages optimized for marketing campaigns. We focus on clear messaging, responsive design, and performance to increase leads and conversions.",
  },
  {
    id: 4,
    title: "Custom Website Development",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Get fully customized websites built to reflect your brand and business goals. We combine creativity and functionality for a seamless and impactful user experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Develop high-performance iOS apps using Swift and Objective-C. We create secure, scalable, and user-friendly apps tailored for Apple’s ecosystem.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "We build robust Android applications using Java and Kotlin. From design to deployment, our team ensures smooth functionality and exceptional user experience.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "Create cross-platform apps with a single codebase using Flutter. We ensure fast performance, consistent design, and seamless experiences across iOS and Android.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "Develop cost-effective hybrid apps that work flawlessly on multiple platforms. We leverage modern frameworks to deliver responsive and engaging mobile solutions.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Shreya Amit",
    position: "Head of Innovation, ChainSecure",
    desc: `Working with Kalyx AI Labs was a turning point for us. They helped us build a custom blockchain system that brought a new level of transparency and security to our processes. What stood out was their ability to break down complex blockchain ideas into actionable steps, making the entire development journey straightforward and collaborative.`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "David Klein",
    position: "CEO, Mobilify",
    desc: `From day one, this team understood exactly what we were trying to build. They took our concept, added thoughtful design input, and developed a smooth, high-performance app. It’s now a core tool for our clients, and feedback has been overwhelmingly positive. Their communication and attention to detail made the difference.`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "James O’Connor",
    position: "Co-Founder, SignalVista",
    desc: `What we appreciated most was how Kalyx AI Labs approached AI development with a business mindset. They didn’t just write code—they asked the right questions, helped us refine our goals, and built a smart solution that’s now powering real-time analytics in our platform.`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Mohamed Al-Rashid",
    position: "COO, NovaFleet",
    desc: `We’d worked with other web teams before, but this was different. Kalyx AI Labs didn’t just redesign our site—they helped reimagine our digital brand. The end result is a site that’s not only beautiful but easy to manage, fast, and built to grow with us.`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
];

// portfolio images (web development)
export const webPortfolio = [
  // {
  //   id: 1,
  //   img: require('../assets/images/portfolio/web-development/5ghomes.webp'),
  //   title: "5g Homes",
  //   link: "https://5ghighspeedinternet.co",
  // },
  {
    id: 2,
    img: require("../assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("../assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("../assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("../assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("../assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
