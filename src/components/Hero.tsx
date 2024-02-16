const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center justify-center pl-[800px]">
        {/* Mobile Image */}
        <div className="flex items-center justify-center">
          <img
            src="iphone.png"
            className="w-[400px] h-[750px] z-10 mx-auto max-w-[850px] absolute left-42"
            alt="Mobile"
          />
        </div>

        {/* Desktop Image */}
        <div className="relative md:block">
          <img
            src="laptop2.png"
            className="z-10 mx-auto max-w-[1200px] h-[600px] "
            alt="Desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
