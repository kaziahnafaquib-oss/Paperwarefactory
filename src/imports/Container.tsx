import svgPaths from "./svg-d9nx9c5651";
import imgSingleWall796X1024Png from "figma:asset/508ac66920d6bf79d8403965309bcc52fac5e5e7.png";
import imgRippleWall796X1024Png from "figma:asset/bfe95f6268f355771c65cb6e1751781aaebe3d05.png";
import imgDoubleWall796X1024Png from "figma:asset/b41403eedb4af19ba356d74c80558118d542f4cd.png";
import imgErasebgTransformedPng from "figma:asset/49b7c1ac36cc61c1c728abd7230eab96c50bea6c.png";
import imgPlastic2Webm from "figma:asset/82270aebe0f298f18745d0cb085ff5698e90125f.png";
import img1Mp4 from "figma:asset/a61a6c0a1fccc108ff0237770cdc9edd2e5f021f.png";
import img2Mp4 from "figma:asset/2e4c4dd27048735809a298dc858c478a75ed1376.png";
import img3Mp4 from "figma:asset/8c502b42070a5877d9c711065ea4ba5698302056.png";
import img4Mp4 from "figma:asset/d38d5043f7393a0e11f7f3e8c359ec15ea8cb9fa.png";
import { imgGroup } from "./svg-dcjfd";

function Header() {
  return <div className="h-[100px] shrink-0 w-full" data-name="Header" />;
}

function Group() {
  return (
    <div className="absolute inset-[0.5%_-3.04%_-23.3%_-0.38%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.272px_-5.996px] mask-size-[2679.07px_1200px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2770.73 1473.56">
        <g id="Group">
          <path d={svgPaths.p2dfbc380} fill="var(--fill-0, #180F18)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.pc45e80} fill="var(--fill-0, #040404)" fillOpacity="0.51" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p19892e80} fill="var(--fill-0, #F5F5F5)" fillOpacity="0.42" id="Vector_3" />
            <path d={svgPaths.p3bb91680} id="Vector_4" stroke="url(#paint0_linear_5_4991)" strokeWidth="1.55039" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p28e15200} fill="var(--fill-0, #F5F5F5)" fillOpacity="0.42" id="Vector_5" />
            <path d={svgPaths.p19e51980} id="Vector_6" stroke="url(#paint1_linear_5_4991)" strokeWidth="1.55039" />
          </g>
          <path d={svgPaths.p349aec00} fill="var(--fill-0, #905B00)" id="Vector_7" />
          <path d={svgPaths.p31121200} fill="var(--fill-0, #905B00)" id="Vector_8" />
          <path d={svgPaths.p19c7f00} fill="var(--fill-0, #805613)" id="Vector_9" />
          <path d={svgPaths.p1bf91900} fill="var(--fill-0, #060400)" id="Vector_10" />
          <path d={svgPaths.p2e86ca00} fill="var(--fill-0, #180F18)" id="Vector_11" />
          <path d={svgPaths.p8e637c0} fill="var(--fill-0, #180F18)" id="Vector_12" />
          <path d={svgPaths.p292bcd00} fill="var(--fill-0, #180F18)" id="Vector_13" />
          <path d={svgPaths.p3b970f00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p15f84500} fill="var(--fill-0, #FABF37)" id="Vector_15" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_4991" x1="1094.5" x2="1177.86" y1="911.062" y2="944.839">
            <stop stopColor="white" stopOpacity="0.21" />
            <stop offset="1" stopColor="#E8DADA" stopOpacity="0.63" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_4991" x1="1539.46" x2="1622.83" y1="911.062" y2="944.839">
            <stop stopColor="white" stopOpacity="0.21" />
            <stop offset="1" stopColor="#E8DADA" stopOpacity="0.63" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[1200px] overflow-clip relative shrink-0 w-[2679.07px]" data-name="Component 1">
      <ClipPathGroup />
    </div>
  );
}

function VectorSvgFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1200px] items-start left-0 overflow-clip top-0 w-[1920px]" data-name="vector.svg fill">
      <Component />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[43px] not-italic relative shrink-0 text-[43px] text-black text-center uppercase w-full">
        <p className="mb-0">Paper Cup</p>
        <p>Variants</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="mb-0">Explore our handpicked selection of</p>
        <p className="mb-0">standout products, each thoughtfully</p>
        <p className="mb-0">chosen to bring you the perfect balance of</p>
        <p className="mb-0">quality, functionality, and design—tailored</p>
        <p className="mb-0">to elevate your lifestyle and meet your</p>
        <p>everyday needs with ease and style.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-1.02px_1095px_100px_0] items-start" data-name="Container">
      <Container1 />
    </div>
  );
}

