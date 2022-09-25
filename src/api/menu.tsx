import { LocationName, locationNameToId } from "../utils";

export default async function getMenu(locationName: LocationName) {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  // TODO refactor to use queryparams
  const response = await fetch(
    `https://smu.campusdish.com/api/menu/GetMenus?locationId=${locationNameToId(
      locationName
    )}&storeIds=&mode=Daily&date=09/24/2022&time=&periodId=1303&fulfillmentMethod=`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch menu");
  }

  const data = await response.json();
  console.log(data);
  return data;
}
