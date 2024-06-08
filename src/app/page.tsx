"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaDownload } from "react-icons/fa6";

const Home: React.FC = () => {
  const onButtonClick = () => {
    const pdfUrl = "/assets/cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cv_rifky_azmi.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hello i&apos;m <br />{" "}
              <span className="text-accent">Rifky Azmi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => {
                  onButtonClick();
                }}
              >
                <span>Download CV</span>
                <FaDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
