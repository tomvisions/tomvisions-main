const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                I&apos;m a Senior Software Developer/DevOps Engineer with a unique combination of skills, drive and experience. I have a passion for developing creative solutions that increase the efficiency of 
                business processes and operations. I also love web development, and designing business logic to enhance web applications. 
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                My aim is to bring value to whatever company I work for. I specialize in helping companies leverage technology to optimize their business through the use of automation and tools. 
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
