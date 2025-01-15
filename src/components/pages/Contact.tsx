import React, {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { motion, useAnimation } from "framer-motion";

import SectionWrapper from "../../hoc/SectionWrapper";
import emailjs from "@emailjs/browser";

// import { SectionWrapper } from "../../hoc";

interface ContactData {
  name: string;
  mobile: string;
  company: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const controls = useAnimation();
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    mobile: "",
    company: "",
    email: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<boolean>(false);

  const isValidEmail = (email: string): boolean =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

  const isValidMobile = (mobileno: string): boolean =>
    /^[6-9]\d{9}$/.test(mobileno);

  const validateField = (field: string, value: string): string => {
    if (!value.length) {
      return "All fields are required.";
    }

    if (field === "email" && !isValidEmail(value)) {
      return "Invalid Email.";
    } else if (field === "mobile" && !isValidMobile(value)) {
      return "Invalid Mobile Number.";
    }

    return "";
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    const fieldError = validateField(name, value);
    setErrorMsg(fieldError);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: name === "mobile" ? value.replace(/\D/g, "") : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (
      !contactData.name ||
      !contactData.mobile ||
      !contactData.email ||
      !contactData.company ||
      !contactData.message
    ) {
      setSuccessMsg(false);
      setErrorMsg("All fields are required.");
      return;
    }

    emailjs
      .sendForm(
        "gmail", // Replace with your email service ID
        "template_vokodvy", // Replace with your email template ID
        e.currentTarget as HTMLFormElement,
        "user_NfCHed56Sv9ulz3iaOgCq" // Replace with your public API key
      )
      .then(
        () => {
          setSuccessMsg(true);
          setErrorMsg("");
        },
        (error) => {
          console.error(error.text);
          setSuccessMsg(false);
        }
      );
  };

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className=" flex flex-col m-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8]"
      >
        <h3 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px]">
          Contact
        </h3>

        {!successMsg ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
              <div className="text-center p-3 text-red-600 border border-red-500 rounded-md">
                {errorMsg}
              </div>
            )}

            <div>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={contactData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <input
                name="mobile"
                type="text"
                placeholder="Mobile"
                value={contactData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <input
                name="company"
                type="text"
                placeholder="Company"
                value={contactData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={contactData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={contactData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600">
            <p>Thank you for your message. We will contact you soon.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
