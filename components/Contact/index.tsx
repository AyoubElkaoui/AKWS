"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Dit is geen geldig e-mailadres.");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Voer een geldig telefoonnummer in (alleen cijfers).");
    } else {
      setPhoneError("");
    }
  };

  if (!hasMounted) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailError || phoneError) {
      toast.error("Corrigeer de fouten voordat je het formulier verzendt.");
      return;
    }

    if (!recaptchaValue) {
      toast.error("Vul de reCAPTCHA in.");
      return;
    }

    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
      email,
      phone,
      subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
      recaptchaValue,
    };

    const toastId = toast.loading("Verzenden...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
        toast.update(toastId, {
          render: result.message || "Bedankt, je bericht is verzonden!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(toastId, {
          render: result.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.update(toastId, {
        render: "Er is een fout opgetreden bij het verzenden van het formulier.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar style={{ zIndex: 99999 }} />

      <section id="contact" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Stuur ons een bericht
              </h2>

              {formSubmitted ? (
                <div className="p-10 text-center">
                  <h2 className="text-3xl font-semibold">Bedankt!</h2>
                  <p>We hebben je bericht ontvangen en nemen spoedig contact met je op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                    <input
                      type="text"
                      name="name"
                      placeholder="Volledige naam"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    />

                    <div className="w-full lg:w-1/2">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mailadres"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          validateEmail(e.target.value);
                        }}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                      />
                      {emailError && <p className="mt-2 text-sm text-red-500">{emailError}</p>}
                    </div>
                  </div>

                  <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Onderwerp"
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    />

                    <div className="w-full lg:w-1/2">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Telefoonnummer"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          validatePhone(e.target.value);
                        }}
                        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                      />
                      {phoneError && <p className="mt-2 text-sm text-red-500">{phoneError}</p>}
                    </div>
                  </div>

                  <div className="mb-11.5 flex">
                    <textarea
                      placeholder="Bericht"
                      name="message"
                      rows={4}
                      className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    ></textarea>
                  </div>

                  <div className="mb-7.5">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={(value) => setRecaptchaValue(value)}
                    />
                  </div>

                  <div className="flex flex-wrap gap-4 xl:justify-between">
                    <button
                      type="submit"
                      aria-label="Verstuur bericht"
                      className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                      onClick={() => {
                        // 🔹 Google Ads conversie direct bij klik
                        if (typeof window !== "undefined" && window.gtag) {
                          window.gtag("event", "conversion", {
                            send_to: "AW-16875681251/7fBTCPyX8qMaEOPr-e4-", // Vervang met jouw ID/label
                            value: 1.0,
                            currency: "EUR",
                          });
                          console.log("Google Ads conversie gemeten op button-click!");
                        } else {
                          console.error("gtag is niet beschikbaar!");
                        }
                      }}
                    >
                      Verstuur Bericht
                      <svg
                        className="fill-white"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Neem contact op
              </h2>

              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Locatie
                </h3>
                <p>
                  Leeuwerikweide 40
                  <br />
                  3742XR
                  <br />
                  Baarn
                  <br />
                  Nederland
                </p>
              </div>

              <div className="mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  E-mailadres
                </h3>
                <p>
                  <a href="mailto:info@akwebsolutions.nl">info@akwebsolutions.nl</a>
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Telefoonnummer
                </h4>
                <p>
                  <a href="tel:+316856283067">+31 6 85 62 83 06</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
