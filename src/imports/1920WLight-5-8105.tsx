import svgPaths from "./svg-trxcqx4y8e";
import imgImage from "figma:asset/6ee2b33fe301d48bddee3afebaf0f75a65d9e6da.png";
import imgSustainability1Mp4 from "figma:asset/c929c34c288d85c7fec9d8b80c3d3518aaea6da0.png";
import imgBackground from "figma:asset/4259f0dde7b4db4b4984aceef96dcd7e80948f27.png";
import imgEarth3DWebm from "figma:asset/d259b5fdc9662c5bae9bd0310d27c34b787e68b7.png";
import imgGreenWebm from "figma:asset/37ba68ec6f76400596febc99b9e894947a5ecd0d.png";
import imgGreenStory2Webm from "figma:asset/533dd2aad6ce225021a18236714d9e88b999aae6.png";
import imgPaperwareFactoryLogo from "figma:asset/9c1a10633073dad17a4949b28b9328b63b0036c3.png";

function Header() {
  return <div className="absolute h-[100px] left-0 right-0 top-0" data-name="Header" />;
}

function Image() {
  return (
    <div className="absolute h-[1200px] left-0 top-[53.59px] w-[1920px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.69%] left-0 max-w-none top-[-3.34%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function Sustainability1Mp() {
  return (
    <div className="absolute h-[1200px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="sustainability-1.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-23.32%] max-w-none top-0 w-[146.64%]" src={imgSustainability1Mp4} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[1200px] left-[-240px] overflow-clip top-0 w-[1920px]" data-name="Container">
      <Sustainability1Mp />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Black',sans-serif] justify-center leading-[100px] not-italic relative shrink-0 text-[#f6f6f6] text-[110px] uppercase w-full">
        <p className="mb-0">Sustainability</p>
        <p>in A Cup</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="mb-0">We deliver high-quality, eco-friendly packaging solutions driven by</p>
        <p className="mb-0">strict quality standards and a deep-rooted commitment to</p>
        <p className="mb-0">sustainability. By using premium materials, minimizing waste, and</p>
        <p className="mb-0">maintaining responsible production practices, we aim to create</p>
        <p className="mb-0">packaging that not only performs flawlessly but also contributes to a</p>
        <p>cleaner, greener planet.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] relative shrink-0 w-[720px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pb-[50px] pt-[100px] px-0 relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1440px] px-0 py-[316px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container3 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-repeat bg-size-[2816.170140028px_1199.9999690055847px] bg-top-left content-stretch flex flex-col items-start left-0 min-h-[1200px] px-[240px] py-0 right-0 top-0" data-name="Background" style={{ backgroundImage: `url('${imgBackground}')` }}>
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-[664px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Black',sans-serif] justify-center leading-[70px] not-italic relative shrink-0 text-[#003301] text-[64px] text-nowrap text-right">
          <p className="mb-0">JOURNEY TO</p>
          <p className="mb-0">SAVE THE</p>
          <p>ENVIRONMENT</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[612px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative w-full">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-nowrap text-right text-white">
          <p className="mb-0">Our journey to save the environment is rooted in</p>
          <p className="mb-0">responsibility — we craft paperware with sustainably</p>
          <p className="mb-0">harvested materials, eco-conscious processes, and a</p>
          <p className="mb-0">passion for reducing waste, so that every product we make</p>
          <p className="mb-0">supports a cleaner planet and a brighter, more resilient</p>
          <p>future.</p>
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
        <Container5 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_6px_0px_0px] border-[rgba(0,51,1,0.47)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-0 pr-[56px] py-0 relative w-full">
          <Heading1 />
          <OverlayBorderOverlayBlur />
        </div>
      </div>
    </div>
  );
}

function Earth3DWebm() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="earth3d.webm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[14.44%] max-w-none top-0 w-[71.11%]" src={imgEarth3DWebm} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.39px] pt-0 px-0 relative shrink-0 w-[720px]" data-name="Container">
      <Earth3DWebm />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex items-center left-[240px] max-w-[1440px] pb-0 pt-[100px] px-0 right-[240px] top-[1200px]" data-name="Container">
      <VerticalBorder />
      <Container6 />
    </div>
  );
}

function GreenWebm() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="green.webm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[14.44%] max-w-none top-0 w-[71.11%]" src={imgGreenWebm} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-5px] pb-[8.39px] pt-0 px-0 relative shrink-0 w-[720px] z-[2]" data-name="Container">
      <GreenWebm />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Black',sans-serif] justify-center leading-[70px] not-italic relative shrink-0 text-[#003301] text-[64px] uppercase w-full">
        <p className="mb-0">Raise Your Cup</p>
        <p className="mb-0">to a Greener</p>
        <p>World</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="max-w-[720px] relative shrink-0 w-[562.98px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative w-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[612px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
          <p className="mb-0">Celebrate sustainability with every sip — our eco-conscious</p>
          <p className="mb-0">paper cups are crafted from responsibly sourced materials,</p>
          <p className="mb-0">designed to reduce waste, and made to support a healthier</p>
          <p>planet for generations to come.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.9)] max-w-[720px] mix-blend-multiply relative rounded-[20px] shrink-0 w-[664px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] p-[26px] relative w-full">
        <Container10 />
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_6px] border-[rgba(0,51,1,0.47)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-[56px] pr-0 py-0 relative w-full">
          <Container9 />
          <OverlayBorderOverlayBlur1 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-5px] relative shrink-0 w-[720px] z-[1]" data-name="Margin">
      <VerticalBorder1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex isolate items-center left-[240px] max-w-[1440px] pb-0 pl-0 pr-[5px] pt-[100px] right-[240px] top-[1820.39px]" data-name="Container">
      <Container8 />
      <Margin />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Black',sans-serif] justify-center leading-[70px] not-italic relative shrink-0 text-[#003301] text-[64px] text-center w-full">
        <p className="mb-0">STORY OF A</p>
        <p>GREEN CUP</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.61)] text-center w-full">
        <p className="mb-0">Discover the Sustainable Process, Thoughtful Design, and</p>
        <p>Purpose Behind Every Green Cup</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1140px] relative shrink-0 w-[570px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[390px] pb-[10px] pt-[130px] px-0 right-[390px] top-[2440.78px]" data-name="Container">
      <Heading3 />
      <Container13 />
    </div>
  );
}

function GreenStory2Webm() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="green_story2.webm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[29.19%] max-w-none top-0 w-[41.63%]" src={imgGreenStory2Webm} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8.39px] pt-0 px-0 relative shrink-0 w-full z-[2]" data-name="Container">
      <GreenStory2Webm />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[54.48px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-nowrap text-right text-white">
        <p className="mb-0">Paper, plastic, packing material, printing</p>
        <p>plates, food grade ink are prepared.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="max-w-[555px] relative shrink-0 z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25px] pt-[24.345px] px-[25px] relative">
        <Container16 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full">
        <p className="leading-[39px]">1</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <Heading4 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[35.91px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container18 />
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
          <Container17 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[36.59px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-nowrap text-right text-white">
        <p className="mb-0">Die cutting machines cut large amounts of</p>
        <p>shapes in a short time frame.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="max-w-[555px] relative shrink-0 z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25px] pt-[24.345px] px-[25px] relative">
        <Container20 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full">
        <p className="leading-[39px]">3</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[35.91px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container22 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex isolate items-center justify-end px-[21px] py-px relative w-full">
          <Container21 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[11.09px] pr-0 py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-nowrap text-right text-white">
        <p className="mb-0">In the packing process, the cups are stacked</p>
        <p className="mb-0">together in definite numbers and wrapped by</p>
        <p>plastic bags.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="max-w-[555px] relative shrink-0 z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25px] pt-[24.185px] px-[25px] relative">
        <Container24 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center text-nowrap w-full">
        <p className="leading-[39px]">5</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[35.91px] z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container26 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center px-[21px] py-px relative w-full">
          <Container25 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur2 />
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center w-full">
        <p className="leading-[39px]">2</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <Heading7 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-[35.91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container29 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[0] not-italic pb-[0.31px] pt-0 px-0 relative shrink-0 text-[18px] text-nowrap text-white" data-name="Paragraph">
      <div className="flex flex-col justify-center mb-[-0.31px] relative shrink-0">
        <p className="leading-[29.7px] text-nowrap">Flexo printing or offset printing techniques are</p>
      </div>
      <div className="flex flex-col justify-center mb-[-0.31px] relative shrink-0">
        <p className="leading-[29.7px] text-nowrap">carefully applied to the prepared materials.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="max-w-[555px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] p-[25px] relative">
        <Paragraph />
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
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur5 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center text-nowrap w-full">
        <p className="leading-[39px]">4</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <Heading8 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[35.91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="max-w-[555px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25.035px] pl-[25px] pr-[44.83px] pt-[24.345px] relative">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
          <p className="mb-0">Shapes are then fed into a forming machine</p>
          <p>that gets to transform them into paper cups.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur6() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[21px] py-px relative w-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur6 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21501f] text-[30px] text-center text-nowrap w-full">
        <p className="leading-[39px]">6</p>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(246,246,246,0.62)] relative rounded-[200px] shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[5px] relative w-full">
          <Heading9 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[35.90999984741211px] relative shrink-0 w-[30px]" data-name="Container">
      <Overlay5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[35.91px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative w-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="max-w-[555px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[25.035px] pl-[25px] pr-[54.67px] pt-[24.345px] relative">
        <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[29.7px] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
          <p className="mb-0">Free 1 month warehouse for stocking before</p>
          <p>cost-saving delivery.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur7() {
  return (
    <div className="backdrop-blur-[3.55px] backdrop-filter bg-[rgba(0,51,1,0.83)] mix-blend-multiply relative rounded-[20px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[21px] py-px relative w-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[100px] px-0 relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur7 />
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Margin3 />
      <Margin4 />
      <Margin5 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[100px] items-start p-[10px] relative w-full">
          <Container28 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col isolate items-start p-[10px] relative w-full">
          <Container15 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[335px] py-0 right-0 top-[2756.78px]" data-name="Container">
      <div className="absolute bg-gradient-to-b from-[rgba(83,197,23,0.01)] h-[1234.52px] left-0 mix-blend-multiply opacity-50 to-[rgba(83,197,23,0.96)] top-0 w-[1920px]" data-name="Gradient" />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[160px] left-0 right-0 top-[3991.29px]" data-name="Container">
      <div className="absolute bg-[rgba(83,197,23,0.96)] h-[160px] left-0 mix-blend-multiply opacity-50 top-0 w-[1920px]" data-name="Background" />
    </div>
  );
}

function MainArticle() {
  return (
    <div className="h-[4151.3px] relative shrink-0 w-full" data-name="Main → Article">
      <Image />
      <Background />
      <Container7 />
      <Container11 />
      <Container14 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <MainArticle />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 max-w-[1920px] right-0 top-[-53.59px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.396 126.539">
        <g id="Group">
          <path d={svgPaths.p36b90e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14fb0f00} fill="var(--fill-0, #1F2124)" id="Vector_2" />
          <path d={svgPaths.p39df6d00} fill="var(--fill-0, #1A121A)" id="Vector_3" />
          <path d={svgPaths.p5c96900} fill="var(--fill-0, #1A121A)" id="Vector_4" />
          <path d={svgPaths.p50d5500} fill="var(--fill-0, #1A121A)" id="Vector_5" />
          <path d={svgPaths.p131aa340} fill="var(--fill-0, #1A121A)" id="Vector_6" />
          <path d={svgPaths.p3a0e2b00} fill="var(--fill-0, #1A121A)" id="Vector_7" />
          <path d={svgPaths.p3b114300} fill="var(--fill-0, #1A121A)" id="Vector_8" />
          <path d={svgPaths.p14acf860} fill="var(--fill-0, #1A121A)" id="Vector_9" />
          <path d={svgPaths.p2a96daf0} fill="var(--fill-0, #1A121A)" id="Vector_10" />
          <path d={svgPaths.p1534a00} fill="var(--fill-0, #1A121A)" id="Vector_11" />
          <path d={svgPaths.p1a6e800} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p5ad3d00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p140c0000} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p359b5500} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p3f226300} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p1c784500} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p8da9380} fill="var(--fill-0, white)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[126.54px] overflow-clip relative shrink-0 w-[133.39px]" data-name="Component 1">
      <Layer />
    </div>
  );
}

function Asset2SvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[126.53px] items-center justify-center overflow-clip relative shrink-0 w-[133.39px]" data-name="Asset-2.svg fill">
      <Component />
    </div>
  );
}

function PaperwareFactoryPrimaryBgLogo() {
  return (
    <div className="aspect-[133.39/126.53] content-stretch flex items-start max-w-[460px] overflow-clip relative shrink-0" data-name="Paperware Factory Primary BG Logo">
      <Asset2SvgFill />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[163.3px] pr-[163.31px] py-0 relative shrink-0 w-[460px]" data-name="Container">
      <PaperwareFactoryPrimaryBgLogo />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[18.2px]">Quick Link</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[16px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <a className="basis-0 content-stretch cursor-pointer flex grow items-center min-h-px min-w-px p-0 relative shrink-0" data-name="Link" href="https://paperwarefactory.com/">
      <Container46 />
    </a>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Link />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[16px]">About Us</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <a className="basis-0 content-stretch cursor-pointer flex grow items-center min-h-px min-w-px p-0 relative shrink-0" data-name="Link" href="https://paperwarefactory.com/">
      <Container47 />
    </a>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Link1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[16px]">Papercups</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <a className="basis-0 content-stretch cursor-pointer flex grow items-center min-h-px min-w-px p-0 relative shrink-0" data-name="Link" href="https://paperwarefactory.com/">
      <Container48 />
    </a>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Link2 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[16px]">Sustainability</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <a className="basis-0 content-stretch cursor-pointer flex grow items-center min-h-px min-w-px p-0 relative shrink-0" data-name="Link" href="https://paperwarefactory.com/">
      <Container49 />
    </a>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Link3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <a className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://paperwarefactory.com/">
        <p className="cursor-pointer leading-[26.4px] text-[16px]">Contact</p>
      </a>
    </div>
  );
}

function Link4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Link">
      <Container50 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Link4 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[16px]" role="link" tabIndex="0">
          Privacy Policy
        </p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <a className="basis-0 content-stretch cursor-pointer flex grow items-center min-h-px min-w-px p-0 relative shrink-0" data-name="Link" href="https://paperwarefactory.com/">
      <Container51 />
    </a>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Link5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Component1 />
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
      <Component13 />
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19.01px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Heading10 />
      <List />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[18.2px]">Popular Products</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[26.4px] text-[16px]" role="link" tabIndex="0">
          Paper Cup
        </p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <a className="basis-0 content-stretch cursor-pointer flex grow items-center min-h-px min-w-px p-0 relative shrink-0" data-name="Link" href="https://paperwarefactory.com/">
      <Container53 />
    </a>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Link6 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Carry Bag</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Box</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Hangtag</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Brochure</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Envelope</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 2">
      <Container58 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19.01px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Heading11 />
      <List1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[20px] items-start pl-0 pr-[30px] py-0 relative size-full">
          <Container52 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[18.2px]">Get In Touch</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[0.585px] pl-[5px] pr-[48.37px] pt-0 top-[-0.81px]" data-name="Container">
      <div className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="mb-0">Head Office: 7813 Trimohoni Nandipara Main</p>
        <p>Road, Trimohoni, Dhaka .</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p257b3400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component20 />
    </div>
  );
}