function SingleWall796X1024Png() {
  return (
    <div className="h-[295.88px] max-w-[230px] relative shrink-0 w-[230px]" data-name="single-wall-796x1024.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSingleWall796X1024Png} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Container">
      <SingleWall796X1024Png />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black text-center w-full">
        <p className="leading-[39px]">Single Wall</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[230px] right-0 top-[285.88px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.2px] text-black text-center w-full">
        <p className="leading-[14.56px]">250 ML | 350 ML | 08 OZ | 12 OZ</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[230px] right-0 top-[334.88px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[349.44px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col h-[444.44px] items-start pb-[75px] pt-[20px] px-0 relative shrink-0 w-[230px]" data-name="Group - 1 / 3">
      <Container6 />
    </div>
  );
}

function Group13Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[10px] py-0 relative shrink-0 w-[240px]" data-name="Group - 1 / 3:margin">
      <Group1 />
    </div>
  );
}

function RippleWall796X1024Png() {
  return (
    <div className="h-[384.64px] max-w-[388.6999816894531px] relative shrink-0 w-[299px]" data-name="ripple-wall-796x1024.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRippleWall796X1024Png} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[-34.5px] right-[-34.5px] top-[-44.38px]" data-name="Container">
      <RippleWall796X1024Png />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black text-center w-full">
        <p className="leading-[39px]">Ripple Wall</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[230px] pb-0 pt-[15px] px-0 right-0 top-[315.88px]" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.2px] text-black text-center w-full">
        <p className="leading-[14.56px]">250 ML | 350 ML | 08 OZ | 12 OZ</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[230px] right-0 top-[379.88px]" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[394.44px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="content-stretch flex flex-col h-[444.44px] items-start pb-[30px] pt-[20px] px-0 relative shrink-0 w-[230px]" data-name="Group - 2 / 3">
      <Container10 />
    </div>
  );
}

function Group23Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[10px] py-0 relative shrink-0 w-[240px]" data-name="Group - 2 / 3:margin">
      <Group2 />
    </div>
  );
}

function DoubleWall796X1024Png() {
  return (
    <div className="h-[295.88px] max-w-[230px] relative shrink-0 w-[230px]" data-name="double-wall-796x1024.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDoubleWall796X1024Png} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Container">
      <DoubleWall796X1024Png />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-black text-center w-full">
        <p className="leading-[39px]">Double Wall</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[230px] right-0 top-[285.88px]" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.2px] text-black text-center w-full">
        <p className="leading-[14.56px]">250 ML | 350 ML | 08 OZ | 12 OZ</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[230px] right-0 top-[334.88px]" data-name="Container">
      <Heading7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[349.44px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex flex-col h-[444.44px] items-start pb-[75px] pt-[20px] px-0 relative shrink-0 w-[230px]" data-name="Group - 3 / 3">
      <Container14 />
    </div>
  );
}

function Group33Margin() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-0 pr-[10px] py-0 relative shrink-0 w-[240px]" data-name="Group - 3 / 3:margin">
      <Group3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Group13Margin />
      <Group23Margin />
      <Group33Margin />
    </div>
  );
}

