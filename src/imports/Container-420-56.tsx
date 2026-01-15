import imgGreenWebm from "figma:asset/37ba68ec6f76400596febc99b9e894947a5ecd0d.png";

function GreenWebm() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="green.webm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[14.44%] max-w-none top-0 w-[71.11%]" src={imgGreenWebm} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-5px] pb-[8.39px] pt-0 px-0 relative shrink-0 w-[720px] z-[2]" data-name="Container">
      <GreenWebm />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Black',sans-serif] justify-center leading-[70px] not-italic relative shrink-0 text-[#003301] text-[64px] uppercase w-full whitespace-pre-wrap">
        <p className="mb-0">Raise Your Cup</p>
        <p className="mb-0">to a Greener</p>
        <p>World</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[720px] relative shrink-0 w-[562.98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <Heading />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[612px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap whitespace-pre">
          <p className="mb-0">Celebrate sustainability with every sip — our eco-conscious</p>
          <p className="mb-0">paper cups are crafted from responsibly sourced materials,</p>
          <p className="mb-0">designed to reduce waste, and made to support a healthier</p>
          <p>planet for generations to come.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.9)] max-w-[720px] mix-blend-multiply relative rounded-[20px] shrink-0 w-[664px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] p-[26px] relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_6px] border-[rgba(0,51,1,0.47)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start pl-[56px] pr-0 py-0 relative w-full">
        <Container1 />
        <OverlayBorderOverlayBlur />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-5px] relative shrink-0 w-[720px] z-[1]" data-name="Margin">
      <VerticalBorder />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="content-stretch flex isolate items-center pb-0 pl-0 pr-[5px] pt-[100px] relative size-full" data-name="Container">
      <Container />
      <Margin />
    </div>
  );
}