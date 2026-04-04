import React, { useState } from "react";
import SerialContributionForm from "../Components/SerialContribution/SerialContribution";

const CiteJournal = () => {
  const [selectedForm, setSelectedForm] = useState("inprint");

  const renderForm = () => {
    switch (selectedForm) {
      case "inprint":
        return <SerialContributionForm type="print" />;
      case "online":
        return <SerialContributionForm type="online" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedForm("inprint")}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === "inprint"
              ? "bg-green-600 text-white"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          In-Print Journal
        </button>
        <span className="text-gray-400 text-xl hidden sm:inline">|</span>
        <button
          onClick={() => setSelectedForm("online")}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === "online"
              ? "bg-green-600 text-white"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Online Journal
        </button>
      </div>
      <div className="mx-auto w-full max-w-6xl" key={selectedForm}>
        {renderForm()}
      </div>
    </div>
  );
};

export default CiteJournal;
