import Form from "@/modules/Form";
import MainArea from "@/modules/MainArea";
import { Great_Vibes } from "next/font/google";

const great_vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <>
      <div className="items-center justify-center w-full text-center">
        <h1 className="text-5xl">
          Time is{" "}
          <span className={great_vibes.className + " text-green-500"}>
            Money
          </span>
        </h1>
        <MainArea />
      </div>
    </>
  );
}
