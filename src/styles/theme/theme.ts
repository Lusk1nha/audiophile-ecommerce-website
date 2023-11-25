export interface IStyledComponentsTheme {
  sizes: {
    default: string;
    tablet: string;
    desktop: string;
  };
  colors: {
    background: string;
    components: IComponents;
  };
}

export interface IComponents {
  anchor: IAnchor;
}

export interface IAnchor {
  text: string;
  textHover: string;
}
