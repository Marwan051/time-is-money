import { getData, ItemData } from "@/app/constants/constants";
import React from "react";
import Item from "./Item";

interface ResultsProbs {
  salaryPerHour: number;
  hoursPerDay: number;
}

const Results = ({ salaryPerHour, hoursPerDay }: ResultsProbs) => {
  const pricesData: ItemData[] = getData(salaryPerHour);
  return (
    <>
      <div className="text-5xl ">Salary per hour: {salaryPerHour}</div>
      <div className="h-screen grid grid-cols-3 grid-rows-3 text-center items-center align-middle justify-center">
        {pricesData.map((data, index) => {
          return (
            <Item
              hoursPerDay={hoursPerDay}
              key={index}
              time={data.time}
              item={index}
              description={data.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Results;
