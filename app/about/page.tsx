import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";

import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us | Andrade Custom Trim",
  description:
    "Learn about Victor and Michelle Andrade and our passion for premier custom trim, cabinetry, and architectural finish carpentry in Dallas & Fort Worth.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header / Hero Banner */}
      <PageHeader title="About Us" image="/images/header01.webp" />

      {/* About Us Section: Who We Are & Our Story */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
            {/* Left Column: Who We Are */}
            <div className="flex flex-col items-start text-left">
              <span className="text-[#FC6D15] font-bold text-sm sm:text-base tracking-wider uppercase mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6">
                Where <span className="text-[#FC6D15]">craftsmanship</span>
                <br />
                meets <span className="text-[#FC6D15]">passion</span>.
              </h2>
              <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                Welcome to{" "}
                <strong className="font-bold text-gray-900">
                  Andrade Custom Trim
                </strong>
                , where craftsmanship meets passion. We are Victor and Michelle
                Andrade, a husband-and-wife team dedicated to creating high-quality,
                custom carpentry that transforms your spaces and brings your
                visions to life.
              </p>
            </div>

            {/* Right Column: Our Story */}
            <div className="flex flex-col items-start text-left pt-2 lg:pt-7">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                What began as a shared dream of building beautiful, lasting
                pieces of craftsmanship has evolved into a full-fledged carpentry
                business that reflects our values and dedication. After years of
                working in the carpentry field, we decided to join forces and turn
                our skills and love for woodworking into a business that serves
                our local community. As a husband-and-wife team, we understand
                the importance of working together with trust and respect. Every
                project we take on is a true collaboration, and our shared passion
                for fine craftsmanship shines through in every detail. From the
                initial consultation to the final touch, we pour our hearts into
                our work and treat every project as if it were our own home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section with back03.webp Background */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/back03.webp"
          alt="Our Mission - Andrade Custom Trim"
          fill
          sizes="100vw"
          className="object-cover object-center -z-20"
        />

        {/* Soft, Light Frosted Overlay so carved wood texture subtly shows through with dark text */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is simple: to deliver top-quality craftsmanship with
            integrity, precision, and a personal touch. We strive to bring your
            ideas to life with custom woodwork that not only looks amazing but
            also stands the test of time. Every project we take on is built with
            care, ensuring it meets your needs and exceeds your expectations.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column: Heading, Intro & First 2 Features */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                  Why <span className="text-[#FC6D15]">Choose Us</span>?
                </h2>
                <p className="text-gray-600 text-base sm:text-[17px] leading-relaxed">
                  Choosing{" "}
                  <strong className="font-bold text-gray-900">
                    Andrade Custom Trim
                  </strong>{" "}
                  means choosing a business where quality and customer
                  satisfaction are at the forefront of everything we do.
                </p>
              </div>

              <div className="space-y-8 pt-2">
                {/* Expert Craftsmanship */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                      Expert Craftsmanship
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                      We&apos;re passionate about woodworking and take pride in
                      every detail, from seamless trim work to custom-built
                      cabinetry.
                    </p>
                  </div>
                </div>

                {/* Personalized Service */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                      Personalized Service
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                      No two homes are the same, and neither are our projects. We
                      listen to your vision and tailor our work to fit your style
                      and space.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Next 3 Features */}
            <div className="space-y-8 lg:space-y-10 lg:pt-2">
              {/* Quality Materials */}
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                    Quality Materials
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                    We use only high-quality materials to ensure durability,
                    beauty, and lasting value in every project.
                  </p>
                </div>
              </div>

              {/* Reliable & Professional */}
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                    Reliable & Professional
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                    We show up on time, communicate clearly, and respect your
                    home like it&apos;s our own.
                  </p>
                </div>
              </div>

              {/* Satisfaction Guaranteed */}
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 text-[#FC6D15] mt-1">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FC6D15]">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                    Your happiness is our priority. We&apos;re not satisfied
                    until you love the final result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
