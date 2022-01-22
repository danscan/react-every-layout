import { PropsWithChildren } from "react";
import { RecodeExcludeZero } from "./RecordExcludeZero";
import type { RecordPropertyValue } from "./RecordPropertyValue";

export type CssPropertiesFC<T extends (...args: any) => any> = (
  props: PropsWithChildren<
    RecodeExcludeZero<RecordPropertyValue<Parameters<T>[0]>>
  >
) => ReturnType<T>;
