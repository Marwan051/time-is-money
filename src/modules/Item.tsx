import { Items } from "@/app/constants/constants";
import getIcon from "@/app/constants/icons";
import React from "react";
import CountUp from "react-countup";

interface ItemProps {
  item: number;
  description: string;
  time: number;
  hoursPerDay: number;
}

const Item = ({ description, item, time, hoursPerDay }: ItemProps) => {
  let hoursRemaining = time;
  const years = Math.floor(hoursRemaining / 8765);
  hoursRemaining %= 8760;
  const months = Math.floor(hoursRemaining / 730.5);
  hoursRemaining %= 730.5;
  const days = Math.floor(hoursRemaining / 24);
  hoursRemaining %= 24;
  const hours = hoursRemaining;
  return (
    <div className="h-full items-center justify-center flex lg:text-3xl text-xl ">
      <div className="flex flex-col h-full items-center justify-center">
        <div className="text-5xl">{getIcon(item)}</div>
        <div className="flex xl:text-5xl text-3xl flex-col">
          {years > 0 && (
            <span>
              <CountUp start={0} end={years} duration={3} />{" "}
              <span className="">years</span>
            </span>
          )}
          {months > 0 && (
            <span>
              <CountUp start={0} end={months} duration={3} delay={1} />{" "}
              <span className="">months</span>
            </span>
          )}
          {days > 0 && (
            <span>
              <CountUp start={0} end={days} duration={3} delay={2} />{" "}
              <span className="">days</span>
            </span>
          )}
          {hoursRemaining > 0 && (
            <span>
              <CountUp start={0} end={hoursRemaining} duration={3} delay={3} />{" "}
              <span className="">hours</span>
            </span>
          )}
        </div>
        <div className=" my-2">{Items[item]}</div>
        <div className=" text-balance">{description}</div>
      </div>
    </div>
  );
};

export default Item;
