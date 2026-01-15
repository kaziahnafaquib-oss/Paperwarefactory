import imgGreenStory2Webm from "figma:asset/533dd2aad6ce225021a18236714d9e88b999aae6.png";

function GreenStory2Webm() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="green_story2.webm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[29.19%] max-w-none top-0 w-[41.63%]" src={imgGreenStory2Webm} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.39px] pt-0 px-0 relative shrink-0 w-full z-[2]" data-name="Container">
      <GreenStory2Webm />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[54.48px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-right text-white whitespace-nowrap whitespace-pre">
        <p className="mb-0">Paper, plastic, packing material, printing</p>
        <p>plates, food grade ink are prepared.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[555px] relative shrink-0 z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25px] pt-[24.345px] px-[25px] relative">
        <Container1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full">
        <p className="leading-[39px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
        <Heading />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[35.91px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center px-[21px] py-px relative w-full">
          <Container2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[36.59px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-right text-white whitespace-nowrap whitespace-pre">
        <p className="mb-0">Die cutting machines cut large amounts of</p>
        <p>shapes in a short time frame.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="max-w-[555px] relative shrink-0 z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25px] pt-[24.345px] px-[25px] relative">
        <Container5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full">
        <p className="leading-[39px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[35.91px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container7 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex isolate items-center justify-end px-[21px] py-px relative w-full">
          <Container6 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[11.09px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-right text-white whitespace-nowrap whitespace-pre">
        <p className="mb-0">In the packing process, the cups are stacked</p>
        <p className="mb-0">together in definite numbers and wrapped by</p>
        <p>plastic bags.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="max-w-[555px] relative shrink-0 z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25px] pt-[24.185px] px-[25px] relative">
        <Container9 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full whitespace-nowrap">
        <p className="leading-[39px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[35.91px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container11 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center px-[21px] py-px relative w-full">
          <Container10 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <OverlayBorderOverlayBlur />
      <Margin />
      <Margin1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full">
        <p className="leading-[39px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[35.91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[0] not-italic pb-[0.31px] pt-0 px-0 relative shrink-0 text-[18px] text-white whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center mb-[-0.31px] relative shrink-0">
        <p className="leading-[29.7px] whitespace-pre">Flexo printing or offset printing techniques are</p>
      </div>
      <div className="flex flex-col justify-center mb-[-0.31px] relative shrink-0">
        <p className="leading-[29.7px] whitespace-pre">carefully applied to the prepared materials.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="max-w-[555px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] p-[25px] relative">
        <Paragraph />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[21px] py-px relative w-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full whitespace-nowrap">
        <p className="leading-[39px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[35.91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="max-w-[555px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25.035px] pl-[25px] pr-[44.83px] pt-[24.345px] relative">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap whitespace-pre">
          <p className="mb-0">Shapes are then fed into a forming machine</p>
          <p>that gets to transform them into paper cups.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[21px] py-px relative w-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full whitespace-nowrap">
        <p className="leading-[39px] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay5 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[35.91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="max-w-[555px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25.035px] pl-[25px] pr-[54.67px] pt-[24.345px] relative">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap whitespace-pre">
          <p className="mb-0">Free 1 month warehouse for stocking before</p>
          <p>cost-saving delivery.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur5() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[21px] py-px relative w-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur5 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Margin2 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex gap-[100px] items-start p-[10px] relative w-full">
        <Container13 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col isolate items-start p-[10px] relative w-full">
        <Container />
        <Container24 />
      </div>
    </div>
  );
}

export default function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start px-[335px] py-0 relative size-full" data-name="Container">
      <div className="absolute bg-gradient-to-b from-[rgba(83,197,23,0.01)] h-[1234.52px] left-0 mix-blend-multiply opacity-50 to-[rgba(83,197,23,0.96)] top-0 w-[1920px]" data-name="Gradient" />
      <Container25 />
    </div>
  );
}