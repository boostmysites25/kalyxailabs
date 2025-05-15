import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Ambulance, 
  BriefcaseBusiness, 
  Cpu, 
  Store, 
  Cloudy, 
  StickyNote, 
  Tv, 
  BrainCircuit,
  Sparkles
} from "lucide-react";

const industrySpecificCTAs = {
  "Healthcare": {
    title: "Request a Personalized AI Consultation for Your Healthcare Organization",
    description: "Discover how our AI solutions can improve patient outcomes, optimize operations, and enhance diagnostic accuracy.",
    buttonText: "Get Healthcare AI Consultation",
    icon: Ambulance,
    color: "from-blue-600 to-indigo-800",
    accentColor: "bg-blue-500"
  },
  "Finance": {
    title: "Explore AI-Powered Financial Solutions for Your Institution",
    description: "Learn how our AI technologies can enhance fraud detection, automate risk assessment, and improve customer experiences.",
    buttonText: "Get Financial AI Consultation",
    icon: BriefcaseBusiness,
    color: "from-emerald-600 to-teal-800",
    accentColor: "bg-emerald-500"
  },
  "Technology": {
    title: "Accelerate Your Tech Company with Custom AI Solutions",
    description: "See how our AI expertise can help you build better products, optimize operations, and stay ahead of the competition.",
    buttonText: "Get Tech AI Consultation",
    icon: Cpu,
    color: "from-violet-600 to-purple-800",
    accentColor: "bg-violet-500"
  },
  "Retail & E-commerce": {
    title: "Request a Personalized AI Consultation for Your E-commerce Business",
    description: "Discover how AI can boost your sales, personalize customer experiences, and optimize your inventory management.",
    buttonText: "Get E-commerce AI Consultation",
    icon: Store,
    color: "from-rose-600 to-pink-800",
    accentColor: "bg-rose-500"
  },
  "SaaS": {
    title: "Enhance Your SaaS Platform with Intelligent AI Features",
    description: "Learn how our AI solutions can improve user retention, automate workflows, and provide valuable insights for your SaaS business.",
    buttonText: "Get SaaS AI Consultation",
    icon: Cloudy,
    color: "from-sky-600 to-blue-800",
    accentColor: "bg-sky-500"
  },
  "Business Services": {
    title: "Transform Your Business Services with AI-Powered Solutions",
    description: "See how AI can streamline your operations, enhance client relationships, and drive better business outcomes.",
    buttonText: "Get Business AI Consultation",
    icon: StickyNote,
    color: "from-amber-600 to-orange-800",
    accentColor: "bg-amber-500"
  },
  "Media & Entertainment": {
    title: "Revolutionize Your Media Content with AI Technologies",
    description: "Discover how AI can help you create better content, understand your audience, and optimize your distribution strategies.",
    buttonText: "Get Media AI Consultation",
    icon: Tv,
    color: "from-red-600 to-rose-800",
    accentColor: "bg-red-500"
  }
};

const IndustrySpecificCTA = ({ industry }) => {
  const ctaData = industrySpecificCTAs[industry] || industrySpecificCTAs["Retail & E-commerce"];
  const IconComponent = ctaData.icon;
  
  return (
    <div className={`bg-gradient-to-r ${ctaData.color} rounded-xl overflow-hidden relative`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
      </div>
      
      {/* Floating icons in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 right-5 opacity-20">
          <IconComponent className="w-24 h-24 text-white" />
        </div>
        <div className="absolute bottom-5 left-5 opacity-10">
          <BrainCircuit className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-10">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
      </div>
      
      <div className="relative z-10 p-8 md:p-10 text-white">
        <div className="flex items-start gap-5">
          <div className={`${ctaData.accentColor} p-3 rounded-lg hidden md:block`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{ctaData.title}</h3>
            <p className="mb-6 max-w-2xl text-white/90 text-lg">{ctaData.description}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {ctaData.buttonText}
              <ArrowRight className="w-4 h-4 min-w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySpecificCTA;