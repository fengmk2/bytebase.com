const Logos = () => {
  return (
    <div className="relative mt-[164px] 2xl:mt-36 lg:mt-[130px] md:mt-[94px] sm:mt-[76px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logos-caption.svg"
        alt="Built by engineers knowing database development flow"
        width={321}
        height={64}
        className="relative left-[55.5%] mb-6 2xl:left-[53.7%] lg:left-[58.2%] lg:mb-[18px] lg:h-[58px] lg:w-[283px] md:left-[59.4%] md:mb-3.5 sm:left-[40%] sm:!mb-1.5 sm:h-[42px] sm:w-[220px] xs:left-[33%] xs:mb-3"
      />
      <div className="logos lg:h-[76px] md:h-[72px] sm:h-14" />
    </div>
  );
};

export default Logos;