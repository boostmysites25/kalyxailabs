import React from "react";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../data/constant";
import { ArrowScrollButton } from "../ArrowButtons";

const LandingServices = ({ isWeb }) => {
  const services = isWeb ? webDevelopmentServices : appDevelopmentServices;
  return (
    <div id="services" className="py-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center">
        {isWeb
          ? "Our Web Development Services"
          : "Our App Development Services"}
      </h2>
      <div data-aos="fade-up" className="mt-10 pb-5 grid md:grid-cols-2 gap-5">
        {services.map((item, i) => (
          <div
            key={item.title}
            className={`h-full px-6 py-9 relative odd:bg-secondary/40 even:bg-primary/40 odd:hover:bg-primary/40 even:hover:bg-secondary/70 rounded-xl transition-all duration-300 overflow-hidden space-y-6 ${
              i === 2 ? "order-3" : ""
            }`}
          >
            <div className="text-white overflow-hidden h-full">
              <div className="absolute h-full w-full inset-0 z-0 backdrop-blur-sm bg-black/50"></div>
              <img
                src={item.image}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                alt=""
              />
              <div className="relative z-10 grid sm:grid-cols-[60%_auto] h-full items-center gap-4">
                <div className="h-full flex flex-col gap-3 justify-between">
                  <div className="space-y-3">
                    <p className="text-xl font-medium">{item.title}</p>
                    <img
                      src={item.image}
                      className="object-contain block sm:hidden"
                      alt={item.title}
                    />
                    <p>{item.description}</p>
                  </div>
                </div>
                <img
                  src={item.image}
                  className="object-cover aspect-[4/3] w-full h-full rounded-xl sm:block hidden"
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowScrollButton to="contact">Consult With Our Experts</ArrowScrollButton>
    </div>
  );
};

export default LandingServices;
