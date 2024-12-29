export interface ITypeButtonIcon {
  key: number;
  text: string;
  icon: any;
  link: string | ((id: string) => string);
}
