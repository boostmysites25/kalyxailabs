import React, { useState } from "react";
import {
  Ambulance,
  BriefcaseBusiness,
  Cpu,
  Store,
  Cloudy,
  StickyNote,
  Tv,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import bgImage from "../assets/images/approach.webp";
import { Link } from "react-router-dom";
import IndustrySpecificCTA from "./IndustrySpecificCTA";

const IndustrySolutions = () => {
  // Define industries with their icons
  const industries = [
    {
      icon: Ambulance,
      title: "Healthcare",
    },
    {
      icon: BriefcaseBusiness,
      title: "Finance",
    },
    {
      icon: Cpu,
      title: "Technology",
    },
    {
      icon: Store,
      title: "Retail & E-commerce",
    },
    {
      icon: Cloudy,
      title: "SaaS",
    },
    {
      icon: StickyNote,
      title: "Business Services",
    },
    {
      icon: Tv,
      title: "Media & Entertainment",
    },
  ];

  // Content for each industry
  const industryContent = {
    Healthcare: {
      title: "Healthcare",
      solutions: [
        {
          title: "Patient Data Management",
          description:
            "Centralize patient records and enable AI-powered diagnostics for better care coordination and outcomes.",
        },
        {
          title: "Predictive Analytics",
          description:
            "Forecast patient admissions and resource needs to optimize staffing and inventory management.",
        },
        {
          title: "Remote Monitoring",
          description:
            "Monitor patients remotely with AI-powered tools that detect anomalies and alert providers immediately.",
        },
        {
          title: "Treatment Recommendation",
          description:
            "Leverage AI to analyze symptoms, medical history, and latest research to suggest optimal treatment plans.",
        },
      ],
      cta: "Explore AI-Powered Diagnostic Solutions for Your Hospital",
    },
    Finance: {
      title: "Finance",
      solutions: [
        {
          title: "Fraud Detection System",
          description:
            "Implement advanced AI algorithms to detect and prevent fraudulent transactions in real-time.",
        },
        {
          title: "Automated Risk Assessment",
          description:
            "Assess creditworthiness and financial risk with sophisticated machine learning models.",
        },
        {
          title: "Personalized Financial Advising",
          description:
            "Provide customized financial advice based on individual spending patterns and financial goals.",
        },
        {
          title: "Market Trend Analysis",
          description:
            "Analyze market trends and predict investment opportunities with high accuracy.",
        },
      ],
      cta: "Discover AI-Powered Financial Risk Solutions",
    },
    Technology: {
      title: "Technology",
      solutions: [
        {
          title: "Predictive Maintenance",
          description:
            "Identify potential system failures before they occur, minimizing downtime and maintenance costs.",
        },
        {
          title: "Automated Code Generation",
          description:
            "Speed up development cycles with AI-powered code generation and quality assessment tools.",
        },
        {
          title: "Infrastructure Optimization",
          description:
            "Optimize cloud resources and infrastructure utilization based on real-time demand analysis.",
        },
        {
          title: "Intelligent Debugging",
          description:
            "Streamline bug identification and resolution with AI-powered diagnostic tools.",
        },
      ],
      cta: "Accelerate Your Tech Company with AI Solutions",
    },
    "Retail & E-commerce": {
      title: "Retail & E-commerce",
      solutions: [
        {
          title: "Better Store Layout",
          description:
            "See what customers like more, and with AI's image generation function, design the best layout, putting the popular amount in front for better revenue.",
        },
        {
          title: "Seamless Customer Experience",
          description:
            "Implement things like online orders and in-store pickup systems or online checkout to minimize queues and maximize the positive experience.",
        },
        {
          title: "Automated Feedback",
          description:
            "Improve the services and get the needed business insights using automated feedback forms for customers to rate and share their views.",
        },
        {
          title: "Centralized Management System",
          description:
            "Centralize the point of connection among all the employees for better, more organized, and effective management through a single platform.",
        },
      ],
      cta: "Request a Personalized AI Consultation for Your E-commerce Business",
    },
    SaaS: {
      title: "SaaS",
      solutions: [
        {
          title: "Smart User Onboarding",
          description:
            "Create personalized onboarding experiences that adapt to user behavior and learning patterns.",
        },
        {
          title: "Usage Analytics",
          description:
            "Gain deep insights into feature usage and user engagement to inform product development.",
        },
        {
          title: "Churn Prediction",
          description:
            "Identify at-risk customers before they cancel and trigger retention strategies automatically.",
        },
        {
          title: "Dynamic Pricing",
          description:
            "Optimize subscription pricing based on customer segments, usage patterns, and market conditions.",
        },
      ],
      cta: "Enhance Your SaaS Platform with AI Features",
    },
    "Business Services": {
      title: "Business Services",
      solutions: [
        {
          title: "Document Processing",
          description:
            "Automate document classification, data extraction, and processing to improve operational efficiency.",
        },
        {
          title: "Meeting Intelligence",
          description:
            "Capture, transcribe, and extract key insights from meetings to improve team collaboration.",
        },
        {
          title: "Resource Allocation",
          description:
            "Optimize staffing and resource allocation based on project requirements and team strengths.",
        },
        {
          title: "Client Relationship Management",
          description:
            "Predict client needs and enhance relationships with AI-powered communication tools.",
        },
      ],
      cta: "Transform Your Business Services with AI Solutions",
    },
    "Media & Entertainment": {
      title: "Media & Entertainment",
      solutions: [
        {
          title: "Content Recommendation",
          description:
            "Deliver hyper-personalized content recommendations based on user preferences and viewing habits.",
        },
        {
          title: "Automated Content Creation",
          description:
            "Generate scripts, articles, and creative assets with AI to accelerate content production.",
        },
        {
          title: "Audience Analysis",
          description:
            "Gain deep insights into audience preferences and behavior to inform content strategy.",
        },
        {
          title: "Sentiment Analysis",
          description:
            "Analyze social media and review platforms to gauge audience reaction to content.",
        },
      ],
      cta: "Revolutionize Your Media Content with AI",
    },
  };

  const [activeIndustry, setActiveIndustry] = useState("Retail & E-commerce");

  return (
    <div data-aos="fade-up" className="wrapper py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="heading-2 capitalize mb-4">
          Tailored{" "}
          <span className="gradient-text">enterprise AI solutions</span>{" "}
          <span className="">to match your industry requirements</span>
        </h2>
        <p className="max-w-3xl mx-auto">
          We design AI development solutions that assist businesses across
          myriad industries
        </p>
      </div>

      {/* Industry Navigation */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto">
        {industries.map((industry) => (
          <button
            key={industry.title}
            onClick={() => setActiveIndustry(industry.title)}
            className={`py-2 px-4 whitespace-nowrap text-gray-700 font-medium transition-all duration-200
              ${
                activeIndustry === industry.title
                  ? "border-b-2 border-pink-500 text-gray-900"
                  : "hover:text-gray-900"
              }`}
          >
            {industry.title}
          </button>
        ))}
      </div>

      {/* Content Section with Background Image */}
      <div className="relative rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-teal-700/30 to-amber-700/30">
          <img
            src={bgImage}
            alt="Background texture"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* White Content Box */}
        <div className="relative bg-white/95 m-4 sm:m-8 p-6 sm:p-10 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {industryContent[activeIndustry]?.solutions.map(
              (solution, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-3 ">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              )
            )}
          </div>
          
          {/* Industry-specific CTA button */}
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
            >
              {industryContent[activeIndustry]?.cta}
              <ArrowRight className="w-4 h-4 min-w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Industry-specific CTA section */}
      <div className="mt-12">
        <IndustrySpecificCTA industry={activeIndustry} />
      </div>
    </div>
  );
};

export default IndustrySolutions;
