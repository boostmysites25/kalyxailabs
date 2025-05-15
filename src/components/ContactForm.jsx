import React, { useContext, useState } from "react";
import img from "../assets/images/contact-form.webp";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../data/constant";
import { industries } from "../pages/Home";

const ContactForm = ({ headline, id, preselectedIndustry }) => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(preselectedIndustry || "");
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      industry: preselectedIndustry || "",
    },
  });

  // Industry-specific CTAs
  const industryCTAs = {
    "Healthcare": "Explore AI-Powered Diagnostic Solutions",
    "Finance": "Discover AI Financial Risk Solutions",
    "Technology": "Accelerate with AI Tech Solutions",
    "Retail & E-commerce": "Transform Your E-commerce with AI",
    "SaaS": "Enhance Your SaaS with AI Features",
    "Business Services": "Optimize Business Processes with AI",
    "Media & Entertainment": "Revolutionize Media Content with AI",
    "": "Send Message" // Default
  };

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    values.company && (emailBody += "Company: " + values.company + "\n\n");
    emailBody += "Phone: " + values.phone + "\n\n";
    values.industry && (emailBody += "Industry: " + values.industry + "\n\n");
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "Contact Form Submission - Kalyx AI Labs",
      body: emailBody,
      name:"Kalyx AI Labs",
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  
  return (
    <div
      id={id}
      className="wrapper rounded-2xl grid md:grid-cols-2 gap-3 py-[4rem]"
    >
      <div
        data-aos="fade-right"
        className="bg-purpleColor text-white p-8 sm:p-10 rounded-2xl"
      >
        <h3 className="section-heading">
          {headline ? headline : "Let's build something great together."}
        </h3>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="grid grid-cols-1 gap-4 mt-7"
        >
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="">
              <input
                type="text"
                className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="text-primary">{errors.name?.message}</small>
            </div>
            <div className="">
              <input
                type="text"
                className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
                placeholder="Company Name (Optional)"
                {...register("company")}
              />
            </div>
          </div>
          <div className="">
            <input
              type="email"
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="text-primary">{errors.email?.message}</small>
          </div>
          <div className="">
            <input
              type="tel"
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-primary">{errors.phone?.message}</small>
          </div>
          
          {/* Industry Selection */}
          <div className="">
            <select
              className="outline-none p-2 bg-transparent border-b w-full text-white"
              {...register("industry")}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              value={selectedIndustry}
            >
              <option value="" className="text-black">Select Your Industry (Optional)</option>
              {industries.map((industry) => (
                <option 
                  key={industry.title} 
                  value={industry.title}
                  className="text-black"
                >
                  {industry.title}
                </option>
              ))}
              <option value="Other" className="text-black">Other</option>
            </select>
          </div>
          
          <div className="">
            <textarea
              className="placeholder:text-white outline-none p-2 bg-transparent border-b w-full"
              placeholder="Message"
              rows="4"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="text-primary">{errors.message?.message}</small>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <button
              disabled={isSubmitting}
              className="btn rounded bg-white text-black w-full hover:bg-primary hover:text-white hover:shadow-primary/20"
            >
              {industryCTAs[selectedIndustry]}
            </button>
            <small className="text-white/80">
              By sending this form, I confirm that I have read and accepted the
              <Link className="font-semibold text-white" to="/privacy-policy">
                {" "}
                Privacy Policy.
              </Link>
            </small>
          </div>
        </form>
      </div>
      <div
        data-aos="fade-up"
        className="bg-[#F7F7F9] rounded-2xl md:block hidden overflow-hidden"
      >
        <img src={img} alt="Contact" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default ContactForm;