import { Element } from "react-scroll";
import Button from "./Button";
import { useState } from "react";
import Form from "../Form";

const Hero = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Element name="Features">
        <section className="text-white ">
          <div className=" max-lg:p-5 bg-linear-to-b from-gray-900 to-green-900 pb-10">
            <div className="text-white flex flex-col gap-5 items-center justify-center">
              <h1 className="text-8xl max-lg:text-6xl">
                “Plan. Focus. Achieve”
              </h1>
              <p className="text-2xl max-lg:text-lg">
                Your all-in-one study planner and note-taking workspace—designed
                <br />
                for students who demand more.
              </p>
              <Button onClick={()=>setOpen(true)}>Join Waitlist</Button>
              <div className="flex flex-row-reverse gap-10 max-lg:flex-col pt-20 max-md:pt-10">
                <img
                  src="/logo/mock1.png"
                  width={640}
                  alt=""
                  className="rounded-xl scale-101"
                />
                <img
                  src="/logo/mock2.png"
                  width={530}
                  alt=""
                  className=" rounded-xl max-lg:hidden scale-90"
                />
              </div>
            </div>
          </div>
          {open && (
                  <div className='fixed top-50 inset-0 '>
                    <Form open={open} setOpen={setOpen}/>
                  </div>
                )}
        </section>
      </Element>
    </div>
  );
};

export default Hero;
