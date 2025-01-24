"use client";

import Image from "next/image";
import Illustration from "@/public/images/features-illustration.svg";
import { MagicCard } from "@/components/ui/magic-card";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import { ProjectCard } from "./ui/ProjectCard";
import { Ban, ExternalLinkIcon } from "lucide-react";
import { LineShadowText } from "./ui/line-shadow-text";
import BlurFade from "./ui/blur-fade";

export default function Features02() {
  return (
    <section className="relative">
      {/* Bg gradient */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Bg illustration */}
      <div className="absolute top-0 left-1/2 -z-10 ml-[390px]" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <BlurFade delay={0.1} inView>
              <h2 id="projects" className="h2 font-uncut-sans mb-4">
                <LineShadowText className="italic" shadowColor={"white "}>
                  Featured
                </LineShadowText>{" "}
                <LineShadowText className="italic" shadowColor={"white "}>
                  Projects
                </LineShadowText>
              </h2>
            </BlurFade>
            <div className="max-w-2xl mx-auto">
              <BlurFade delay={0.2} inView>
                <p className="text-xl text-gray-400">
                  A glimpse at the solutions I’ve crafted to solve real-world challenges.
                </p>
              </BlurFade>
            </div>
          </div>
          {/* Section content */}
          <div className="max-w-3xl mx-auto justify-center items-center gap-6 md:max-w-none flex flex-col flex-wrap md:flex-row md:justify-center ">
            {/* Content */}
            <BlurFade delay={0.3} direction="right" inView>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <MagicCard>
                  <ProjectCard
                    image="/images/dtc-anim.gif"
                    dates="Admin Dashboard"
                    description="Admin Dashboard for Herbalife. The dashboard allows users to manage their clients in monthly challenges and track their progress, with plenty of additional features. "
                    title="Do The Change Dashboard"
                    linkDisabled
                    disabledIcon={<div className="w-4 h-4" />}
                    tags={["NextJs", "TypeScript", "Redux", "MUI", "Amplify"]}
                  />
                </MagicCard>
              </NeonGradientCard>
            </BlurFade>

            <BlurFade delay={0.5} direction="left" inView>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <MagicCard>
                  <ProjectCard
                    image="/images/citalo.png"
                    dates="Blog"
                    description="Blog for Citalo Books, book reviewer. The blog is used to showcase their reviews and recommendations, where they can add new post themselves through strapi CMS."
                    link="https://citalo-books.com"
                    links={[
                      {
                        icon: <ExternalLinkIcon className="w-4 h-4" />,
                        type: "Visit Site",
                        href: "https://citalo-books.com",
                      },
                    ]}
                    href="https://citalo-books.com"
                    title="Citalo Books"
                    tags={["NextJs", "TypeScript", "TailwindCSS", "Strapi", "GraphQL"]}
                  />
                </MagicCard>
              </NeonGradientCard>
            </BlurFade>

            <BlurFade delay={0.7} direction="up" inView>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <MagicCard>
                  <ProjectCard
                    image="/images/fmi.png"
                    dates="Landing Page"
                    description="Landing page for Studio FMI, print and design studio. Used to showcase their work and services."
                    link="https://studio-fmi.hr"
                    links={[
                      {
                        icon: <ExternalLinkIcon className="w-4 h-4" />,
                        type: "Visit Site",
                        href: "https://studio-fmi.hr",
                      },
                    ]}
                    href="https://studio-fmi.hr"
                    title="Studio FMI"
                    tags={["NextJs", "TypeScript", "TailwindCSS"]}
                  />
                </MagicCard>
              </NeonGradientCard>
            </BlurFade>

            <BlurFade delay={0.9} direction="up" inView>
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <MagicCard>
                  <ProjectCard
                    image="/images/photobooth.png"
                    dates="Landing Page"
                    description="Landing page for Photobooth Zagreb, a photo booth rental service. Used to showcase their services and pricing."
                    link="https://photobooth-zagreb.com"
                    links={[
                      {
                        icon: <ExternalLinkIcon className="w-4 h-4" />,
                        type: "Visit Site",
                        href: "https://photobooth-zagreb.com",
                      },
                    ]}
                    href="https://photobooth-zagreb.com"
                    title="Photobooth Zagreb"
                    tags={["NextJs", "TypeScript", "TailwindCSS"]}
                  />
                </MagicCard>
              </NeonGradientCard>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
