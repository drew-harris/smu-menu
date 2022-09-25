export type LocationName = "lee" | "arnold";
export function locationNameToId(location: LocationName): number {
  if (location === "arnold") {
    return 7326;
  } else {
    return 1058;
  }
}
