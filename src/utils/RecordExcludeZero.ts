export type RecodeExcludeZero<T> = {
  [P in keyof T]: Exclude<T[P], 0>;
};