function ItemLink() {
  return (
    <a className="block cursor-pointer h-[52.78px] relative shrink-0 w-full" data-name="Item → Link" href="https://maps.app.goo.gl/as9qxPHfyk5QacXVA">
      <Container61 />
      <Container62 />
    </a>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[0.585px] pl-[5px] pr-[30.73px] pt-0 top-[-0.81px]" data-name="Container">
      <div className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="mb-0">Factory Office: 7814 Trimohoni Nandipara Main</p>
        <p>Road, Trimohoni, Dhaka .</p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p257b3400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component21 />
    </div>
  );
}

function ItemLink1() {
  return (
    <a className="block cursor-pointer h-[52.78px] relative shrink-0 w-full" data-name="Item → Link" href="https://maps.app.goo.gl/as9qxPHfyk5QacXVA">
      <Container63 />
      <Container64 />
    </a>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[0.585px] pl-[5px] pr-[40.55px] pt-0 top-[-0.81px]" data-name="Container">
      <div className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="mb-0">Display Centre: 65 Begum bazar, Agrani Bank</p>
        <p>Lane, Dhaka-1100</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p257b3400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component22 />
    </div>
  );
}

function ItemLink2() {
  return (
    <a className="block cursor-pointer h-[52.78px] relative shrink-0 w-full" data-name="Item → Link" href="https://maps.app.goo.gl/kR1FWC3eYnCLTVGF9">
      <Container65 />
      <Container66 />
    </a>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pl-[5px] pr-0 py-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Factory working hour: 24/7</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p3d3df900} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component23 />
    </div>
  );
}

function Item() {
  return (
    <div className="h-[26.39px] relative shrink-0 w-full" data-name="Item">
      <Container67 />
      <Container68 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <Item />
    </div>
  );
}

function Container69() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20.01px] items-start pl-0 pr-[30px] py-0 relative size-full">
          <Heading12 />
          <List2 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[10px] relative w-full">
          <Container45 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Container60 />
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Container69 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.p16fe6080} fill="var(--fill-0, #FABF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 3" href="https://www.facebook.com/paperwarefactory">
      <Component24 />
    </a>
  );
}

function Component25() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.pe955f00} fill="var(--fill-0, #FABF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component26() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 3" href="https://www.instagram.com/paperware_factory">
      <Component25 />
    </a>
  );
}

function Component27() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.p1e01f810} fill="var(--fill-0, #FABF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component28() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 3" href="https://www.linkedin.com/company/paperwarefactory/">
      <Component27 />
    </a>
  );
}

function Component29() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.p5f1f000} fill="var(--fill-0, #FABF37)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component30() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 3" href="https://www.youtube.com/@paperwarefactory5808">
      <Component29 />
    </a>
  );
}

function List3() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <Component2 />
      <Component26 />
      <Component28 />
      <Component30 />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[30px] py-0 relative w-full">
          <List3 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[26.4px]">Made in Bangladesh</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="List → Item">
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[30px] py-0 relative w-full">
          <ListItem />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[19px] items-start p-[10px] relative w-full">
          <Container71 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container74 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#fabf37] content-stretch flex flex-col items-start left-0 pb-[20px] pt-[120px] px-[240px] right-0 top-[45.39px]" data-name="Background">
      <Container75 />
    </div>
  );
}

function StrongLink() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Strong → Link">
      <a className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap" href="https://definedsolution.com/">
        <p className="cursor-pointer leading-[19.8px]">{`Defined Solution `}</p>
      </a>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative w-full">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap">
          <p className="leading-[19.8px]">{`Copyright © 2025 — Paperware Factory. All Rights Reserved । Design & Developed by `}</p>
        </div>
        <StrongLink />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-[#fabf37] content-stretch flex flex-col items-start left-0 pb-[10px] pt-[10.5px] px-[390px] right-0 top-[616.72px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.49)] border-solid inset-0 pointer-events-none" />
      <Container76 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-full">
        <p className="leading-[39px]">Newsletter</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <Heading13 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[26.4px]">Be the first to unwrap eco-friendly ideas — straight to your inbox.</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[30px] pb-px pt-0 px-0 right-[770px] top-[30px]" data-name="Container">
      <Container77 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 overflow-clip px-0 py-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black w-full">
        <p className="leading-[normal]">Email</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-[#fabf37] grow h-[59px] min-h-[59px] min-w-px relative rounded-bl-[15px] rounded-tl-[15px] shrink-0" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[20px] py-[16px] relative size-full">
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-center flex flex-wrap h-[59px] items-center justify-center min-h-px relative shrink-0 w-full" data-name="Container">
      <Input />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[11px] pb-[10px] pt-0 px-0 relative self-stretch shrink-0 w-[400px]" data-name="Margin">
      <Container82 />
    </div>
  );
}

