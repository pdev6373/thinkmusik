interface SubNavType {
  title: string;
  content: NavTypes[];
}

export interface NavTypes {
  name: string;
  route: string;
  subRoutes?: NavTypes[];
  subNav?: SubNavType[];
}

export interface BodyTypes {
  header: string;
  body: string;
  image: string;
}

export interface BodyContainerTypes extends BodyTypes {
  shouldReverse: boolean;
  hasButton: boolean;
}

export interface ButtonType {
  text: string;
  onClick: any;
  type?: "small" | "large";
  isBlack?: boolean;
}

export interface CardTypes {
  header: string;
  body: string;
}
