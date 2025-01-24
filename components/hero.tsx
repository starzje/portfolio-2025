import Image from "next/image";

import Illustration from "@/public/images/hero-illustration.svg";
import MorphingText from "./utils/MorphingText";
import BlurFade from "@/components/ui/blur-fade";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
export default function Hero() {
  const texts = ["Ideas", "Vision", "Concepts", "Dreams"];

  return (
    <section className="relative overflow-hidden">
      {/* Top portion for the grid only */}
      <div className="absolute top-0 left-0 right-0 h-[400px] md:h-[520px]  z-10 pointer-events-auto [mask-image:linear-gradient(to_bottom,_white_70%,_transparent)]">
        <InteractiveGridPattern
          className=" w-full  h-full  pointer-events-none  opacity-30  [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          width={30}
          height={30}
          squares={[60, 60]}
          squaresClassName="pointer-events-auto hover:animate-colorShift"
        />
      </div>

      {/* Bg gradient behind everything */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" priority alt="Hero Illustration" />
      </div>

      {/* Hero content (text, CTA) below */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <BlurFade delay={0.1} inView>
              <h1 className="h1 text-5xl md:text-6xl font-uncut-sans mb-6" data-aos="zoom-out" data-aos-delay="100">
                Transforming
                <MorphingText texts={texts} /> into Reality
              </h1>
              <p className="text-xl text-gray-400 mb-10" data-aos="zoom-out" data-aos-delay="200">
                From concept to launch, I create responsive, user-friendly websites tailored to elevate your business.
              </p>
            </BlurFade>
            {/* CTA buttons */}
            <BlurFade delay={0.25 * 2} inView>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                data-aos="zoom-out"
                data-aos-delay="300">
                <div className="relative z-20">
                  <a
                    className="btn text-white bg-gradient-to-t from-blue-900 to-blue-700 hover:to-blue-800 rounded-lg w-full shadow-lg group"
                    href="#contact">
                    Contact me{" "}
                    <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gradient-to-t from-slate-900 to-slate-700 hover:to-slate-800 rounded-lg w-full shadow-lg "
                    href="#projects">
                    Featured projects
                  </a>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
