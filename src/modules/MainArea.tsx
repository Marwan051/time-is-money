"use client";

import { useState } from "react";
import Form from "./Form";
import Results from "./Results";

const MainArea = () => {
  const [salaryPerHour, setSalaryPerHour] = useState(0);
  const [hoursPerDay, setHoursPerDay] = useState(0);
  const [showResults, setShowResults] = useState(false);
  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <Form
        setHoursPerDay={setHoursPerDay}
        setSalaryPerHour={setSalaryPerHour}
        setShowResults={setShowResults}
      />
      {showResults ? (
        <Results salaryPerHour={salaryPerHour} hoursPerDay={hoursPerDay} />
      ) : null}
    </div>
  );
};

export default MainArea;
