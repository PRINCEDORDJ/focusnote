import Button from "./Button";
import Form from "../Form";
import { useState } from "react";

const CTA = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="h-auto bg-linear-to-b from-green-900 to-gray-900 text-white py-50 max-md:px-2">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold max-lg:text-4xl">
          GET EARLY ACCESS TO FOCUSNOTE
        </h1>
        <p className="text-xl">
          One workspace for planning sessions and taking notes—designed <br />
          for peak focus.
        </p>
        <Button onClick={()=>setOpen(true)}>Join Waitlist</Button>
      </div>
      {open && (
        <div className="fixed top-50 inset-0 ">
          <Form open={open} setOpen={setOpen} />
        </div>
      )}
    </section>
  );
};

export default CTA;