function RegionCarousel() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[16px] pt-0 px-0 relative shrink-0 w-[720px]" data-name="Region - Carousel">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Container">
      <RegionCarousel />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="capitalize flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[28px]">Discover More</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Component 1">
          <path d={svgPaths.p19b7980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Container">
      <Component8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-start justify-center relative">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <a className="content-stretch cursor-pointer flex items-start px-[43px] py-[23px] relative rounded-[50px] shrink-0" data-name="Component 2" href="https://paperwarefactory.com/product/paper-cup/">
      <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container19 />
    </a>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function OverlayBlur() {
  return (
    <div className="bg-[rgba(255,255,255,0)] blur-[0px] content-stretch filter flex flex-col items-start mix-blend-saturation relative shrink-0 w-full" data-name="Overlay+Blur">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[77.44px] inset-[0_365px_-134.89px_365px] items-start min-h-[809.3280029296875px] pb-[28.71px] pt-[28.72px] px-0" data-name="Container">
      <Container16 />
      <OverlayBlur />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black text-right w-full">
        <p className="mb-0">Our most loved and talked-about</p>
        <p className="mb-0">products—ready to impress and delivered</p>
        <p>straight to your door.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[345px] pb-[150px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_100px_1095px] items-start justify-end" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[674.44px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start justify-center left-[240px] max-w-[1440px] px-0 py-[209.78px] right-[240px] top-0" data-name="Container">
      <Container />
      <Container25 />
    </div>
  );
}

function Background() {
  return (
    <div className="h-[1200px] min-h-[1200px] relative shrink-0 w-full" data-name="Background">
      <VectorSvgFill />
      <Container26 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[43px] not-italic relative shrink-0 text-[43px] text-black text-center text-nowrap uppercase">
        <p className="mb-0">Environmental Impact</p>
        <p>{`& Our Production Growth`}</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1920px] relative shrink-0" data-name="Container">
      <Heading8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Poppins:SemiBold','Noto_Sans:SemiBold',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        <p className="leading-[24px]">Every Paper Cup reduces 5g CO₂ emission</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1920px] relative shrink-0" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Background1() {
  return <div className="absolute bg-[#fad585] inset-[0_0_-0.59px_0] rounded-[8px]" data-name="Background" />;
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#905b00] text-[18px] text-nowrap">
        <p className="leading-[23.4px]">2030 - OUR VISION</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-['Poppins:Medium',sans-serif] h-[49.5px] leading-[0] not-italic relative shrink-0 text-[#2b2b2b] w-full" data-name="Paragraph">
      <div className="absolute flex flex-col h-[50px] justify-center leading-[24.75px] left-0 text-[0px] text-[15px] top-[23.88px] translate-y-[-50%] w-[214.95px]">
        <p className="mb-0">
          <span className="font-['Poppins:Medium',sans-serif]">{`Production: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">50M Paper Cups</span>
        </p>
        <p className="font-['Poppins:Medium',sans-serif]">CO</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[23.36px] text-[11.3px] top-[40.56px] translate-y-[-50%] w-[6.837px]">
        <p className="leading-[24.75px]">2</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[29.86px] text-[0px] top-[36.25px] translate-y-[-50%] w-[158.353px]">
        <p className="leading-[24.75px] not-italic text-[#2b2b2b] text-[15px]">
          <span className="font-['Poppins:Medium',sans-serif]">{`e Saving: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">250,000 Kg</span>
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[12.59px] items-start min-w-[214.75px] relative self-stretch shrink-0" data-name="Container">
      <Heading9 />
      <Paragraph />
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 grow min-h-[149.5px] min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] p-[20px] relative w-full">
          <div className="absolute bg-[#fad585] bottom-[-92.07%] left-[calc(50%+0.99px)] top-[118.57%] translate-x-[-50%] w-[2px]" data-name="Vertical Divider" />
          <Background1 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="min-h-[149.5px] relative shrink-0 w-full z-[3]" data-name="Container">
      <div className="flex flex-row items-end justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-end justify-center min-h-[inherit] px-[46px] py-0 relative w-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function ErasebgTransformedPng() {
  return (
    <div className="max-w-[94px] relative shrink-0 size-[74px]" data-name="erasebg-transformed.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.7%] left-0 max-w-none top-[-16.85%] w-full" src={imgErasebgTransformedPng} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fad585] content-stretch flex items-center justify-center overflow-clip relative rounded-[47px] shrink-0 size-[94px]" data-name="Background">
      <ErasebgTransformedPng />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="absolute bg-[#fad585] h-[2px] left-[-10%] right-[-10%] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Horizontal Divider" />
      <Background2 />
    </div>
  );
}

function Container33() {
  return <div className="h-[149.5px] min-h-[149.5px] shrink-0 w-full z-[1]" data-name="Container" />;
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] isolate items-center relative shrink-0 w-full" data-name="Component 3">
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative shrink-0 w-[531.42px]" data-name="Container">
      <Component2 />
    </div>
  );
}

function Container35() {
  return <div className="h-[149.5px] min-h-[149.5px] shrink-0 w-full" data-name="Container" />;
}

function ErasebgTransformedPng1() {
  return (
    <div className="max-w-[94px] relative shrink-0 size-[74px]" data-name="erasebg-transformed.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.7%] left-0 max-w-none top-[-16.85%] w-full" src={imgErasebgTransformedPng} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#fad585] content-stretch flex items-center justify-center overflow-clip relative rounded-[47px] shrink-0 size-[94px]" data-name="Background">
      <ErasebgTransformedPng1 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#fad585] h-[2px] left-[-10%] right-[-10%] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Horizontal Divider" />
      <Background3 />
    </div>
  );
}

