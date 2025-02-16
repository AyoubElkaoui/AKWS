"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Mapping of packages to services
const packageServicesMap: Record<string, string[]> = {
  "All-in Pakketten": ["Start Smart", "Pro Boost", "Full-Service Marketing"],
  "Website Pakketten": ["Starter Website", "Professional Website", "Enterprise Website"],
  "Hosting en Mailing": ["Webhosting Basis", "Webhosting Pro", "Zakelijke Mail"],
  "SEO en SEA Pakketten": ["SEO Start", "SEO Pro", "SEA Start", "SEA Pro"],
};

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [subject, setSubject] = useState("Aanvraag Offerte");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const searchParams = useSearchParams();
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
    const packageFromQuery = searchParams.get("package");
    const serviceFromQuery = searchParams.get("service");
    const subjectFromQuery = searchParams.get("subject");

    console.log("Package from URL:", packageFromQuery);
    console.log("Service from URL:", serviceFromQuery);
    console.log("Subject from URL:", subjectFromQuery);

    if (packageFromQuery) {
      setSelectedPackage(decodeURIComponent(packageFromQuery));
    }
    if (serviceFromQuery) {
      setSelectedService(decodeURIComponent(serviceFromQuery));
    }
    if (subjectFromQuery) {
      setSubject(decodeURIComponent(subjectFromQuery));
    }
  }, [searchParams]);

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

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackage(e.target.value);
    setSelectedService(""); // Reset service when package changes
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

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
      selectedPackage,
      selectedService,
      subject,
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
      recaptchaValue,
    };

    // Toon een loading toast en sla de ID op
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
        toast.update(toastId, {
          render: result.message,
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

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* ToastContainer voor de meldingen */}
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
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Stuur ons een bericht
              </h2>

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
                      placeholder="E-mailadres"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => validateEmail(email)}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                  </div>
                </div>

                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Onderwerp"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <div className="w-full lg:w-1/2">
                    <input
                      type="tel"
                      placeholder="Telefoonnummer"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => validatePhone(phone)}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    />
                    {phoneError && <p className="text-red-500">{phoneError}</p>}
                  </div>
                </div>

                <div className="mb-7.5 flex gap-7.5 ">
                  <div className="w-1/2">
                    <h2>Kies een pakket</h2>
                    <select
                      value={selectedPackage}
                      name="selectedPackage"
                      onChange={handlePackageChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 pt-1.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    >
                      <option value="">Selecteer een pakket</option>
                      <option value="All-in Pakketten">All-in Pakketten</option>
                      <option value="Website Pakketten">Website Pakketten</option>
                      <option value="Hosting en Mailing">Hosting &amp; Mailing</option>
                      <option value="SEO en SEA Pakketten">SEO/SEA Pakketten</option>
                    </select>
                  </div>

                  <div className="w-1/2">
                    <h2>Kies een dienst</h2>
                    <select
                      value={selectedService}
                      name="selectedService"
                      onChange={handleServiceChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 pt-1.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    >
                      <option value="">Selecteer een dienst</option>
                      {selectedPackage &&
                        packageServicesMap[selectedPackage]?.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="mb-12.5 flex">
                  <textarea
                    placeholder="Bericht"
                    name="message"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="mb-7.5">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} // Gebruik je Site Key
                    onChange={(value) => setRecaptchaValue(value)}
                  />
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between">
                  <button
                    type="submit"
                    aria-label="Verstuur bericht"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
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
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Neem contact op
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Locatie
                </h3>
                <p>Baarn, Nederland</p>
              </div>
              <div className="5 mb-7">
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
                  <a href="tel:+31685722387">+31 6 85 72 23 87</a>
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
