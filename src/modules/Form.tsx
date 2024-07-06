import React, { useState } from "react";

interface FormProps {
  setSalaryPerHour: React.Dispatch<React.SetStateAction<number>>;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  setHoursPerDay: React.Dispatch<React.SetStateAction<number>>;
}

const Form = ({
  setSalaryPerHour,
  setShowResults,
  setHoursPerDay,
}: FormProps) => {
  const [salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("1");
  const [hours, setHours] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const salaryPerHour = parseFloat(
      Number(Number(salary) / (Number(hours) * 30)).toPrecision(2)
    );

    setSalaryPerHour(salaryPerHour);
    setHoursPerDay(parseInt(hours));
    setShowResults(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: boolean
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (type) {
      setSalary(value);
    } else {
      setHours(value);
    }
  };
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  return (
    <form
      className="flex flex-col md:w-1/2 w-full justify-center gap-2 text-center align-middle self-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="amount">Salary (per month)</label>
      <div className="flex flex-row">
        <input
          className="w-1/3 text-center inputbox"
          key="amount"
          inputMode="numeric"
          min="1"
          onChange={(e) => handleInputChange(e, true)}
          value={salary}
          placeholder="Enter your salary"
          required
        />
        <select id="dropdown" value={currency} onChange={handleOptionChange}>
          {" "}
          <option value="1">EGP E£</option>
          <option value="2">USD $</option>
        </select>
      </div>
      <label htmlFor="workingHours">Working Hours per day</label>

      <input
        name="workingHours"
        id="workingHours"
        accept="number"
        inputMode="numeric"
        value={hours}
        className="w-1/3 text-center inputbox"
        placeholder="Enter your working hours per day"
        onChange={(e) => handleInputChange(e, false)}
        required
      />

      <button type="submit" className="border-solid">
        Submit
      </button>
    </form>
  );
};
export default Form;