function Background4() {
  return <div className="absolute bg-[#fad585] inset-[0_0_-0.59px_0] rounded-[8px]" data-name="Background" />;
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#905b00] text-[18px] text-nowrap">
        <p className="leading-[23.4px]">2025</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="font-['Poppins:Medium',sans-serif] h-[49.5px] leading-[0] not-italic relative shrink-0 text-[#2b2b2b] w-full" data-name="Paragraph">
      <div className="absolute flex flex-col h-[50px] justify-center leading-[24.75px] left-0 text-[0px] text-[15px] top-[23.88px] translate-y-[-50%] w-[195.72px]">
        <p className="mb-0">
          <span className="font-['Poppins:Medium',sans-serif]">{`Produced: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">8M Paper Cups</span>
        </p>
        <p className="font-['Poppins:Medium',sans-serif]">CO</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[23.36px] text-[11.3px] top-[40.56px] translate-y-[-50%] w-[6.837px]">
        <p className="leading-[24.75px]">2</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[29.86px] text-[0px] top-[36.25px] translate-y-[-50%] w-[145.753px]">
        <p className="leading-[24.75px] not-italic text-[#2b2b2b] text-[15px]">
          <span className="font-['Poppins:Medium',sans-serif]">{`e Saved: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">40,000 Kg</span>
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[12.59px] items-start min-w-[195.52000427246094px] relative self-stretch shrink-0" data-name="Container">
      <Heading10 />
      <Paragraph1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow min-h-[149.5px] min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] p-[20px] relative w-full">
          <div className="absolute bg-[#fad585] bottom-[100.25%] left-[calc(50%+1px)] top-[-73.76%] translate-x-[-50%] w-[2px]" data-name="Vertical Divider" />
          <Background4 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="min-h-[149.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[46px] py-0 relative w-full">
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center relative shrink-0 w-full" data-name="Component 4">
      <Container35 />
      <Container36 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative shrink-0 w-[531.42px]" data-name="Container">
      <Component3 />
    </div>
  );
}

function Background5() {
  return <div className="absolute bg-[#fad585] inset-[0_0_-0.59px_0] rounded-[8px]" data-name="Background" />;
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#905b00] text-[18px] text-nowrap">
        <p className="leading-[23.4px]">2022</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="font-['Poppins:Medium',sans-serif] h-[49.5px] leading-[0] not-italic relative shrink-0 text-[#2b2b2b] w-full" data-name="Paragraph">
      <div className="absolute flex flex-col h-[50px] justify-center leading-[24.75px] left-0 text-[0px] text-[15px] top-[23.88px] translate-y-[-50%] w-[204.5px]">
        <p className="mb-0">
          <span className="font-['Poppins:Medium',sans-serif]">{`Production: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">3M Paper Cups</span>
        </p>
        <p className="font-['Poppins:Medium',sans-serif]">CO</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[23.36px] text-[11.3px] top-[40.56px] translate-y-[-50%] w-[6.837px]">
        <p className="leading-[24.75px]">2</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[29.86px] text-[0px] top-[36.25px] translate-y-[-50%] w-[141.199px]">
        <p className="leading-[24.75px] not-italic text-[#2b2b2b] text-[15px]">
          <span className="font-['Poppins:Medium',sans-serif]">{`e Saved: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">15,000 Kg</span>
        </p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[12.59px] items-start min-w-[204.3000030517578px] relative self-stretch shrink-0" data-name="Container">
      <Heading11 />
      <Paragraph2 />
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow min-h-[149.5px] min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] p-[20px] relative w-full">
          <div className="absolute bg-[#fad585] bottom-[-92.07%] left-[calc(50%+1px)] top-[118.57%] translate-x-[-50%] w-[2px]" data-name="Vertical Divider" />
          <Background5 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="min-h-[149.5px] relative shrink-0 w-full z-[3]" data-name="Container">
      <div className="flex flex-row items-end justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-end justify-center min-h-[inherit] px-[46px] py-0 relative w-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function ErasebgTransformedPng2() {
  return (
    <div className="max-w-[94px] relative shrink-0 size-[74px]" data-name="erasebg-transformed.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.7%] left-0 max-w-none top-[-16.85%] w-full" src={imgErasebgTransformedPng} />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#fad585] content-stretch flex items-center justify-center overflow-clip relative rounded-[47px] shrink-0 size-[94px]" data-name="Background">
      <ErasebgTransformedPng2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="absolute bg-[#fad585] h-[2px] left-[-10%] right-[-10%] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Horizontal Divider" />
      <Background6 />
    </div>
  );
}

