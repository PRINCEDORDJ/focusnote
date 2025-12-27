import { useState } from "react";
import clsx from "clsx";
import { Supabse } from "./subabase/supabase";

const Form = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = async () => {
    if (name !== "" && email !== "" && phone !== "") {
      try {
        const { error } = await Supabse.from("waitlist").insert([
          {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
          },
        ]);

        if (error) {
          console.error("Error saving to Supabase:", error.message);
          alert("Failed to save. Please try again.");
        } else {
          // Clear form and close modal on success
          setName("");
          setEmail("");
          setPhone("");
          setOpen(false);
          alert("Thank you! You have been added to the waitlist.");
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred. Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <div
        className={clsx("modal-backdrop", open ? "block" : "hidden")}
        onClick={() => setOpen(false)}
      />

      <div
        className={clsx(
          "fixed inset-x-0 ml-auto mr-auto max-w-md",
          open ? "block z-40" : "hidden"
        )}
      >
        <div className="flex flex-col gap-5 bg-gray-400 py-20 px-10 rounded-xl">
          <input
            type="text"
            placeholder="Name"
            className="border border-black py-3 px-2 focus:outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-black py-3 px-2 focus:outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-black py-3 px-2 focus:outline-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="flex justify-center gap-10">
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-700 rounded-lg px-10 py-1 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-green-700 rounded-lg px-10 py-1"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
