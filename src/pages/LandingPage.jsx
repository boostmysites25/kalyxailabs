import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  BrainCircuit,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
} from "lucide-react";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import LandingServices from "../components/landingPage/LandingServices";
import { ArrowScrollButton } from "../components/ArrowButtons";
import Portfolio from "../components/Portfolio";
import { industries } from "./Home";
import Approach from "../components/Approach";

const ContactForm = lazy(() => import("../components/ContactForm"));
const Testimonials = lazy(() => import("../components/Testimonials"));

const LandingPage = ({ page }) => {
  const isWeb = page === "web";
  const serviceType = isWeb ? "Web Development" : "App Development";
  const metaDescription = isWeb
    ? "Kalyx AI Labs delivers custom web development services with 98% client satisfaction. Our websites convert 30% more leads with 90+ Lighthouse scores."
    : "Top-rated mobile app development company creating iOS & Android apps with 4.8+ store ratings. We build custom apps for startups and enterprises.";

  return (
    <>
      {/* Schema.org markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${serviceType} Services | Kalyx AI Labs`,
          description: metaDescription,
          url: window.location.href,
          publisher: {
            "@type": "Organization",
            name: "Kalyx AI Labs",
            logo: {
              "@type": "ImageObject",
              url: "https://kalyxailabs.com/logo.png",
            },
          },
        })}
      </script>

      <section id="banner" className="relative min-h-screen bg-black/50">
        <div className="pt-[13rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" />
              <span>{serviceType}</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              Premium {serviceType} Services for{" "}
              <span className="gradient-text">Business Growth</span>
            </h1>
            <p data-aos="fade-up" className="text-white text-lg">
              {isWeb
                ? `Kalyx AI Labs builds high-performance websites that convert 30% more visitors. Our web solutions feature 90+ Lighthouse scores, enterprise-grade security, and responsive designs that boost engagement across all devices.`
                : `We develop award-winning mobile applications with 4.8+ average app store ratings. Our cross-platform apps deliver native performance while reducing development costs by 40%.`}
            </p>
            <div data-aos="fade-up" className="pt-5">
              <ArrowScrollButton to="contact">
                Get Free Consultation
              </ArrowScrollButton>
            </div>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>

      <ContactForm headline="Free Strategy Session With Our Experts" />

      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>

      <LandingServices isWeb={isWeb} />

      <Portfolio page={page} />

      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industry-Specific {serviceType} Solutions
          </h2>
          <p data-aos="fade-up" className="text-center max-w-3xl mx-auto">
            We deliver tailored digital solutions that address unique challenges
            across 8 major industries, with proven results in each sector.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3 hover:shadow-lg transition-all"
                  title={item.description}
                >
                  <IconComponent className="w-8 h-8 mx-auto text-secondary" />
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-[4rem]">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Our {serviceType} Methodology Delivers Results
          </h2>
          <p data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            Proven process that has delivered successful projects for 200+
            clients worldwide
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
          >
            {[
              {
                title: "Strategic Planning",
                desc: "We analyze your business objectives and user needs to create a comprehensive roadmap with measurable KPIs.",
                styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
                icon: "📊",
              },
              {
                title: "Agile Development",
                desc: "Two-week sprints with continuous integration ensure we adapt quickly to changes while maintaining quality.",
                styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
                icon: "🔄",
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous testing across 100+ devices and browsers guarantees flawless performance at launch.",
                styles: "bg-[#B94391]",
                icon: "🔍",
              },
              {
                title: "Performance Optimization",
                desc: "We fine-tune every aspect for speed, achieving 90+ Lighthouse scores on all projects.",
                styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
                icon: "⚡",
              },
              {
                title: "Ongoing Support",
                desc: "24/7 monitoring and quarterly updates keep your digital solution performing at its peak.",
                styles: "bg-[#E85535] lg:rotate-[18deg] lg:translate-y-[8rem]",
                icon: "🛠️",
              },
            ].map((item) => (
              <div
                className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
                key={item.title}
              >
                <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300">
                  <p className="text-2xl">{item.icon}</p>
                  <p className="md:text-lg font-bold leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[.9rem]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="Our development process at Kalyx AI Labs"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">
              Our Development Philosophy
            </h3>
            <p className="max-w-xs">
              Client-centric approach that has resulted in 98% satisfaction
              across 200+ projects.
            </p>
            <div className="pt-7">
              <ArrowScrollButton to="contact">
                Consult With Our Experts
              </ArrowScrollButton>
            </div>
          </div>
        </div>
      </section>

      <Approach />
      <section className="wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Leading Companies Choose Kalyx AI Labs
        </h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="fade-up"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Award-Winning Technical Expertise
                </h3>
                <p className="md:text-lg text-white font-semibold">
                  Our team of certified developers and designers brings 10+
                  years average experience in {serviceType}. We maintain
                  rigorous quality standards with 98% client satisfaction across
                  200+ completed projects. Recognized by Clutch as a top
                  development firm for 3 consecutive years.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt="Our development team working on projects"
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Comprehensive Digital Solutions
                </h3>
                <p className="md:text-lg text-white font-semibold">
                  Beyond {serviceType}, we offer end-to-end services including
                  UI/UX design, QA testing, and ongoing maintenance. Our
                  full-cycle approach means we can handle projects from concept
                  to launch and beyond, reducing your need for multiple vendors.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt="Our complete suite of digital services"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Proven Business Results
                </h3>
                <p className="md:text-lg text-white font-semibold">
                  Our solutions drive measurable outcomes - websites convert 30%
                  more leads, apps achieve 4.8+ store ratings, and clients see
                  40% operational improvements. Case studies show our fintech
                  solutions process transactions 50% faster.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt="Business growth metrics from our projects"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Industry-Specific Expertise
                </h3>
                <p className="md:text-lg text-white font-semibold">
                  We understand sector-specific challenges in healthcare,
                  finance, e-commerce and more. Our healthcare apps improve
                  patient outcomes, while retail solutions boost conversions by
                  25%. Each solution incorporates industry compliance standards.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt="Our work across multiple industries"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>

      <ContactForm
        id="contact"
        headline="Ready to Transform Your Digital Presence?"
      />
    </>
  );
};

export default LandingPage;
