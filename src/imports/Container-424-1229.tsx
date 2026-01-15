function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Black',sans-serif] justify-center leading-[70px] not-italic relative shrink-0 text-[#003301] text-[64px] text-center w-full whitespace-pre-wrap">
        <p className="mb-0">STORY OF A</p>
        <p>GREEN CUP</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[33px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.61)] text-center w-full whitespace-pre-wrap">
        <p className="mb-0">Discover the Sustainable Process, Thoughtful Design, and</p>
        <p>Purpose Behind Every Green Cup</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1140px] relative shrink-0 w-[570px]" data-name="Container">
      <Container />
    </div>
  );
}

export default function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center pb-[10px] pt-[130px] px-0 relative size-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}