function Container45() {
  return <div className="h-[149.5px] min-h-[149.5px] shrink-0 w-full z-[1]" data-name="Container" />;
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] isolate items-center relative shrink-0 w-full" data-name="Component 3">
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative shrink-0 w-[531.42px]" data-name="Container">
      <Component9 />
    </div>
  );
}

function Container47() {
  return <div className="h-[149.5px] min-h-[149.5px] shrink-0 w-full" data-name="Container" />;
}

function ErasebgTransformedPng3() {
  return (
    <div className="max-w-[94px] relative shrink-0 size-[74px]" data-name="erasebg-transformed.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.7%] left-0 max-w-none top-[-16.85%] w-full" src={imgErasebgTransformedPng} />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#fad585] content-stretch flex items-center justify-center overflow-clip relative rounded-[47px] shrink-0 size-[94px]" data-name="Background">
      <ErasebgTransformedPng3 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#fad585] h-[2px] left-[-10%] right-[-10%] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Horizontal Divider" />
      <Background7 />
    </div>
  );
}

function Background8() {
  return <div className="absolute bg-[#fad585] inset-[0_0_-0.59px_0] rounded-[8px]" data-name="Background" />;
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#905b00] text-[18px] text-nowrap">
        <p className="leading-[23.4px]">2020</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="font-['Poppins:Medium',sans-serif] h-[49.5px] leading-[0] not-italic relative shrink-0 text-[#2b2b2b] w-full" data-name="Paragraph">
      <div className="absolute flex flex-col h-[50px] justify-center leading-[24.75px] left-0 text-[0px] text-[15px] top-[23.88px] translate-y-[-50%] w-[213.85px]">
        <p className="mb-0">
          <span className="font-['Poppins:Medium',sans-serif]">{`Production: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">1.2M Paper Cups</span>
        </p>
        <p className="font-['Poppins:Medium',sans-serif]">CO</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[23.36px] text-[11.3px] top-[40.56px] translate-y-[-50%] w-[6.837px]">
        <p className="leading-[24.75px]">2</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[29.86px] text-[0px] top-[36.25px] translate-y-[-50%] w-[135.365px]">
        <p className="leading-[24.75px] not-italic text-[#2b2b2b] text-[15px]">
          <span className="font-['Poppins:Medium',sans-serif]">{`e Saved: `}</span>
          <span className="font-['Poppins:Bold',sans-serif]">6,000 Kg</span>
        </p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[12.59px] items-start min-w-[213.66000366210938px] relative self-stretch shrink-0" data-name="Container">
      <Heading12 />
      <Paragraph3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow min-h-[149.5px] min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] p-[20px] relative w-full">
          <div className="absolute bg-[#fad585] bottom-[100.25%] left-[calc(50%+0.99px)] top-[-73.76%] translate-x-[-50%] w-[2px]" data-name="Vertical Divider" />
          <Background8 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="min-h-[149.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[46px] py-0 relative w-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center relative shrink-0 w-full" data-name="Component 4">
      <Container47 />
      <Container48 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px relative shrink-0 w-[531.42px]" data-name="Container">
      <Component10 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[2126px]" data-name="Container">
      <Container34 />
      <Container40 />
      <Container46 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[30px] pt-[100px] px-[30px] relative w-full">
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#fabf37] content-stretch flex flex-col gap-[20px] items-center justify-center px-0 py-[60px] relative shrink-0 w-full" data-name="Background">
      <Container27 />
      <Container28 />
      <Container57 />
    </div>
  );
}

function Plastic2Webm() {
  return (
    <div className="h-[512px] relative shrink-0 w-full" data-name="plastic2.webm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[31.97%] max-w-none top-0 w-[36.06%]" src={imgPlastic2Webm} />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[120px] not-italic relative shrink-0 text-[120px] text-[rgba(0,0,0,0.82)] text-center w-full">
        <p className="mb-0">SAY NO</p>
        <p>TO PLASTIC</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-black text-center w-full">
        <p className="mb-0">Over 500 billion cups pollute the planet each year</p>
        <p>Switch to Paperware Factory’s recyclable paper cups and say no to plastic waste</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1440px] relative shrink-0 w-[1065px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-0 p-[10px] right-0 top-[150px]" data-name="Container">
      <Heading13 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[18.39px] pt-[10px] px-[10px] relative w-full">
          <Plastic2Webm />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1440px] pb-[50px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container61 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#fabf37] relative shrink-0 w-full" data-name="Background">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[240px] py-0 relative w-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Comp1Mp() {
  return <div className="absolute h-[1200px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="Comp-1.mp4" />;
}

function Container63() {
  return (
    <div className="absolute h-[1200px] left-[-240px] overflow-clip top-0 w-[1920px]" data-name="Container">
      <Comp1Mp />
      <div className="absolute bg-black h-[1200px] left-0 opacity-[0.65] top-0 w-[1920px]" data-name="Background" />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute h-[85px] left-[-624.65px] top-0 w-[3169.3px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3169.3 85">
        <g id="Component 1">
          <path d={svgPaths.p1e425ac0} fill="var(--fill-0, #FABF37)" id="Vector" opacity="0.33" />
          <path d={svgPaths.p15d0a080} fill="var(--fill-0, #FABF37)" id="Vector_2" opacity="0.66" />
          <path d={svgPaths.pe548800} fill="var(--fill-0, #FABF37)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[85px] left-[-240px] overflow-clip top-[-1px] w-[1920px]" data-name="Container">
      <Component11 />
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[84.797px] relative w-[1921.3px]" data-name="Component 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1921.3 84.7969">
        <g id="Component 5">
          <path d={svgPaths.p34196c00} fill="var(--fill-0, white)" id="Vector" opacity="0.33" />
          <path d={svgPaths.p101a3322} fill="var(--fill-0, white)" id="Vector_2" opacity="0.66" />
          <path d={svgPaths.p3382bd00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[84.8px] overflow-clip relative w-[1920px]" data-name="Container">
      <div className="absolute flex h-[84.797px] items-center justify-center left-[-0.65px] top-0 w-[1921.3px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.595px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[98.8px] not-italic relative shrink-0 text-[76px] text-center text-shadow-[0px_0px_10px_rgba(0,0,0,0.8)] text-white w-full">
        <p className="mb-0">Paperware Factory keeps</p>
        <p className="mb-0">Eco-Friendliness at the</p>
        <p>tip of your fingers!</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] relative shrink-0 w-full" data-name="Container">
      <Heading14 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1024px] pb-0 pt-[148.795px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[208px] py-0 relative w-full">
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[1440px] pb-[401.81px] pt-[351.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
      <div className="absolute bottom-[-1px] flex h-[84.8px] items-center justify-center left-[-240px] w-[1920px]">
        <div className="flex-none rotate-[180deg]">
          <Container65 />
        </div>
      </div>
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="min-h-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[240px] py-0 relative w-full">
          <div className="absolute bg-black h-[1200px] left-0 opacity-[0.65] top-0 w-[1920px]" data-name="Background" />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Component1Mp() {
  return (
    <div className="absolute h-[275.63px] left-1/2 top-[calc(50%+0.01px)] translate-x-[-50%] translate-y-[-50%] w-[490px]" data-name="1.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1Mp4} />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip rounded-[20px] top-0 w-[490px]" data-name="Container">
      <Component1Mp />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[240px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <Container71 />
    </div>
  );
}

function Component2Mp() {
  return (
    <div className="absolute h-[360px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[490px]" data-name="2.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-15.31%] max-w-none top-0 w-[130.61%]" src={img2Mp4} />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[360px] left-0 overflow-clip rounded-[20px] top-0 w-[490px]" data-name="Container">
      <Component2Mp />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[360px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative self-stretch shrink-0 w-[490px]" data-name="Container">
      <Container72 />
      <Container74 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[62px] not-italic relative shrink-0 text-[62px] text-black text-center uppercase w-full">
        <p className="mb-0">{`It's`}</p>
        <p>better</p>
      </div>
    </div>
  );
}

