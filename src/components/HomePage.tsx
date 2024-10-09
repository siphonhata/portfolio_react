import React from "react";


export const HomePage = () => {
  return (
    <header className="container mx-auto h-screen flex items-center justify-center bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Header */}
        <div className="relative flex items-center">
          <div className="absolute inset-0 z-0 bg-secondary clip-path-shape"></div>
          <div className="w-2/3 rounded-lg bg-black overflow-hidden">
            <img src="https://sipho-portfolio-app1.web.app/img/pic.png" />
          </div>
        </div>
        {/* Right Header */}
        <div className="flex flex-col justify-center px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I'm <span className="text-secondary">Sipho</span> Ndlalane.
          </h1>
          <p className="my-4 leading-relaxed">
            I am a proactive individual that is intrigued by the world of
            software and embedded systems development and am looking forward to
            acquiring experience and broadening my knowledge in industries that
            offer these or related opportunities. I am eager to be challenged in
            order to grow and further improve my IT skills.
          </p>
          <p className="leading-relaxed">
            My greatest passion in life is using my technical skills to benefit
            other people and organizations. I am however open to tackling new
            challenges and working with new technologies including new
            languages, tools and frameworks.
          </p>
          <div className="mt-6">
            <a
              href="sipho-ndlalane-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-accent text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition duration-300"
            >
              <span className="mr-2">Download CV</span>
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
