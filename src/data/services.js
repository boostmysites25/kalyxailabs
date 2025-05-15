import { 
  Globe, 
  Smartphone, 
  Gamepad2, 
  Palette, 
  Bitcoin, 
  Brain, 
  Bot, 
  Cloud, 
  Database, 
  MessageSquareText, 
  CloudCog, 
  Cpu 
} from "lucide-react";

// all services
export const services = [
  {
    title: "Web Development",
    icon: Globe,
    image: require("../assets/images/web-dev-vector.png"),
    shortDesc:
      "Building responsive, scalable, and high-performance websites and web applications tailored to your business objectives.",
    technologies: ["React", "Angular", "Node.js", "Express", "MongoDB"],
    seoKeywords:
      "web development company, custom web design, full-stack development, responsive websites, enterprise web solutions",
    detailsPageImages: {
      first: require("../assets/images/services/webdevelopment1.jpg"),
      second: require("../assets/images/services/webdevelopment2.png"),
      third: require("../assets/images/services/webdevelopment3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Elevate Your Digital Presence with Cutting-Edge Web Solutions</h2>
      <p class="mb-10">In the digital-first era, your website serves as the cornerstone of customer engagement. At <span class="font-semibold">Kalyx AI Labs</span>, we craft web experiences that combine aesthetic appeal with technical excellence, driving conversions and fostering brand loyalty.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Web Development Expertise</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Custom Web Applications:</span> Tailored solutions built with React, Angular, or Vue.js for dynamic user experiences</li>
        <li class="mb-3"><span class="font-semibold">E-Commerce Platforms:</span> Scalable online stores with Shopify, WooCommerce, or custom solutions</li>
        <li class="mb-3"><span class="font-semibold">Progressive Web Apps:</span> App-like experiences with offline capabilities and push notifications</li>
        <li class="mb-3"><span class="font-semibold">API Development:</span> Secure RESTful and GraphQL APIs for seamless system integration</li>
        <li class="mb-3"><span class="font-semibold">Headless CMS:</span> Content-first architectures with Sanity, Contentful, or Strapi</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-4">Industry-Specific Solutions</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">E-Commerce:</span> AI-powered product recommendation engines and personalized shopping experiences</li>
        <li class="mb-3"><span class="font-semibold">Healthcare:</span> HIPAA-compliant patient portals with telemedicine integration</li>
        <li class="mb-3"><span class="font-semibold">Manufacturing:</span> Real-time equipment monitoring dashboards with predictive analytics</li>
        <li class="mb-3"><span class="font-semibold">Finance:</span> Secure online banking platforms with fraud detection systems</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Development Methodology</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Discovery Workshop:</span> In-depth requirements analysis and technical planning</li>
        <li class="mb-3"><span class="font-semibold">UI/UX Prototyping:</span> Interactive wireframes and design mockups</li>
        <li class="mb-3"><span class="font-semibold">Agile Development:</span> Two-week sprints with continuous integration</li>
        <li class="mb-3"><span class="font-semibold">Quality Assurance:</span> Comprehensive testing across devices and browsers</li>
        <li class="mb-3"><span class="font-semibold">Deployment & Optimization:</span> Performance tuning and ongoing support</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our Web Development Services?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">SEO-Optimized Architecture:</span> Built for search visibility from the ground up</li>
        <li class="mb-3"><span class="font-semibold">Enterprise-Grade Security:</span> OWASP-compliant protection against vulnerabilities</li>
        <li class="mb-3"><span class="font-semibold">Performance Focus:</span> Lighthouse scores averaging 90+ for speed and accessibility</li>
        <li class="mb-3"><span class="font-semibold">Scalable Infrastructure:</span> Cloud-ready solutions that grow with your business</li>
      </ul>`,
    },
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    image: require("../assets/images/app-dev-vector.png"),
    shortDesc:
      "Creating intuitive, high-performance mobile applications for iOS and Android platforms with seamless user experiences.",
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
    seoKeywords:
      "mobile app development company, iOS Android app development, cross-platform apps, custom mobile applications, enterprise app solutions",
    detailsPageImages: {
      first: require("../assets/images/services/appdevelopment1.jpg"),
      second: require("../assets/images/services/appdevelopment2.png"),
      third: require("../assets/images/services/appdevelopment3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Transform Your Business with Powerful Mobile Experiences</h2>
      <p class="mb-10">In today's mobile-first world, having a robust app is no longer optional. <span class="font-semibold">Kalyx AI Labs</span> delivers premium mobile solutions that engage users, streamline operations, and drive measurable business results.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Mobile Development Capabilities</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Native iOS/Android:</span> High-performance apps using Swift and Kotlin</li>
        <li class="mb-3"><span class="font-semibold">Cross-Platform:</span> Cost-effective solutions with React Native and Flutter</li>
        <li class="mb-3"><span class="font-semibold">Enterprise Mobility:</span> Secure corporate apps with MDM integration</li>
        <li class="mb-3"><span class="font-semibold">IoT & Wearables:</span> Apps that connect with smart devices and sensors</li>
        <li class="mb-3"><span class="font-semibold">App Modernization:</span> Upgrading legacy applications to modern standards</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-4">Industry-Specific Mobile Solutions</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Retail:</span> Augmented reality shopping experiences and mobile payment integration</li>
        <li class="mb-3"><span class="font-semibold">Healthcare:</span> HIPAA-compliant telemedicine apps with AI symptom checkers</li>
        <li class="mb-3"><span class="font-semibold">Logistics:</span> Real-time fleet tracking with route optimization algorithms</li>
        <li class="mb-3"><span class="font-semibold">Banking:</span> Biometric-secured mobile banking with AI-powered financial insights</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our App Development Process</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Strategy Session:</span> Defining business objectives and technical requirements</li>
        <li class="mb-3"><span class="font-semibold">Prototype Validation:</span> Interactive proofs-of-concept and user testing</li>
        <li class="mb-3"><span class="font-semibold">Agile Development:</span> Feature-driven development with bi-weekly demos</li>
        <li class="mb-3"><span class="font-semibold">Quality Testing:</span> Automated and manual testing across 100+ devices</li>
        <li class="mb-3"><span class="font-semibold">App Store Optimization:</span> Strategic launch planning for maximum visibility</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Partner With Us?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">5-Star Rating:</span> 98% of our apps maintain 4.5+ ratings in app stores</li>
        <li class="mb-3"><span class="font-semibold">Security First:</span> End-to-end encryption and compliance with data regulations</li>
        <li class="mb-3"><span class="font-semibold">Performance Optimized:</span> 60fps smoothness and sub-second load times</li>
        <li class="mb-3"><span class="font-semibold">Ongoing Support:</span> Continuous updates and feature enhancements</li>
      </ul>`,
    },
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    image: require("../assets/images/game-dev-vector.png"),
    shortDesc:
      "Crafting immersive gaming experiences across mobile, console, and PC platforms with cutting-edge engines and technologies.",
    technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender"],
    seoKeywords:
      "game development studio, Unity Unreal developers, mobile game design, 3D game development, AR VR gaming solutions",
    detailsPageImages: {
      first: require("../assets/images/services/gamedevelopment1.jpg"),
      second: require("../assets/images/services/gamedevelopment2.png"),
      third: require("../assets/images/services/gamedevelopment3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Create Captivating Worlds That Players Love</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we combine artistic vision with technical expertise to develop games that captivate audiences and deliver unforgettable experiences across all platforms.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Game Development Services</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Mobile Games:</span> High-performance 2D and 3D games for iOS and Android</li>
        <li class="mb-3"><span class="font-semibold">Console Development:</span> AAA-quality games for PlayStation, Xbox, and Switch</li>
        <li class="mb-3"><span class="font-semibold">AR/VR Experiences:</span> Immersive mixed reality applications</li>
        <li class="mb-3"><span class="font-semibold">Serious Games:</span> Educational and training simulations</li>
        <li class="mb-3"><span class="font-semibold">Multiplayer Systems:</span> Real-time and turn-based online gameplay</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-4">Industry-Specific Game Solutions</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Education:</span> Interactive learning games with progress tracking</li>
        <li class="mb-3"><span class="font-semibold">Healthcare:</span> Therapeutic games for rehabilitation and mental health</li>
        <li class="mb-3"><span class="font-semibold">Corporate Training:</span> Gamified simulations for employee development</li>
        <li class="mb-3"><span class="font-semibold">Marketing:</span> Branded entertainment experiences</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Game Development Pipeline</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Concept Development:</span> Game design documents and prototyping</li>
        <li class="mb-3"><span class="font-semibold">Art Production:</span> 3D modeling, animation, and environment design</li>
        <li class="mb-3"><span class="font-semibold">Programming:</span> Game mechanics and engine customization</li>
        <li class="mb-3"><span class="font-semibold">QA Testing:</span> Performance optimization and bug fixing</li>
        <li class="mb-3"><span class="font-semibold">Launch Support:</span> Store deployment and post-launch updates</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our Game Studio?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Award-Winning Team:</span> Recognized for innovation and technical excellence</li>
        <li class="mb-3"><span class="font-semibold">Cross-Platform Expertise:</span> Single codebase for multiple platforms</li>
        <li class="mb-3"><span class="font-semibold">Monetization Strategies:</span> Proven models for revenue generation</li>
        <li class="mb-3"><span class="font-semibold">Community Building:</span> Player engagement and retention programs</li>
      </ul>`,
    },
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    image: require("../assets/images/uiux-dev-vector.png"),
    shortDesc:
      "Designing intuitive, visually stunning user interfaces that enhance engagement and drive conversions through exceptional user experiences.",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
    seoKeywords:
      "UI UX design agency, user experience experts, interface design company, product design studio, mobile app UI specialists",
    detailsPageImages: {
      first: require("../assets/images/services/uiux1.jpg"),
      second: require("../assets/images/services/uiux2.png"),
      third: require("../assets/images/services/uiux3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Design That Delights and Converts</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we believe great design is equal parts art and science. Our human-centered approach creates interfaces that users love while achieving your business objectives.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Design Services</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">User Research:</span> Persona development and journey mapping</li>
        <li class="mb-3"><span class="font-semibold">Wireframing:</span> Information architecture and flow diagrams</li>
        <li class="mb-3"><span class="font-semibold">Visual Design:</span> Pixel-perfect interfaces with design systems</li>
        <li class="mb-3"><span class="font-semibold">Prototyping:</span> Interactive demos for user testing</li>
        <li class="mb-3"><span class="font-semibold">Design Ops:</span> Handoff documentation and developer collaboration</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-4">Industry-Specific Design Solutions</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">E-Commerce:</span> Conversion-optimized product pages and checkout flows</li>
        <li class="mb-3"><span class="font-semibold">FinTech:</span> Secure yet intuitive financial dashboards</li>
        <li class="mb-3"><span class="font-semibold">Healthcare:</span> Accessible medical interfaces with clear data visualization</li>
        <li class="mb-3"><span class="font-semibold">SaaS:</span> Complex feature sets simplified through thoughtful UX</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Design Process</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Discover:</span> Stakeholder interviews and competitive analysis</li>
        <li class="mb-3"><span class="font-semibold">Define:</span> Problem statements and success metrics</li>
        <li class="mb-3"><span class="font-semibold">Design:</span> Iterative prototyping and refinement</li>
        <li class="mb-3"><span class="font-semibold">Validate:</span> Usability testing with real users</li>
        <li class="mb-3"><span class="font-semibold">Deliver:</span> Developer-ready assets and style guides</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Our Designs Stand Out</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Data-Driven:</span> Decisions backed by analytics and testing</li>
        <li class="mb-3"><span class="font-semibold">Accessibility Focus:</span> WCAG 2.1 AA compliant designs</li>
        <li class="mb-3"><span class="font-semibold">Conversion Optimized:</span> Proven to increase engagement metrics</li>
        <li class="mb-3"><span class="font-semibold">Brand-Aligned:</span> Consistent with your visual identity</li>
      </ul>`,
    },
  },
  {
    title: "Blockchain Development",
    icon: Bitcoin,
    image: require("../assets/images/blockchain-dev-vector.png"),
    shortDesc:
      "Building secure, decentralized blockchain solutions with smart contracts and distributed ledger technology for transformative business applications.",
    technologies: ["Solidity", "Ethereum", "Hyperledger", "Rust", "Web3.js"],
    seoKeywords:
      "blockchain development company, smart contract development, enterprise blockchain solutions, decentralized app development, Web3 integration",
    detailsPageImages: {
      first: require("../assets/images/services/blockchain1.jpg"),
      second: require("../assets/images/services/blockchain2.png"),
      third: require("../assets/images/services/blockchain3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Pioneering Blockchain Solutions for the Decentralized Future</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we're at the forefront of blockchain innovation, delivering secure and transparent solutions that redefine trust in digital transactions and data management.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Blockchain Expertise</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Smart Contracts:</span> Secure, audited contracts for DeFi, NFTs, and DAOs</li>
        <li class="mb-3"><span class="font-semibold">Enterprise Blockchain:</span> Permissioned networks for supply chain and finance</li>
        <li class="mb-3"><span class="font-semibold">Tokenization:</span> Creating utility and security tokens with compliant standards</li>
        <li class="mb-3"><span class="font-semibold">Web3 Integration:</span> Bridging traditional apps with decentralized networks</li>
        <li class="mb-3"><span class="font-semibold">Crypto Wallets:</span> Secure multi-chain wallet solutions</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-4">Industry-Specific Blockchain Solutions</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Finance:</span> Decentralized finance (DeFi) platforms and payment systems</li>
        <li class="mb-3"><span class="font-semibold">Supply Chain:</span> Transparent product provenance tracking</li>
        <li class="mb-3"><span class="font-semibold">Healthcare:</span> Secure patient data exchange networks</li>
        <li class="mb-3"><span class="font-semibold">Real Estate:</span> Tokenized property ownership and fractional investing</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Blockchain Development Framework</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Use Case Analysis:</span> Identifying optimal blockchain applications</li>
        <li class="mb-3"><span class="font-semibold">Architecture Design:</span> Selecting consensus mechanisms and protocols</li>
        <li class="mb-3"><span class="font-semibold">Smart Contract Audit:</span> Comprehensive security reviews</li>
        <li class="mb-3"><span class="font-semibold">Node Deployment:</span> Configuring network infrastructure</li>
        <li class="mb-3"><span class="font-semibold">DApp Development:</span> Building user-friendly decentralized interfaces</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Our Blockchain Solutions Stand Out</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Security Focus:</span> Multiple audit layers and formal verification</li>
        <li class="mb-3"><span class="font-semibold">Regulatory Compliance:</span> KYC/AML-ready solutions</li>
        <li class="mb-3"><span class="font-semibold">Interoperability:</span> Cross-chain compatibility</li>
        <li class="mb-3"><span class="font-semibold">Performance:</span> High TPS with low gas optimization</li>
      </ul>`,
    },
  },
  {
    title: "Artificial Intelligence Development",
    icon: Brain,
    image: require("../assets/images/ai-dev-vector.png"),
    shortDesc:
      "Creating intelligent systems that learn, adapt, and automate complex business processes with cutting-edge AI technologies.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP"],
    seoKeywords:
      "AI development company, custom artificial intelligence solutions, machine learning models, intelligent automation, cognitive computing services",
    detailsPageImages: {
      first: require("../assets/images/services/ai1.jpg"),
      second: require("../assets/images/services/ai2.jpg"),
      third: require("../assets/images/services/ai3.png"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Harness the Power of Intelligent Automation</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we transform businesses through strategic AI implementation, developing solutions that analyze, predict, and automate with human-like precision.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our AI Development Services</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Predictive Analytics:</span> Forecast trends and behaviors with 90%+ accuracy</li>
        <li class="mb-3"><span class="font-semibold">Computer Vision:</span> Image and video analysis for quality control and security</li>
        <li class="mb-3"><span class="font-semibold">Conversational AI:</span> Natural language chatbots and virtual assistants</li>
        <li class="mb-3"><span class="font-semibold">Process Automation:</span> Intelligent workflow optimization</li>
        <li class="mb-3"><span class="font-semibold">Recommendation Engines:</span> Personalized customer experiences</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-4">Industry-Specific AI Solutions</h2>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">E-Commerce AI Optimization</h3>
        <ul class="list-disc pl-6">
          <li class="mb-2">Personalized product recommendations based on browsing behavior</li>
          <li class="mb-2">Dynamic pricing algorithms that respond to market changes</li>
          <li class="mb-2">Fraud detection systems with real-time transaction monitoring</li>
          <li class="mb-2">Automated customer service with NLP-powered chatbots</li>
          <li class="mb-2">Visual search capabilities for product discovery</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Healthcare AI Solutions</h3>
        <ul class="list-disc pl-6">
          <li class="mb-2">Diagnostic assistance with medical imaging analysis</li>
          <li class="mb-2">Workflow automation for patient scheduling and records</li>
          <li class="mb-2">Predictive analytics for patient risk stratification</li>
          <li class="mb-2">Drug discovery and clinical trial optimization</li>
          <li class="mb-2">Remote patient monitoring with IoT integration</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Manufacturing AI Applications</h3>
        <ul class="list-disc pl-6">
          <li class="mb-2">Predictive maintenance to reduce equipment downtime</li>
          <li class="mb-2">Computer vision for quality control and defect detection</li>
          <li class="mb-2">Supply chain optimization with demand forecasting</li>
          <li class="mb-2">Energy consumption optimization in production lines</li>
          <li class="mb-2">Autonomous material handling and logistics</li>
        </ul>
      </div>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our AI Development Process</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Data Strategy:</span> Assessing quality and structuring pipelines</li>
        <li class="mb-3"><span class="font-semibold">Model Selection:</span> Choosing optimal algorithms</li>
        <li class="mb-3"><span class="font-semibold">Training & Validation:</span> Iterative improvement cycles</li>
        <li class="mb-3"><span class="font-semibold">Deployment:</span> Cloud or edge implementation</li>
        <li class="mb-3"><span class="font-semibold">Continuous Learning:</span> Model retraining frameworks</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our AI Solutions?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Domain Expertise:</span> Industry-specific AI applications</li>
        <li class="mb-3"><span class="font-semibold">Explainable AI:</span> Transparent decision-making</li>
        <li class="mb-3"><span class="font-semibold">Ethical Frameworks:</span> Bias detection and mitigation</li>
        <li class="mb-3"><span class="font-semibold">ROI Focus:</span> Measurable business impact</li>
      </ul>`,
    },
  },
  {
    title: "Robotic Process Automation (RPA)",
    icon: Bot,
    image: require("../assets/images/rpa-vector.png"),
    shortDesc:
      "Automating repetitive business processes with intelligent bots to increase efficiency, reduce errors, and lower operational costs.",
    technologies: [
      "UiPath",
      "Automation Anywhere",
      "Blue Prism",
      "Python",
      "Power Automate",
    ],
    seoKeywords:
      "RPA development services, business process automation, robotic process automation company, workflow automation solutions, intelligent automation",
    detailsPageImages: {
      first: require("../assets/images/services/rpa1.jpg"),
      second: require("../assets/images/services/rpa2.jpg"),
      third: require("../assets/images/services/rpa3.jpg"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Transform Your Operations with Intelligent Automation</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we implement RPA solutions that handle repetitive tasks with 100% accuracy, freeing your team to focus on strategic initiatives that drive business growth.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our RPA Solutions</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Process Automation:</span> Rule-based task automation across departments</li>
        <li class="mb-3"><span class="font-semibold">Data Migration:</span> Accurate and efficient data transfer between systems</li>
        <li class="mb-3"><span class="font-semibold">Invoice Processing:</span> Automated extraction and validation</li>
        <li class="mb-3"><span class="font-semibold">Customer Service Bots:</span> 24/7 automated support solutions</li>
        <li class="mb-3"><span class="font-semibold">Legacy System Integration:</span> Connecting outdated systems with modern platforms</li>
      </ul>
      
      <h2 class="text-xl font-semibold mt-8 mb-4">Industry-Specific RPA Applications</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Banking:</span> Automated loan processing and fraud detection</li>
        <li class="mb-3"><span class="font-semibold">Insurance:</span> Claims processing and policy administration</li>
        <li class="mb-3"><span class="font-semibold">Healthcare:</span> Patient records management and billing automation</li>
        <li class="mb-3"><span class="font-semibold">Retail:</span> Inventory management and order processing</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our RPA Implementation Process</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Process Assessment:</span> Identifying automation opportunities</li>
        <li class="mb-3"><span class="font-semibold">Bot Development:</span> Creating customized automation scripts</li>
        <li class="mb-3"><span class="font-semibold">Testing & Validation:</span> Ensuring accuracy and reliability</li>
        <li class="mb-3"><span class="font-semibold">Deployment:</span> Seamless integration with existing systems</li>
        <li class="mb-3"><span class="font-semibold">Monitoring & Optimization:</span> Continuous improvement cycles</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Automate With Us?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Proven ROI:</span> Typical 200-300% return within first year</li>
        <li class="mb-3"><span class="font-semibold">Enterprise-Grade:</span> Scalable solutions for large organizations</li>
        <li class="mb-3"><span class="font-semibold">Hybrid Approach:</span> Combining RPA with AI for intelligent automation</li>
        <li class="mb-3"><span class="font-semibold">Compliance Ready:</span> Audit trails and documentation</li>
      </ul>`,
    },
  },
  {
    title: "Cloud Computing Services",
    icon: Cloud,
    image: require("../assets/images/cloud-vector.png"),
    shortDesc:
      "Designing, migrating, and managing secure cloud infrastructure solutions tailored to your business requirements and scalability needs.",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    seoKeywords:
      "cloud computing company, AWS Azure consulting, cloud architecture services, cloud migration experts, managed cloud services",
    detailsPageImages: {
      first: require("../assets/images/services/cloud1.jpg"),
      second: require("../assets/images/services/cloud2.jpg"),
      third: require("../assets/images/services/cloud3.jpg"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Accelerate Your Digital Transformation with Cloud Solutions</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we help businesses leverage the full potential of cloud computing with secure, scalable, and cost-optimized infrastructure solutions across all major platforms.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Cloud Services</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Cloud Architecture:</span> Designing optimized infrastructure blueprints</li>
        <li class="mb-3"><span class="font-semibold">Migration Services:</span> Seamless transition to cloud environments</li>
        <li class="mb-3"><span class="font-semibold">Containerization:</span> Docker and Kubernetes implementation</li>
        <li class="mb-3"><span class="font-semibold">Serverless Solutions:</span> Event-driven architecture development</li>
        <li class="mb-3"><span class="font-semibold">Cloud Security:</span> Compliance and threat protection</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Cloud Approach</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Assessment:</span> Workload analysis and cloud readiness evaluation</li>
        <li class="mb-3"><span class="font-semibold">Planning:</span> Cost-benefit analysis and roadmap development</li>
        <li class="mb-3"><span class="font-semibold">Implementation:</span> Configuration and deployment</li>
        <li class="mb-3"><span class="font-semibold">Optimization:</span> Continuous performance tuning</li>
        <li class="mb-3"><span class="font-semibold">Management:</span> 24/7 monitoring and support</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Partner With Us?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Certified Experts:</span> AWS, Azure, and GCP certified architects</li>
        <li class="mb-3"><span class="font-semibold">Multi-Cloud Proficiency:</span> Vendor-agnostic recommendations</li>
        <li class="mb-3"><span class="font-semibold">Cost Management:</span> Optimizing cloud spend without compromise</li>
        <li class="mb-3"><span class="font-semibold">Security First:</span> Enterprise-grade protection measures</li>
      </ul>`,
    },
  },
  {
    title: "Data Science Services",
    icon: Database,
    image: require("../assets/images/data-science-vector.png"),
    shortDesc:
      "Extracting actionable insights from complex datasets through advanced analytics, machine learning, and predictive modeling techniques.",
    technologies: ["Python", "R", "SQL", "Tableau", "Spark"],
    seoKeywords:
      "data science consulting, big data analytics, predictive modeling services, business intelligence solutions, data visualization experts",
    detailsPageImages: {
      first: require("../assets/images/services/datascience1.webp"),
      second: require("../assets/images/services/datascience2.webp"),
      third: require("../assets/images/services/datascience3.jpg"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Turn Your Data Into Competitive Advantage</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we help organizations unlock the hidden value in their data through advanced analytics, machine learning, and strategic insights that drive smarter business decisions.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Data Science Offerings</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Predictive Analytics:</span> Forecasting trends and customer behavior</li>
        <li class="mb-3"><span class="font-semibold">Machine Learning:</span> Custom model development and deployment</li>
        <li class="mb-3"><span class="font-semibold">Data Visualization:</span> Interactive dashboards and reports</li>
        <li class="mb-3"><span class="font-semibold">Big Data Solutions:</span> Processing and analyzing large datasets</li>
        <li class="mb-3"><span class="font-semibold">Natural Language Processing:</span> Text mining and sentiment analysis</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Analytical Process</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Data Discovery:</span> Identifying relevant data sources</li>
        <li class="mb-3"><span class="font-semibold">Cleaning & Preparation:</span> Ensuring data quality</li>
        <li class="mb-3"><span class="font-semibold">Exploratory Analysis:</span> Uncovering patterns and relationships</li>
        <li class="mb-3"><span class="font-semibold">Model Development:</span> Building and testing algorithms</li>
        <li class="mb-3"><span class="font-semibold">Insight Delivery:</span> Actionable recommendations</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Our Data Science Team?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Domain Expertise:</span> Industry-specific analytical approaches</li>
        <li class="mb-3"><span class="font-semibold">Explainable AI:</span> Transparent, interpretable results</li>
        <li class="mb-3"><span class="font-semibold">Scalable Solutions:</span> From prototypes to production</li>
        <li class="mb-3"><span class="font-semibold">Measurable Impact:</span> Direct correlation to business KPIs</li>
      </ul>`,
    },
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: MessageSquareText,
    image: require("../assets/images/nlp-vector.png"),
    shortDesc:
      "Developing advanced language understanding systems that enable machines to process, analyze, and generate human language with high accuracy.",
    technologies: ["Python", "NLTK", "spaCy", "BERT", "GPT"],
    seoKeywords:
      "NLP services, natural language processing company, text analytics solutions, conversational AI development, sentiment analysis services",
    detailsPageImages: {
      first: require("../assets/images/services/nlp1.jpg"),
      second: require("../assets/images/services/nlp2.jpg"),
      third: require("../assets/images/services/nlp3.jpg"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Bridge the Gap Between Humans and Machines</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we specialize in Natural Language Processing technologies that enable computers to understand, interpret, and respond to human language with unprecedented accuracy.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our NLP Capabilities</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Text Classification:</span> Categorizing documents with high precision</li>
        <li class="mb-3"><span class="font-semibold">Sentiment Analysis:</span> Extracting opinions and emotions from text</li>
        <li class="mb-3"><span class="font-semibold">Named Entity Recognition:</span> Identifying key information in documents</li>
        <li class="mb-3"><span class="font-semibold">Machine Translation:</span> Accurate language conversion systems</li>
        <li class="mb-3"><span class="font-semibold">Chatbots & Virtual Assistants:</span> Context-aware conversational agents</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our NLP Development Process</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Requirement Analysis:</span> Understanding language processing needs</li>
        <li class="mb-3"><span class="font-semibold">Data Collection:</span> Gathering and annotating text corpora</li>
        <li class="mb-3"><span class="font-semibold">Model Selection:</span> Choosing appropriate algorithms</li>
        <li class="mb-3"><span class="font-semibold">Training & Evaluation:</span> Iterative model improvement</li>
        <li class="mb-3"><span class="font-semibold">Deployment:</span> Integration with business systems</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Our NLP Solutions Excel</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Multilingual Support:</span> Solutions for diverse languages</li>
        <li class="mb-3"><span class="font-semibold">Context Awareness:</span> Understanding nuance and intent</li>
        <li class="mb-3"><span class="font-semibold">Domain Adaptation:</span> Specialized models for industry jargon</li>
        <li class="mb-3"><span class="font-semibold">Continuous Learning:</span> Systems that improve over time</li>
      </ul>`,
    },
  },
  {
    title: "Cloud Migration Services",
    icon: CloudCog,
    image: require("../assets/images/cloud-migration-vector.png"),
    shortDesc:
      "Seamlessly transitioning your infrastructure, applications, and data to cloud environments with minimal disruption and maximum security.",
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes"],
    seoKeywords:
      "cloud migration company, legacy system migration, hybrid cloud services, cloud infrastructure migration, application modernization",
    detailsPageImages: {
      first: require("../assets/images/services/cloud-migration1.jpg"),
      second: require("../assets/images/services/cloud-migration2.jpg"),
      third: require("../assets/images/services/cloud-migration3.jpg"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Accelerate Your Digital Transformation Journey</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we simplify complex cloud migrations with proven methodologies that ensure business continuity, optimal performance, and cost efficiency in your new cloud environment.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our Migration Services</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Lift-and-Shift:</span> Quick migration of existing workloads</li>
        <li class="mb-3"><span class="font-semibold">Application Modernization:</span> Refactoring for cloud-native architectures</li>
        <li class="mb-3"><span class="font-semibold">Database Migration:</span> Seamless transition of data stores</li>
        <li class="mb-3"><span class="font-semibold">Hybrid Cloud Solutions:</span> Bridging on-prem and cloud environments</li>
        <li class="mb-3"><span class="font-semibold">Post-Migration Optimization:</span> Continuous cost and performance tuning</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our Migration Methodology</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Assessment:</span> Comprehensive workload analysis</li>
        <li class="mb-3"><span class="font-semibold">Planning:</span> Custom migration roadmap</li>
        <li class="mb-3"><span class="font-semibold">Proof-of-Concept:</span> Validating the approach</li>
        <li class="mb-3"><span class="font-semibold">Execution:</span> Phased migration strategy</li>
        <li class="mb-3"><span class="font-semibold">Validation:</span> Performance benchmarking</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Trust Our Migration Experts?</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Zero Downtime:</span> Business continuity guaranteed</li>
        <li class="mb-3"><span class="font-semibold">Cost Transparency:</span> Clear ROI calculations</li>
        <li class="mb-3"><span class="font-semibold">Security Focus:</span> End-to-end data protection</li>
        <li class="mb-3"><span class="font-semibold">Multi-Cloud Expertise:</span> Vendor-agnostic solutions</li>
      </ul>`,
    },
  },
  {
    title: "Machine Learning Services",
    icon: Cpu,
    image: require("../assets/images/ml-dev-vector.png"),
    shortDesc:
      "Building intelligent systems that learn from data to automate decisions, predict outcomes, and uncover valuable business insights.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
    ],
    seoKeywords:
      "machine learning developers, predictive modeling, ML solutions, custom machine learning models, AI algorithm development",
    detailsPageImages: {
      first: require("../assets/images/services/ml1.webp"),
      second: require("../assets/images/services/ml2.webp"),
      third: require("../assets/images/services/ml3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">Transform Data Into Predictive Power</h2>
      <p class="mb-10">At <span class="font-semibold">Kalyx AI Labs</span>, we design and implement machine learning solutions that turn your data into actionable intelligence, automating complex decisions and revealing hidden opportunities.</p>
      
      <h2 class="text-xl font-semibold mb-4">Our ML Capabilities</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3"><span class="font-semibold">Predictive Modeling:</span> Forecasting trends and behaviors</li>
        <li class="mb-3"><span class="font-semibold">Computer Vision:</span> Image and pattern recognition systems</li>
        <li class="mb-3"><span class="font-semibold">Recommendation Engines:</span> Personalized content delivery</li>
        <li class="mb-3"><span class="font-semibold">Anomaly Detection:</span> Identifying outliers and fraud patterns</li>
        <li class="mb-3"><span class="font-semibold">Time Series Analysis:</span> Forecasting for inventory and demand</li>
      </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">Our ML Development Lifecycle</h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Problem Framing:</span> Defining business objectives</li>
        <li class="mb-3"><span class="font-semibold">Data Preparation:</span> Cleaning and feature engineering</li>
        <li class="mb-3"><span class="font-semibold">Model Development:</span> Algorithm selection and training</li>
        <li class="mb-3"><span class="font-semibold">Evaluation:</span> Rigorous performance testing</li>
        <li class="mb-3"><span class="font-semibold">Deployment:</span> Production-ready model serving</li>
      </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Our ML Solutions Deliver Results</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3"><span class="font-semibold">Explainable AI:</span> Transparent model decisions</li>
        <li class="mb-3"><span class="font-semibold">Continuous Learning:</span> Models that improve over time</li>
        <li class="mb-3"><span class="font-semibold">Scalable Architecture:</span> Handles growing data volumes</li>
        <li class="mb-3"><span class="font-semibold">Business Alignment:</span> Solutions tied to KPIs</li>
      </ul>`,
    },
  },
];