function ErasebgTransformedPng4() {
  return (
    <div className="aspect-[420/561.52] blur-[0px] filter relative shrink-0 w-full" data-name="erasebg-transformed.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgErasebgTransformedPng} />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0 w-[420px]" data-name="Container">
      <Heading15 />
      <ErasebgTransformedPng4 />
    </div>
  );
}

function Component3Mp() {
  return (
    <div className="absolute h-[360px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[490px]" data-name="3.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-15.31%] max-w-none top-0 w-[130.61%]" src={img3Mp4} />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[360px] left-0 overflow-clip rounded-[20px] top-0 w-[490px]" data-name="Container">
      <Component3Mp />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[360px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <Container77 />
    </div>
  );
}

function Component4Mp() {
  return (
    <div className="absolute h-[275.63px] left-1/2 top-[calc(50%+0.01px)] translate-x-[-50%] translate-y-[-50%] w-[490px]" data-name="4.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img4Mp4} />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip rounded-[20px] top-0 w-[490px]" data-name="Container">
      <Component4Mp />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[240px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative self-stretch shrink-0 w-[490px]" data-name="Container">
      <Container78 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[20px] items-start max-w-[1440px] pb-[10px] pt-[110px] px-0 relative shrink-0 w-[1440px]" data-name="Container">
      <Container75 />
      <Container76 />
      <Container81 />
    </div>
  );
}

function MainArticle() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Main → Article">
      <Background />
      <Background9 />
      <Background10 />
      <Container70 />
      <Container82 />
    </div>
  );
}

