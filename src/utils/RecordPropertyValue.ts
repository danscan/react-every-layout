import type { PropertyValue } from "csstype";

export type RecordPropertyValue<T> = {
  [P in keyof T]: PropertyValue<T[P]>;
};
