"use client";

import { useState } from "react";
import Illustration2 from "@/public/images/features-illustration.svg";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import Illustration from "@/public/images/glow-top.svg";
import Particles from "./ui/particles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import emailjs from "emailjs-com";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { Meteors } from "./ui/meteors";
import ParticleContact from "./ParticleContact";
import { LineShadowText } from "./ui/line-shadow-text";
import BlurFade from "./ui/blur-fade";

// Yup schema
const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Please enter a valid email"),
  name: yup.string().required("Name is required"),
  question: yup.string().required("Your question is required"),
  phone: yup
    .string()
    .nullable()
    .matches(/^(?:\+?[0-9]+)?$/, "Phone number must be a number with optional '+' at the start "),
});

export default function Contact() {
  const [tab, setTab] = useState<number>(1);

  const {
    control,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      name: "",
      question: "",
      phone: "",
    },
  });

  const onSubmit = async (data: any) => {
    const serviceId = "service_ge5jyej";
    const templateId = "template_ngfqrlm";
    const userId = "GiCXUjozzVj_odgQA";

    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      user_phone: data.phone,
      user_question: data.question,
    };

    try {
      const sendEmail = emailjs.send(serviceId, templateId, templateParams, userId);
      await toast.promise(sendEmail, {
        loading: "Sending email..",
        success: "Email sent successfully! I'll get back to you as soon as possible.",
        error: "Something went wrong. Please try again later.",
      });

      // Reset form only after email is successfully sent
      reset({
        email: "",
        name: "",
        question: "",
        phone: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <Meteors number={15} />
        <Particles className="absolute inset-0 z-0" staticity={50} quantity={100} ease={40} color={"#fff"} refresh />
        {/* Illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden opacity-10 md:opacity-50"
          aria-hidden="true">
          <div className="absolute rotate-180 left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
          </div>
        </div>

        {/* <div className="block absolute top-0 right-1/4 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <Image src={Illustration2} className="max-w-none" width={618} height={468} alt="Pricing Illustration" />
        </div> */}
        {/* <div className="block absolute top-0 right-0 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <Image src={Illustration2} className="max-w-none" width={618} height={468} alt="Pricing Illustration" />
        </div> */}
        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <BlurFade delay={0.1} inView>
              <h2 id="contact" className="h2 font-uncut-sans mb-4">
                <LineShadowText className="italic" shadowColor={"white "}>
                  Let’s
                </LineShadowText>{" "}
                <LineShadowText className="italic" shadowColor={"white "}>
                  Work
                </LineShadowText>{" "}
                <LineShadowText className="italic" shadowColor={"white "}>
                  Together
                </LineShadowText>
              </h2>
            </BlurFade>
            <div className="max-w-2xl mx-auto">
              <BlurFade delay={0.2} inView>
                <p className="text-xl text-gray-400">
                  Have a question or a project in mind? Drop me a message, and I’ll get back to you as soon as possible.
                </p>
              </BlurFade>
            </div>
          </div>
          <div>
            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center" data-aos="fade-down">
                {/* Content #1 */}
                <BlurFade delay={0.2} direction="up" inView>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                          Email <span className="text-rose-500">*</span>
                        </label>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              placeholder="john-doe@gmail.com"
                              className="form-input py-2 w-full 
                            
                            focus:border-purple-400 border-gray-700 rounded-lg  placeholder-gray-400 bg-gray-900"
                              type="email"
                            />
                          )}
                        />
                        <>
                          {errors.email ? (
                            <span className="text-red-500 text-sm">{String(errors.email.message)} </span>
                          ) : undefined}
                        </>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Name <span className="text-rose-500">*</span>
                        </label>
                        <Controller
                          name="name"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              placeholder="John Doe"
                              className="form-input rounded-lg focus:border-purple-400 border-gray-700  py-2 w-full placeholder-gray-400 bg-gray-900"
                              type="text"
                            />
                          )}
                        />
                        <>
                          {errors.name ? (
                            <span className="text-red-500 text-sm">{String(errors.name.message)} </span>
                          ) : undefined}
                        </>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="phone">
                          Phone number
                        </label>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field: { onChange, value, ref } }) => (
                            <input
                              placeholder="+385 99 123 4567"
                              className="form-input rounded-lg focus:border-purple-400 border-gray-700  py-2 w-full placeholder-gray-400 bg-gray-900"
                              type="tel"
                              ref={ref}
                              value={value || ""}
                              onChange={(e) => {
                                // Allow only numbers and optional '+' at the start
                                const filteredValue = e.target.value.replace(/[^0-9+]|(?!^)\+/g, "");
                                onChange(filteredValue);
                              }}
                            />
                          )}
                        />
                        <>
                          {errors.phone ? (
                            <span className="text-red-500 text-sm">{String(errors.phone.message)} </span>
                          ) : undefined}
                        </>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="question">
                          Your question <span className="text-rose-500">*</span>
                        </label>
                        <Controller
                          name="question"
                          control={control}
                          render={({ field }) => (
                            <textarea
                              {...field}
                              placeholder="What can I help you with?"
                              className="form-textarea rounded-lg focus:border-purple-400 border-gray-700  py-2 w-full placeholder-gray-400 bg-gray-900"
                              rows={4}
                            />
                          )}
                        />
                        <>
                          {errors.question ? (
                            <span className="text-red-500 text-sm">{String(errors.question.message)} </span>
                          ) : undefined}
                        </>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        disabled={isSubmitting}
                        className="btn text-gray-300 transition-all duration-300 bg-gradient-to-t from-gray-900 to-gray-800 hover:to-gray-900 w-full shadow-lg group">
                        Send
                        <span className="tracking-normal text-gray-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </button>
                    </div>
                  </form>
                </BlurFade>
              </div>

              {/* Image */}
              <div className="hidden md:inline-block md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div className="relative py-24 mt-12">
                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={8} staticity={30} />

                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48 flex justify-center items-center">
                      {/* Halo effect */}
                      <svg
                        className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                        width="480"
                        height="480"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="76.382%" stopColor="#FAF5FF" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path
                            className="pulse"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-1"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                          <path
                            className="pulse pulse-2"
                            fill="url(#pulse-a)"
                            fillRule="evenodd"
                            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                          />
                        </g>
                      </svg>
                      {/* Grid */}
                      <div className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                        <div className="h-[200%] animate-endless">
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" />
                        </div>
                      </div>
                      {/* Icons */}
                      <Transition
                        show={tab === 1}
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]">
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg
                            className="relative fill-slate-200"
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="25">
                            <path
                              fillRule="nonzero"
                              d="M10.55 15.91H.442L14.153.826 12.856 9.91h10.107L9.253 24.991l1.297-9.082Zm.702-8.919L4.963 13.91h7.893l-.703 4.918 6.289-6.918H10.55l.702-4.918Z"
                            />
                          </svg>
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 2}
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]">
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg
                            className="relative fill-slate-200"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22">
                            <path d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z" />
                          </svg>
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 3}
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]">
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg
                            className="relative fill-slate-200"
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="14">
                            <path fillRule="nonzero" d="m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z" />
                          </svg>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
}