function Container83() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <MainArticle />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[1920px] min-h-[4794.91015625px] relative shrink-0 w-full" data-name="Container">
      <Container83 />
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

function Component12() {
  return (
    <div className="h-[126.54px] overflow-clip relative shrink-0 w-[133.39px]" data-name="Component 1">
      <Layer />
    </div>
  );
}

function Asset2SvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[126.53px] items-center justify-center overflow-clip relative shrink-0 w-[133.39px]" data-name="Asset-2.svg fill">
      <Component12 />
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

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[163.3px] pr-[163.31px] py-0 relative shrink-0 w-[460px]" data-name="Container">
      <PaperwareFactoryPrimaryBgLogo />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[18.2px]">Quick Link</p>
      </div>
    </div>
  );
}

function Container86() {
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
      <Container86 />
    </a>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Link />
    </div>
  );
}

function Container87() {
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
      <Container87 />
    </a>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Link1 />
    </div>
  );
}

function Container88() {
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
      <Container88 />
    </a>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Link2 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <a className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap" href="https://paperwarefactory.com/">
        <p className="cursor-pointer leading-[26.4px] text-[16px]">Sustainability</p>
      </a>
    </div>
  );
}

function Link3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Link">
      <Container89 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Link3 />
    </div>
  );
}

function Container90() {
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
      <Container90 />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Link4 />
    </div>
  );
}

function Container91() {
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
      <Container91 />
    </a>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Link5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Component5 />
      <Component13 />
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
    </div>
  );
}

function Container92() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Heading16 />
      <List />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[18.2px]">Popular Products</p>
      </div>
    </div>
  );
}

function Container93() {
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
      <Container93 />
    </a>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Link6 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Carry Bag</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Box</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Container95 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Hangtag</p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Container96 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Brochure</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Container97 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Envelope</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex items-center pb-[7.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Component 6">
      <Container98 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Component18 />
      <Component19 />
      <Component20 />
      <Component21 />
      <Component22 />
      <Component23 />
    </div>
  );
}

function Container99() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Heading17 />
      <List1 />
    </div>
  );
}

function Container100() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[20px] items-start pl-0 pr-[30px] py-0 relative size-full">
          <Container92 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[18.2px]">Get In Touch</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[0.585px] pl-[5px] pr-[48.37px] pt-0 top-[-0.81px]" data-name="Container">
      <div className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="mb-0">Head Office: 7813 Trimohoni Nandipara Main</p>
        <p>Road, Trimohoni, Dhaka .</p>
      </div>
    </div>
  );
}

function Component24() {
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

function Container102() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component24 />
    </div>
  );
}

function ItemLink() {
  return (
    <a className="block cursor-pointer h-[52.78px] relative shrink-0 w-full" data-name="Item → Link" href="https://maps.app.goo.gl/as9qxPHfyk5QacXVA">
      <Container101 />
      <Container102 />
    </a>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[0.585px] pl-[5px] pr-[30.73px] pt-0 top-[-0.81px]" data-name="Container">
      <div className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="mb-0">Factory Office: 7814 Trimohoni Nandipara Main</p>
        <p>Road, Trimohoni, Dhaka .</p>
      </div>
    </div>
  );
}

function Component25() {
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

function Container104() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component25 />
    </div>
  );
}

function ItemLink1() {
  return (
    <a className="block cursor-pointer h-[52.78px] relative shrink-0 w-full" data-name="Item → Link" href="https://maps.app.goo.gl/as9qxPHfyk5QacXVA">
      <Container103 />
      <Container104 />
    </a>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[0.585px] pl-[5px] pr-[40.55px] pt-0 top-[-0.81px]" data-name="Container">
      <div className="cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[26.4px] not-italic relative shrink-0 text-[16px] text-black text-left text-nowrap" role="link" tabIndex="0">
        <p className="mb-0">Display Centre: 65 Begum bazar, Agrani Bank</p>
        <p>Lane, Dhaka-1100</p>
      </div>
    </div>
  );
}

