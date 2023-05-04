export interface NavTypes {
  name: string;
  route: string;
}

export interface BodyTypes {
  header: string;
  body: string;
  image: string;
}

export interface BodyContainerTypes extends BodyTypes {
  shouldReverse: boolean;
}

export interface ButtonType {
  text: string;
  onClick: any;
  type?: "small" | "large";
}

export interface CardTypes {
  header: string;
  body: string;
}
