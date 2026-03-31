import React, { useState } from "react";
import BooksForm from "../Components/BookMonograph/BooksForm";
import ContributionForm from "../Components/ContributionWithinBook/ContributionForm";

const CiteBook = () => {
  const [selectedForm, setSelectedForm] = useState("book");

  const renderForm = () => {
    switch (selectedForm) {
      case "book":
        return <BooksForm />;
      case "ebook":
        return <BooksForm type="e" />;
      case "contribution":
        return <ContributionForm />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedForm("book")}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === "book"
              ? "bg-blue-600 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Book
        </button>
        <span className="text-gray-400 text-xl hidden sm:inline">|</span>
        <button
          onClick={() => setSelectedForm("ebook")}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === "ebook"
              ? "bg-blue-600 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          e-Book
        </button>
        <span className="text-gray-400 text-xl hidden sm:inline">|</span>
        <button
          onClick={() => setSelectedForm("contribution")}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === "contribution"
              ? "bg-blue-600 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Book Contribution
        </button>
      </div>

      <div className="mx-auto w-full max-w-6xl" key={selectedForm}>
        {renderForm()}
      </div>
    </div>
  );
};

export default CiteBook;
