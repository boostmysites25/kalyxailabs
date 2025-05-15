import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArrowLinkButton } from "../ArrowButtons";
import { createUrlParam } from "../../utils/helper";

const ServicesWeProvide = ({ length }) => {
  return (
    <div id="services" className="py-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center">
        Services We Provide
      </h2>
      <div data-aos="fade-up" className="mt-10 pb-5 grid lg:grid-cols-3 gap-5">
        {services.slice(0, length).map((item, i) => (
          <Link
            key={item.title}
            to={`/services/${createUrlParam(item.title)}`}
            className={`group h-full overflow-hidden space-y-6 odd:bg-secondary/70 even:bg-primary/70 odd:hover:bg-primary/70 even:hover:bg-secondary/70 p-5 rounded-xl transition-all duration-300
              
              `}
          >
            <div className="grid h-full items-center gap-4">
              <img
                src={item.image}
                className="object-contain sm:block hidden h-[6rem]"
                alt={item.title}
              />
              <div className="h-full flex flex-col gap-3 justify-between">
                <div className="space-y-3">
                  <p className="text-xl font-medium">{item.title}</p>
                  <img
                    src={item.image}
                    className="object-contain w-1/2 block sm:hidden"
                    alt={item.title}
                  />
                  <p>{item.shortDesc}</p>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-sm py-2 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {length && <ArrowLinkButton to="/services">View All</ArrowLinkButton>}
    </div>
  );
};

export default ServicesWeProvide;
