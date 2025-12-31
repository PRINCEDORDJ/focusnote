import { useState } from "react";
import clsx from "clsx";
import { Supabase } from "./subabase/supabase";

const Form = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Survey states
  const [role, setRole] = useState("");
  const [studying, setStudying] = useState("");

  const [coreProblems, setCoreProblems] = useState([]);
  const [coreProblemsOther, setCoreProblemsOther] = useState("");
  const [whenStuck, setWhenStuck] = useState("");

  const [currentSolutions, setCurrentSolutions] = useState([]);
  const [currentSolutionsOther, setCurrentSolutionsOther] = useState("");
  const [dislikeCurrent, setDislikeCurrent] = useState("");

  const [features, setFeatures] = useState([]);
  const [featuresOther, setFeaturesOther] = useState("");

  const [usageFrequency, setUsageFrequency] = useState("");
  const [willingToPay, setWillingToPay] = useState("");
  const [earlyAccess, setEarlyAccess] = useState("");

  // helper to toggle selections with optional limit
  const toggleSelect = (value, setFn, arr, limit) => {
    if (arr.includes(value)) {
      setFn(arr.filter((a) => a !== value));
    } else {
      if (limit && arr.length >= limit) {
        alert(`Please select up to ${limit} option${limit > 1 ? "s" : ""}.`);
        return;
      }
      setFn([...arr, value]);
    }
  };

  const handleSave = async () => {
    if (name !== "" && email !== "" && phone !== "") {
      try {
        const { error } = await Supabase.from("waitlist").insert([
          {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            // survey fields saved as simple strings / JSON
            role: role,
            studying: studying,
            core_problems: JSON.stringify(coreProblems),
            core_problems_other: coreProblemsOther,
            when_stuck: whenStuck,
            current_solutions: JSON.stringify(currentSolutions),
            current_solutions_other: currentSolutionsOther,
            dislike_current: dislikeCurrent,
            features: JSON.stringify(features),
            features_other: featuresOther,
            usage_frequency: usageFrequency,
            willing_to_pay: willingToPay,
            early_access_interest: earlyAccess,
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

          // clear survey states
          setRole("");
          setStudying("");
          setCoreProblems([]);
          setCoreProblemsOther("");
          setWhenStuck("");
          setCurrentSolutions([]);
          setCurrentSolutionsOther("");
          setDislikeCurrent("");
          setFeatures([]);
          setFeaturesOther("");
          setUsageFrequency("");
          setWillingToPay("");
          setEarlyAccess("");

          setOpen(false);
          alert("Thank you! You have been added to the waitlist.");
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred. Please try again.");
      }
    } else {
      alert("Please fill in Name, Email, and Phone.");
    }
  };

  return (
    <>
      <style>
        {`
          .form-scrollable::-webkit-scrollbar {
            width: 5px;
            
          }
          .form-scrollable::-webkit-scrollbar-track {
            background: #e5e7eb;
          }
          .form-scrollable::-webkit-scrollbar-thumb {
            background: #374151;
            border-radius: 4px;
          }
          .form-scrollable::-webkit-scrollbar-thumb:hover {
            background: #1f2937;
          }
          .form-scrollable {
            scrollbar-color: #374151 #e5e7eb;
          }
        `}
      </style>
      <div
        className={clsx("modal-backdrop", open ? "block" : "hidden")}
        onClick={() => setOpen(false)}
      />

      <div
        className={clsx(
          "fixed inset-0 flex items-start justify-center pt-4 sm:pt-8",
          open ? "block z-40" : "hidden"
        )}
      >
        <div className="form-scrollable bg-gray-400 p-6 rounded-xl max-h-[90vh] scroll-smooth overflow-y-auto w-full max-w-2xl mx-4 flex flex-col z-50 gap-4">
          <h3 className="text-lg font-semibold">
            Join FocusNote Waitlist & Survey
          </h3>

          <input
            type="text"
            placeholder="Name"
            className="border border-black py-2 px-2 focus:outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-black py-2 px-2 focus:outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-black py-2 px-2 focus:outline-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* 1. Quick Context */}
          <div>
            <div className="font-medium">Quick Context (Low Friction)</div>
            <div className="mt-2">What best describes you?</div>
            <div className="flex flex-col gap-1 mt-1">
              {[
                "High school student",
                "College / University student",
                "Self-studying / Online courses",
                "Other",
              ].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    checked={role === opt}
                    onChange={() => setRole(opt)}
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              ))}
            </div>

            <input
              type="text"
              placeholder="What are you mainly studying right now?"
              className="border w-full border-black py-2 px-2 focus:outline-0 mt-2"
              value={studying}
              onChange={(e) => setStudying(e.target.value)}
            />
          </div>

          {/* 2. Core Problems */}
          <div>
            <div className="font-medium">
              Core Problems (Most Important Section)
            </div>
            <div className="mt-2">
              What’s your biggest struggle when studying or taking notes?
              (Select up to 2)
            </div>
            <div className="flex flex-col gap-1 mt-1">
              {[
                "I forget what I studied",
                "My notes are messy or unorganized",
                "I procrastinate a lot",
                "I struggle to plan study sessions",
                "I get distracted easily",
                "I don’t track my progress",
                "Other",
              ].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={coreProblems.includes(opt)}
                    onChange={() =>
                      toggleSelect(opt, setCoreProblems, coreProblems, 2)
                    }
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              ))}
            </div>
            {coreProblems.includes("Other") && (
              <input
                type="text"
                placeholder="Other:"
                className="border border-black py-2 px-2 focus:outline-0 mt-2"
                value={coreProblemsOther}
                onChange={(e) => setCoreProblemsOther(e.target.value)}
              />
            )}

            <textarea
              placeholder="When do you usually feel stuck or overwhelmed while studying?"
              className="border w-full border-black py-2 px-2 focus:outline-0 mt-2"
              value={whenStuck}
              onChange={(e) => setWhenStuck(e.target.value)}
            />
          </div>

          {/* 3. Current Solutions */}
          <div>
            <div className="font-medium">
              Current Solutions (Market Reality Check)
            </div>
            <div className="mt-2">
              How do you currently take notes or plan study sessions?
            </div>
            <div className="flex flex-col gap-1 mt-1">
              {[
                "Notion",
                "Google Docs",
                "Pen & paper",
                "Multiple apps (calendar, notes, timers)",
                "I don’t have a system",
                "Other",
              ].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={currentSolutions.includes(opt)}
                    onChange={() =>
                      toggleSelect(opt, setCurrentSolutions, currentSolutions)
                    }
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              ))}
            </div>
            {currentSolutions.includes("Other") && (
              <input
                type="text"
                placeholder="Other:"
                className="border w-full whitespace-break-spaces resize-none wrap-break-word border-black py-2 px-2 focus:outline-0 mt-2"
                value={currentSolutionsOther}
                onChange={(e) => setCurrentSolutionsOther(e.target.value)}
              />
            )}

            <textarea
              placeholder="What do you dislike about your current setup?"
              className="border w-full border-black py-2 px-2 focus:outline-0 mt-2"
              value={dislikeCurrent}
              onChange={(e) => setDislikeCurrent(e.target.value)}
            />
          </div>

          {/* 4. Feature Validation */}
          <div>
            <div className="font-medium">
              Feature Validation (Build What Matters)
            </div>
            <div className="mt-2">
              Which features would be MOST useful to you in FocusNote? (Select
              up to 3)
            </div>
            <div className="flex flex-col gap-1 mt-1">
              {[
                "Smart note organization",
                "Study session planner",
                "Focus timer (Pomodoro)",
                "Session reminders",
                "Progress tracking / analytics",
                "AI summaries of notes",
                "Distraction-free mode",
                "Daily study goals",
                "Sync notes with sessions",
              ].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={features.includes(opt)}
                    onChange={() => toggleSelect(opt, setFeatures, features, 3)}
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              ))}
            </div>
            {features.includes("Other") && (
              <input
                type="text"
                placeholder="Other:"
                className="border w-full whitespace-break-spaces resize-none wrap-break-word border-black py-2 px-2 focus:outline-0 mt-2"
                value={featuresOther}
                onChange={(e) => setFeaturesOther(e.target.value)}
              />
            )}

            <input
              type="text"
              placeholder="Is there a feature you wish existed but doesn’t?"
              className="border w-full whitespace-break-spaces resize-none wrap-break-word border-black py-2 px-2 focus:outline-0 mt-2"
              value={featuresOther}
              onChange={(e) => setFeaturesOther(e.target.value)}
            />
          </div>

          {/* 5. Willingness & Priority Signal */}
          <div>
            <div className="font-medium">Willingness & Priority Signal</div>
            <div className="mt-2">
              If FocusNote solved your biggest study problem, how often would
              you use it?
            </div>
            {["Daily", "A few times a week", "Occasionally", "Rarely"].map(
              (opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="usageFrequency"
                    checked={usageFrequency === opt}
                    onChange={() => setUsageFrequency(opt)}
                  />
                  <span className="ml-2">{opt}</span>
                </label>
              )
            )}

            <div className="mt-2">
              Would you be open to paying for a premium version if it truly
              helps?
            </div>
            {["Yes", "Maybe", "No"].map((opt) => (
              <label key={opt} className="inline-flex items-center">
                <input
                  type="radio"
                  name="willingToPay"
                  checked={willingToPay === opt}
                  onChange={() => setWillingToPay(opt)}
                />
                <span className="ml-2">{opt}</span>
              </label>
            ))}
          </div>

          {/* 6. Early Adopter Hook */}
          <div>
            <div className="font-medium">Early Adopter Hook</div>
            <div className="mt-2">
              Would you like early access + the chance to influence features?
            </div>
            {["Yes, definitely", "Maybe", "Just here to explore"].map((opt) => (
              <label key={opt} className="inline-flex items-center">
                <input
                  type="radio"
                  name="earlyAccess"
                  checked={earlyAccess === opt}
                  onChange={() => setEarlyAccess(opt)}
                />
                <span className="ml-2">{opt}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-2">
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-700 rounded-lg px-6 py-1 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-green-700 rounded-lg px-6 py-1"
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
