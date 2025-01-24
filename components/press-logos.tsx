"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Icons
import {
  SiTypescript,
  SiStrapi,
  SiNextdotjs,
  SiGit,
  SiReact,
  SiDocker,
  SiTailwindcss,
  SiJavascript,
  SiStorybook,
  SiRedux,
  SiWebpack,
  SiMui,
  SiWordpress,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaSass } from "react-icons/fa";

// Swiper + Shadcn + your custom UI
import "swiper/css";
import "swiper/css/autoplay";
import BlurFade from "./ui/blur-fade";
// Import the tooltip components from Shadcn:
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export default function PressLogos() {
  // Create an array of icon + label pairs
  const icons = [
    { label: "React", icon: SiReact },
    { label: "TypeScript", icon: SiTypescript },
    { label: "Strapi", icon: SiStrapi },
    { label: "MUI", icon: SiMui },
    { label: "Next.js", icon: SiNextdotjs },
    { label: "Redux", icon: SiRedux },
    { label: "JavaScript", icon: SiJavascript },
    { label: "Webpack", icon: SiWebpack },
    { label: "Git", icon: SiGit },
    { label: "Docker", icon: SiDocker },
    { label: "Framer Motion", icon: TbBrandFramerMotion },
    { label: "Tailwind CSS", icon: SiTailwindcss },
    { label: "Sass", icon: FaSass },
    { label: "Storybook", icon: SiStorybook },
    { label: "WordPress", icon: SiWordpress },
  ];

  // Icon styling
  const iconProps = "text-5xl text-gray-500 hover:text-white transition-colors duration-200";

  const repeatedIcons = Array(8).fill(icons).flat();

  return (
    <section className="py-6 flex items-center justify-center bg-gray-900">
      <BlurFade delay={0.4} inView>
        <div className="w-screen flex justify-center items-center">
          <Swiper
            freeMode={true}
            modules={[Autoplay]}
            loop={true}
            speed={4000} // 8 seconds for a full "loop"
            slidesPerView="auto"
            loopAdditionalSlides={icons.length * 5}
            spaceBetween={62}
            centeredSlides={false}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="group">
            {/* Render each icon twice to ensure it overflows and can scroll */}
            {repeatedIcons.map(({ label, icon: Icon }, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="flex items-center justify-center">
                  {/* Wrap icon with tooltip */}
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Icon className={iconProps} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{label}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </BlurFade>
    </section>
  );
}
