import React from "react";
import SerialContributionForm from "../Components/SerialContribution/SerialContribution";
import CitContainer from "../Components/Container";

const InPrintJournal = () => {
  return (
    <CitContainer title="In-Print Journal">
      <SerialContributionForm type="print" />
    </CitContainer>
  );
};

export default InPrintJournal;
