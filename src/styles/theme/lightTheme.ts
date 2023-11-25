import { Colors } from "./colors";
import { IStyledComponentsTheme } from "./theme";

const LightTheme: IStyledComponentsTheme = {
  sizes: {
    default: "0px",
    tablet: "768px",
    desktop: "1250px",
  },
  colors: {
    background: Colors.Lotion,
    components: {
      anchor: {
        text: Colors.White,
        textHover: Colors.Peru,
      },
    },
  },
};

export { LightTheme };
