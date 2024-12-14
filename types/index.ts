export interface ISelectItem {
  title: string;
  value: string;
}

export interface IFormInput {
  title: string;
  type: "input" | "select";
  name: string;
  placeholder?: string;
  options?: ISelectItem[];
  forms?: Record<string, IFormInput>;
}

export type TChangePayload = Record<string, string | number>;
