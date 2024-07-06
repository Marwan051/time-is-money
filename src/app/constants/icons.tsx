import { Items } from "./constants";
import { AiFillGolden } from "react-icons/ai";
import { MdOutlinePhoneIphone, MdFastfood } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { GiConsoleController } from "react-icons/gi";
import { FaCar, FaTshirt } from "react-icons/fa";

const getIcon = (item: Items) => {
  switch (item) {
    case Items["Shawarma"]:
      return <MdFastfood />;
    case Items["Playstation"]:
      return <GiConsoleController />;
    case Items["IPhone"]:
      return <MdOutlinePhoneIphone />;
    case Items["Gold_bar"]:
      return <AiFillGolden />;
    case Items["Car"]:
      return <FaCar />;
    case Items["TShirt"]:
      return <FaTshirt />;
    default:
      return;
  }
};

export default getIcon;