function Component31() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p2d457400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Component31 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container83 />
    </div>
  );
}

function Component3() {
  return (
    <div className="basis-0 bg-[#fabf37] content-stretch flex flex-col grow items-start min-h-[59px] min-w-px px-0 py-[20.5px] relative rounded-br-[15px] rounded-tr-[15px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Component 4">
      <Container84 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-end flex flex-wrap h-[59px] items-end justify-center min-h-px relative shrink-0 w-full" data-name="Container">
      <Component3 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[11px] pb-[10px] pt-0 px-0 relative self-stretch shrink-0 w-[100px]" data-name="Margin">
      <Container85 />
    </div>
  );
}

function FormNewForm() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start justify-center relative shrink-0 w-full" data-name="Form - New Form">
      <Margin6 />
      <Margin7 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] relative shrink-0 w-[500px]" data-name="Container">
      <FormNewForm />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col items-end justify-end left-[770px] right-[30px] top-[33.19px]" data-name="Container">
      <Container86 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-black h-[125.39px] relative rounded-[20px] shrink-0 w-full" data-name="Background">
      <Container80 />
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[240px] max-w-[1440px] right-[240px] top-0" data-name="Container">
      <Background2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[657.52px] left-0 right-0 top-[3997.7px]" data-name="Footer">
      <Background1 />
      <BackgroundHorizontalBorder />
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[4655.22px] min-h-[1200px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <Container44 />
      <Footer />
    </div>
  );
}

function PaperwareFactoryLogo() {
  return (
    <div className="max-w-[60px] relative shrink-0 size-[60px]" data-name="Paperware Factory Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPaperwareFactoryLogo} />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Link">
      <PaperwareFactoryLogo />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Link7 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[112.8px]" data-name="Container">
      <Container90 />
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-[0.68px] pt-0 px-[15px] relative shrink-0" data-name="Component 6">
      <a className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://paperwarefactory.com/">
        <p className="cursor-pointer leading-[29.7px] text-[18px]">Home</p>
      </a>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Component 5">
      <Component5 />
    </div>
  );
}

function Component32() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-[0.68px] pt-0 px-[15px] relative shrink-0" data-name="Component 6">
      <a className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://paperwarefactory.com/">
        <p className="cursor-pointer leading-[29.7px] text-[18px]">About Us</p>
      </a>
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Component 5">
      <Component32 />
    </div>
  );
}

function Component34() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-[0.68px] pt-0 px-[15px] relative shrink-0" data-name="Component 6">
      <a className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://paperwarefactory.com/">
        <p className="cursor-pointer leading-[29.7px] text-[18px]">Clients</p>
      </a>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Component 5">
      <Component34 />
    </div>
  );
}

function Component36() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-[0.68px] pt-0 px-[15px] relative shrink-0" data-name="Component 6">
      <a className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://paperwarefactory.com/">
        <p className="cursor-pointer leading-[29.7px] text-[18px]">Papercups</p>
      </a>
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Component 5">
      <Component36 />
    </div>
  );
}

function Component6() {
  return (
    <div className="relative size-[11px]" data-name="Component 7">
      <div className="absolute inset-[0_-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0014 11">
          <g id="Component 5">
            <path d={svgPaths.p2528800} fill="var(--fill-0, #101010)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4.14px] pt-[3px] px-[6px] relative shrink-0" data-name="Margin">
      <Container92 />
    </div>
  );
}

