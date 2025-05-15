import React, { lazy, useContext } from "react";
import banner from "../assets/images/contactus-banner.webp";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { companyDetails } from "../data/constant";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../components/SpinnerContext";

const MapComponent = lazy(() => import("../components/website/MapComponent"));

const ContactUs = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
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
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Kalyx AI Labs",
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
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
    <div className="">
      <div>
        <img
          src={banner}
          className="w-full aspect-[5/3] md:aspect-[6/2.5] object-cover object-[30%_100%] md:object-bottom"
          alt="Contact Us - Get in Touch Banner"
          title="Contact Us Banner"
        />
      </div>

      <section
        className="bg-gradient-to-r from-[#262731] to-[#757795]"
        aria-labelledby="contact-info"
      >
        <div className="wrapper py-[4rem]">
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-3 gap-7 text-white"
            id="contact-info"
          >
            <address className="not-italic flex items-start sm:justify-center gap-3">
              <div className="w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <MapPin className="text-white" size={25} />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="max-w-xs">{companyDetails.address}</p>
              </div>
            </address>

            <div className="flex items-start sm:justify-center gap-3">
              <div className="w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <PhoneCall className="text-white" size={25} />
              </div>
              <div>
                <p className="font-semibold">Phone Number</p>
                <a href={`tel:${companyDetails.phone}`} className="underline">
                  {companyDetails.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start sm:justify-center gap-3">
              <div className="w-[3.5rem] flex items-center justify-center bg-gradient-to-r from-[#e5497c] to-[#495df3] rounded-full aspect-square">
                <Mail className="text-white" size={25} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="underline"
                >
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </div>

          <section
            className="mt-[4rem] text-white"
            aria-labelledby="contact-form"
          >
            <h1
              data-aos="fade-up"
              className="section-heading"
              id="contact-form"
            >
              Let's Connect With Us!
            </h1>
            <p data-aos="fade-up" className="max-w-5xl mt-3">
              We’re excited to collaborate with you on your next big idea!
              Whether it’s a website, mobile app, or blockchain solution, we’re
              here to help. Let’s talk and build something great together!
            </p>

            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              data-aos="fade-up"
              className="mt-10 p-5 sm:p-7 flex flex-col bg-gradient-to-r from-[#f9ece6] to-[#a4b5c5] rounded-xl"
            >
              <fieldset className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Full name is required",
                      validate: (val) =>
                        val.trim() !== "" || "Full name is required",
                    })}
                  />
                  <small className="text-red-500">{errors.name?.message}</small>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Entered email is invalid",
                      },
                    })}
                  />
                  <small className="text-red-500">
                    {errors.email?.message}
                  </small>
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[0-9]{10,15}$/,
                        message: "Entered phone number is invalid",
                      },
                    })}
                  />
                  <small className="text-red-500">
                    {errors.phone?.message}
                  </small>
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                      validate: (val) =>
                        val.trim() !== "" || "Subject is required",
                    })}
                  />
                  <small className="text-red-500">
                    {errors.subject?.message}
                  </small>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="placeholder:text-black/80 text-black p-3 bg-white outline-none w-full rounded-md"
                    placeholder="Message"
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                      validate: (val) =>
                        val.trim() !== "" || "Message is required",
                    })}
                  />
                  <small className="text-red-500">
                    {errors.message?.message}
                  </small>
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn rounded-full bg-white text-black hover:shadow-white/50 w-full sm:w-fit self-end mt-5"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </section>

      <section aria-label="Google Map Location">
        <MapComponent />
      </section>
    </div>
  );
};

export default ContactUs;
