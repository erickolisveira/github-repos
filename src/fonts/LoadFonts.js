import * as Font from "expo-font";

export default function fetchFonts() {
  return Font.loadAsync({
    "Lato-Regular": require("./Lato-Regular.ttf"),
    "Lato-Bold": require("./Lato-Bold.ttf"),
  })
}
