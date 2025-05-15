import React, { lazy } from "react";
import { Navigate, useParams } from "react-router-dom";
import { services } from "../data/services";
import { Helmet } from "react-helmet";
import { createUrlParam } from "../utils/helper";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const ServiceDetails = () => {
  const { url } = useParams();
  const data = services.find(
    (service) => createUrlParam(service.title) === url
  );
  if (!data) return <Navigate to="/" />;
  return (
    <div className="pt-[10rem] pb-[4rem]">
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.shortDesc} />
        <meta name="keywords" content={data.seoKeywords} />
      </Helmet>
      <div className="wrapper">
        <div className="">
          <h1 data-aos="fade-up" className="section-heading">
            {data.title}
          </h1>
          <div className="rounded-xl bg-secondary/5">
            <img
              data-aos="fade-up"
              src={data.detailsPageImages.first}
              className="w-full max-w-5xl mx-auto aspect-video object-contain rounded-xl my-5"
              alt={data.title}
            />
          </div>
          <div
            data-aos="fade-up"
            className="pt-6"
            dangerouslySetInnerHTML={{ __html: data.html.firstSection }}
          ></div>
          <div className="flex flex-col md:grid grid-cols-2 items-center mt-[3rem] gap-5">
            <div data-aos="fade-up" className="w-full sm:w-1/2 md:w-full">
              <img
                src={data.detailsPageImages.second}
                classNames="object-contain"
                alt={data.title}
              />
            </div>
            <div
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: data.html.secondSection }}
            ></div>
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-2 items-center gap-5 mt-[3rem]">
            <div
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: data.html.thirdSection }}
            ></div>
            <div data-aos="fade-up" className="w-full sm:w-1/2 md:w-full">
              <img
                src={data.detailsPageImages.third}
                classNames="object-contain"
                alt={data.title}
              />
            </div>
          </div>
        </div>
      </div>
      <BlogsSection />
    </div>
  );
};

export default ServiceDetails;
