import { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  ArrowRight,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
} from "lucide-react";

import { Link } from "react-router-dom";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import { ArrowLinkButton } from "../components/ArrowButtons";
import Approach from "../components/Approach";
import IndustrySolutions from "../components/IndustrySolutions";
import ResultsTimeline from "../components/ResultsTimeline";

// Import services from services.js
import { services } from "../data/services";
import { createUrlParam } from "../utils/helper";

const ContactForm = lazy(() => import("../components/ContactForm"));
const BlogsSection = lazy(() => import("../components/website/BlogsSection"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);
const AIComparison = lazy(() => import("../components/website/AIComparison"));

export const industries = [
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
    title: "Retail &\n E-commerce",
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

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen bg-black/50">
        <div className="pt-[12rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" /> <span>IT & AI Services</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              <span className="gradient-text">
                Building Smarter Digital Experiences,
              </span>{" "}
              <br /> One Solution at a Time
            </h1>
            <div className="space-y-3">
              <p
                data-aos="fade-up"
                className="text-center text-white mt-6 mb-4 text-xl font-semibold"
              >
                <span className="gradient-text">
                  Our Comprehensive Range of Services
                </span>
              </p>
              <div
                data-aos="fade-up"
                className="pt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 max-w-6xl mx-auto"
              >
                {services.map((service) => (
                  <Link
                    to={`/services/${createUrlParam(service.title)}`}
                    key={service.title}
                  >
                    <div
                      data-aos="fade-up"
                      className="text-center p-4 bg-black/30 backdrop-blur-md rounded-xl space-y-3 hover:shadow-lg hover:bg-black/40 border border-white/10 transition-all h-full group"
                      title={service.shortDesc}
                    >
                      <div className="bg-gradient-to-br from-secondary/80 to-primary/80 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto shadow-md group-hover:shadow-secondary/30 group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-medium text-[.9rem] whitespace-pre-line text-white group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
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

      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      <ServicesWeProvide length={6} />
      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="text-center">
            We specialize in delivering custom solutions for a wide range of
            industries.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3"
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
      <ResultsTimeline />
      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="hero banner"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">How we build</h3>
            <p className="max-w-xs">
              We believe in building lasting partnerships through close
              collaboration, aligning with your business goals to deliver
              impactful, client-focused solutions.
            </p>
            <div className="pt-7">
              <ArrowLinkButton to="/contact">Let's Chat</ArrowLinkButton>
            </div>
          </div>
        </div>
      </section>
      <Approach />
      <IndustrySolutions />
      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Choose Kalyx AI Labs as Your Technology Partner?
        </h2>
        <div className="flex flex-col gap-5">
          {/* Card 1 - Expertise */}
          <div
            data-aos="fade-up"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Unparalleled Technical Expertise
                </h3>
                <p className="md:text-lg text-white font-semibold">
                  Kalyx AI Labs combines cutting-edge technical skills with
                  creative problem-solving to deliver exceptional digital
                  solutions. Our team of certified developers, designers, and
                  engineers brings years of experience in web development,
                  mobile applications, and emerging technologies. We maintain
                  rigorous quality standards with a 98% client satisfaction rate
                  across 200+ completed projects.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt="Our team of experts collaborating on digital projects"
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          {/* Card 2 - Services */}
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
                  As a full-service digital agency, we specialize in custom web
                  development, mobile app creation, UI/UX design, game
                  development, and blockchain solutions. Our end-to-end services
                  include strategic consulting, agile development, and ongoing
                  support. Whether you need an e-commerce platform, enterprise
                  software, or AI-powered applications, we deliver scalable
                  solutions tailored to your business objectives.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt="Our diverse digital service offerings"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          {/* Card 3 - Results */}
          <div
            data-aos="fade-up"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Proven Results Across Industries
                </h3>
                <p className="md:text-lg text-white font-semibold">
                  Our digital solutions drive measurable business outcomes.
                  Clients experience an average 40% increase in operational
                  efficiency and 35% growth in customer engagement. From
                  responsive websites that convert 30% more leads to mobile apps
                  with 4.8+ star ratings, we build platforms that perform. Case
                  studies show our fintech solutions process transactions 50%
                  faster, while our healthcare applications improve patient
                  outcomes.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt="Business growth metrics and success stories"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          {/* Card 4 - Industries */}
          <div
            data-aos="fade-up"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Industry-Specific Solutions
                </h3>
                <p className="md:text-lg text-white font-semibold">
                  We deliver tailored technology solutions for healthcare,
                  finance, e-commerce, education, and enterprise sectors. Our
                  healthcare applications improve patient care coordination,
                  while our fintech solutions enhance transaction security.
                  E-commerce platforms we develop average 25% higher conversion
                  rates, and our educational tools increase learning retention
                  by 40%. Each solution incorporates industry best practices and
                  compliance standards.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt="Industry-specific technology applications"
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>
      
      {/* AI Comparison Section */}
      <AIComparison />
      
      <BlogsSection />
      <ContactForm />
    </>
  );
};

export default Home;
