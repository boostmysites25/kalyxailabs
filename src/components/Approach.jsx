import bgImage from "../assets/images/approach.webp";

const Approach = () => {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description:
        "A consultation with our AI experts to understand your pain points and our possible solution",
    },
    {
      number: "02",
      title: "Process Strategization",
      description:
        "Designing the complete roadmap suitable for you and our team to develop a quality AI-based solution",
    },
    {
      number: "03",
      title: "Technology Identification",
      description:
        "Determining and discussing the best possible technologies for your digital solution",
    },
    {
      number: "04",
      title: "QA & Compliance Testing",
      description:
        "Ensuring our solution is free of any bugs and complies with all the necessary regulatory requirements",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "Deploying the final product for you to integrate into and optimize your workflow",
    },
  ];

  return (
    <div data-aos="fade-up" className="py-[4rem]">
      <div className="w-full bg-white/70 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={bgImage}
            alt="Floral background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="py-16 wrapper backdrop-blur-sm">
          <div className="mb-6 sm:mb-8">
            <h2 className="heading-2 capitalize">
              Our approach to seamless{" "}
              <span className="gradient-text">enterprise AI development</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              Access future-driven solutions and upgrade workflow with AI
              services curated by our professionals
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-3 sm:gap-4 md:gap-6 items-start"
              >
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
                    <span className="md:text-2xl font-bold gradient-text">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 sm:top-10 md:top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-10 sm:h-12 md:h-14 bg-gradient-to-b from-pink-200 to-blue-200"></div>
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 sm:mt-1 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
