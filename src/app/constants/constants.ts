enum Items {
  Shawarma,
  TShirt,
  Playstation,
  IPhone,
  Gold_bar,
  Car,
}

interface ItemPriceData {
  price: number;
  description: string;
}
interface ItemData {
  time: number;
  description: string;
}
const getItemsPricesData = (item: Items): ItemPriceData => {
  switch (item) {
    case Items.Shawarma:
      return {
        price: 90,
        description: "Chicken Shawarma sandwich from karam-al-sham",
      };
    case Items.TShirt:
      return {
        price: 350,
        description: "average T-Shirt pricing from online",
      };
    case Items.Playstation:
      return {
        price: 30000,
        description: "Playstation 5 cd model from amazon",
      };
    case Items.IPhone:
      return {
        price: 42550,
        description: "Iphone 15 128gb from premium.eg",
      };
    case Items.Gold_bar:
      return {
        price: 73765,
        description: "24 karat 20g gold_bar from goldera",
      };
    case Items.Car:
      return {
        price: 510400,
        description: "Nissan sunny 2024 from yallamotor",
      };
    default:
      throw new Error("Item not found");
  }
};

const getData = (salaryPerHour: number): ItemData[] => {
  const dataList: ItemData[] = [];
  Object.values(Items)
    .filter((value) => typeof value === "number")
    .forEach((item) => {
      const data = getItemsPricesData(item as Items);
      dataList.push({
        time: data.price / salaryPerHour,
        description: data.description,
      });
      console.log(dataList[dataList.length - 1].time);
    });

  return dataList;
};

export { Items, getData };
export type { ItemData };