function Component26() {
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

function Container106() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component26 />
    </div>
  );
}

function ItemLink2() {
  return (
    <a className="block cursor-pointer h-[52.78px] relative shrink-0 w-full" data-name="Item → Link" href="https://maps.app.goo.gl/kR1FWC3eYnCLTVGF9">
      <Container105 />
      <Container106 />
    </a>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pl-[5px] pr-0 py-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[26.4px]">Factory working hour: 24/7</p>
      </div>
    </div>
  );
}

function Component27() {
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

function Container108() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pl-0 pr-[5px] py-0 top-[4px]" data-name="Container">
      <Component27 />
    </div>
  );
}

function Item() {
  return (
    <div className="h-[26.39px] relative shrink-0 w-full" data-name="Item">
      <Container107 />
      <Container108 />
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

function Container109() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-0 pr-[30px] py-0 relative size-full">
          <Heading18 />
          <List2 />
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[10px] relative w-full">
          <Container85 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Container100 />
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Container109 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Component28() {
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

function Component6() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 7" href="https://www.facebook.com/paperwarefactory">
      <Component28 />
    </a>
  );
}

function Component29() {
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

function Component30() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 7" href="https://www.instagram.com/paperware_factory">
      <Component29 />
    </a>
  );
}

function Component31() {
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

function Component32() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 7" href="https://www.linkedin.com/company/paperwarefactory/">
      <Component31 />
    </a>
  );
}

function Component33() {
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

function Component34() {
  return (
    <a className="bg-black content-stretch flex items-center justify-center px-0 py-[10px] relative rounded-[22.5px] shrink-0 w-[45px]" data-name="Component 7" href="https://www.youtube.com/@paperwarefactory5808">
      <Component33 />
    </a>
  );
}

function List3() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <Component6 />
      <Component30 />
      <Component32 />
      <Component34 />
    </div>
  );
}

function Container111() {
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

function Container112() {
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
      <Container112 />
    </div>
  );
}

function Container113() {
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

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[19px] items-start p-[10px] relative w-full">
          <Container111 />
          <Container113 />
        </div>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[19.99px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container110 />
      <Container114 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#fabf37] content-stretch flex flex-col items-start left-0 pb-[20px] pt-[120px] px-[240px] right-0 top-[45.39px]" data-name="Background">
      <Container115 />
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

function Container116() {
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
      <Container116 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-full">
        <p className="leading-[39px]">Newsletter</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <Heading19 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[26.4px]">Be the first to unwrap eco-friendly ideas — straight to your inbox.</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[30px] pb-px pt-0 px-0 right-[770px] top-[30px]" data-name="Container">
      <Container117 />
      <Container119 />
    </div>
  );
}

function Container121() {
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
          <Container121 />
        </div>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-center flex flex-wrap h-[59px] items-center justify-center min-h-px relative shrink-0 w-full" data-name="Container">
      <Input />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[11px] pb-[10px] pt-0 px-0 relative self-stretch shrink-0 w-[400px]" data-name="Margin">
      <Container122 />
    </div>
  );
}

function Component35() {
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

function Container123() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Component35 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container123 />
    </div>
  );
}

function Component7() {
  return (
    <div className="basis-0 bg-[#fabf37] content-stretch flex flex-col grow items-start min-h-[59px] min-w-px px-0 py-[20.5px] relative rounded-br-[15px] rounded-tr-[15px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Component 8">
      <Container124 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-end flex flex-wrap h-[59px] items-end justify-center min-h-px relative shrink-0 w-full" data-name="Container">
      <Component7 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[11px] pb-[10px] pt-0 px-0 relative self-stretch shrink-0 w-[100px]" data-name="Margin">
      <Container125 />
    </div>
  );
}

function FormNewForm() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 items-start justify-center relative shrink-0 w-full" data-name="Form - New Form">
      <Margin />
      <Margin1 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[640px] relative shrink-0 w-[500px]" data-name="Container">
      <FormNewForm />
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col items-end justify-end left-[770px] right-[30px] top-[33.18px]" data-name="Container">
      <Container126 />
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-black h-[125.39px] relative rounded-[20px] shrink-0 w-full" data-name="Background">
      <Container120 />
      <Container127 />
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[240px] max-w-[1440px] right-[240px] top-0" data-name="Container">
      <Background12 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[657.52px] relative shrink-0 w-full" data-name="Footer">
      <Background11 />
      <BackgroundHorizontalBorder />
      <Container128 />
    </div>
  );
}

export default function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Header />
      <Container84 />
      <Footer />
    </div>
  );
}