function Component38() {
  return (
    <a className="basis-0 content-stretch cursor-pointer flex grow items-center min-h-px min-w-px pb-[0.68px] pt-0 px-[15px] relative shrink-0" data-name="Component 6" href="https://paperwarefactory.com/shop">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left text-nowrap">
        <p className="leading-[29.7px] text-[18px]">All Product</p>
      </div>
      <Margin8 />
    </a>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Component 8">
      <Component38 />
    </div>
  );
}

function Component39() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-[0.68px] pt-0 px-[15px] relative shrink-0" data-name="Component 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.52)] text-nowrap">
        <p className="leading-[29.7px] text-[18px]">Sustainability</p>
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Component 5">
      <Component39 />
    </div>
  );
}

function Component41() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px pb-[0.68px] pt-0 px-[15px] relative shrink-0" data-name="Component 6">
      <a className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://paperwarefactory.com/">
        <p className="cursor-pointer leading-[29.7px] text-[18px]">Contact</p>
      </a>
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Component 5">
      <Component41 />
    </div>
  );
}

function List4() {
  return (
    <div className="basis-0 content-stretch flex flex-wrap gap-0 grow items-start min-h-px min-w-px relative shrink-0" data-name="List">
      <Component4 />
      <Component33 />
      <Component35 />
      <Component37 />
      <Component7 />
      <Component40 />
      <Component42 />
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[30px] items-start justify-center mix-blend-saturation relative shrink-0" data-name="Nav">
      <List4 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[972.1900024414062px] relative shrink-0" data-name="Container">
      <Nav />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative self-stretch shrink-0 w-[972.19px]" data-name="Container">
      <Container93 />
    </div>
  );
}

function Component43() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.p3f72aa00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[2.5px] shrink-0 w-[25px]" data-name="Component 3">
      <Component43 />
    </div>
  );
}

function Component45() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Component 1">
          <path d={svgPaths.p3c49a440} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component46() {
  return (
    <a className="content-stretch cursor-pointer flex items-center justify-center p-0 relative rounded-[2.5px] shrink-0 w-[25px]" data-name="Component 3" href="mailto:paperwarefactory@gmail.com">
      <Component45 />
    </a>
  );
}

function List5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-end relative shrink-0" data-name="List">
      <Component44 />
      <Component46 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <List5 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[155.02000427246094px] relative shrink-0" data-name="Container">
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative self-stretch shrink-0 w-[155.02px]" data-name="Container">
      <Container96 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex items-start max-w-[1240px] px-0 py-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute backdrop-blur-[3px] backdrop-filter bg-[rgba(226,232,240,0.6)] h-[80px] left-[-20px] rounded-[999px] top-0 w-[1280px]" data-name="Overlay+Border+Shadow+OverlayBlur">
        <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.1)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <Container91 />
      <Container94 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[1920px] pb-0 pt-[20px] px-[340px] top-0 w-[1920px]" data-name="Container">
      <Container98 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_5_Brands:Regular','Noto_Sans:Regular',sans-serif] items-center leading-[0] pl-[0.8px] pr-0 py-0 relative shrink-0 text-[24px] text-center text-nowrap text-white w-[30px]" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0" role="link" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} tabIndex="0">
        <p className="cursor-pointer leading-[24px] text-nowrap">{`"`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" role="link" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} tabIndex="0">
        <p className="cursor-pointer leading-[24px] text-nowrap">{`/ "`}</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#25d265] content-stretch flex flex-col items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Background">
      <Paragraph1 />
    </div>
  );
}

function Component8() {
  return (
    <a className="content-stretch cursor-pointer flex items-center overflow-clip p-0 relative rounded-[24px] shrink-0 w-[48px]" data-name="Component 9" href="https://web.whatsapp.com/send">
      <Background3 />
    </a>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[24px] shrink-0 w-full" data-name="Item">
      <Component8 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="List">
      <Item1 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute bottom-[3465.22px] content-stretch flex flex-col items-start left-[1862px]" data-name="Container">
      <List6 />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1920w light">
      <Container99 />
      <Container100 />
      <Container89 />
    </div>
  );
}