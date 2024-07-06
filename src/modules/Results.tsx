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
      <div className="md:text-4xl text-3xl">
        Salary per hour: {salaryPerHour}
        <br />
        <i className="text-balance md:text-xl text-lg font-bold">
          The Duration is the amount of time worked not regular days
        </i>
      </div>
      <div className="h-full grid md:grid-cols-3 md:grid-rows-3 grid-cols-2 grid-rows-3 text-center items-center align-middle justify-center">
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
