import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

const Intro = ({intro}) => {
  const designations = useRef();
  const typed = useRef();
  const [isMobile,setIsMobile] = useState(false);

  useEffect(() => {
    typed.current = new Typed(designations.current, {
      strings: intro.designations,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    setIsMobile(window.innerWidth <= 480);
    return () => {
      typed.current.destroy();
    };
  }, [intro.designations]);
  return (
    <section
      id="introText"
      className="flex flex-row justify-center items-center mx-auto w-[calc(100vw-32px)] md:w-auto max-w-[1040px] box-content relative overflow-hidden"
    >
      <div className="md:w-[93%] lg:w-[100%] flex flex-col mx-auto lg:px-44 xl:px-0">
        <h2 className="font-title font-[800] text-[25px] whitespace-normal md:text-[56px] lg:text-[65px] leading-[32px] md:leading-[56px] lg:leading-[72px] w-max max-w-[100%] pt-[16px] md:pt-[40px] lg:pt-[30px] pb-[8px] md:pb-[12px] lg:pb-[16px] mb-[8px] md:mb-[12px] lg:mb-[16px]">
          Welcome aboard to the {isMobile && <br/>} T.F.C Community!!
        </h2>
        <p className="max-w-[670px] lg:max-w-[800px] text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[32px] lg:leading-[36px] text-primary dark:text-primary-dark font-[300]">
          <div className="flex gap-4 mb-4 w-max bg-background1/10 p-4 rounded-md text-[14px] md:text-[24px]">
            Get Ready For
            <span
              title="my designations"
              className="text-[14px] md:text-[24px]"
              ref={designations}
            />
          </div>
          {intro.text}
          <br />
        </p>
        <p style={{marginTop: 5}}>Check <a style={{color:'pink'}} target="_blank" href="https://glib-chili-caf.notion.site/TFC-s-Code-of-Conduct-942f9250ddf14bf79439f0155e458228" rel="noreferrer">code of conduct</a> for T.F.C events</p>
      </div>
    </section>
  );
};

export default Intro;
