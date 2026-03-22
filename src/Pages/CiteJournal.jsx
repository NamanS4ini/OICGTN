import React, { useState } from 'react';
import SerialForm from '../Components/Serial/SerialForm';
import SerialContributionForm from '../Components/SerialContribution/SerialContribution';

const CiteJournal = () => {
  const [selectedForm, setSelectedForm] = useState('journal');

  const renderForm = () => {
    switch (selectedForm) {
      case 'journal':
        return <SerialForm />;
      case 'ejournal':
        return <SerialForm type="E" />;
      case 'contribution':
        return <SerialContributionForm />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedForm('journal')}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === 'journal'
              ? 'bg-green-600 text-white'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          Journal
        </button>
        <span className="text-gray-400 text-xl">|</span>
        <button
          onClick={() => setSelectedForm('ejournal')}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === 'ejournal'
              ? 'bg-green-600 text-white'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          E-Journal
        </button>
        <span className="text-gray-400 text-xl">|</span>
        <button
          onClick={() => setSelectedForm('contribution')}
          className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
            selectedForm === 'contribution'
              ? 'bg-green-600 text-white'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          Journal Contribution
        </button>
      </div>
      <div className="w-full">{renderForm()}</div>
    </div>
  );
};

export default CiteJournal;
