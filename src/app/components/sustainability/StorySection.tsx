import React from "react";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col font-['Poppins',sans-serif] font-black justify-center leading-[1.2] md:leading-[70px] not-italic relative shrink-0 text-[#003301] text-[36px] md:text-[64px] text-center w-full">
        <p className="mb-0">STORY OF A</p>
        <p>GREEN CUP</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Description">
      <div className="flex flex-col font-['Poppins',sans-serif] font-normal justify-center leading-[24px] md:leading-[33px] not-italic relative shrink-0 text-[14px] md:text-[20px] text-[rgba(0,0,0,0.61)] text-center w-full">
        <p className="mb-0">Discover the Sustainable Process, Thoughtful Design, and</p>
        <p>Purpose Behind Every Green Cup</p>
      </div>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1140px] relative shrink-0 w-full px-4" data-name="DescriptionContainer">
      <Description />
    </div>
  );
}

export function StorySection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center pb-[10px] pt-[80px] md:pt-[130px] px-0 relative size-full" data-name="StorySection">
      <Heading />
      <DescriptionContainer />
    </div>
  );
}
