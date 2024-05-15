import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type Code = string[];

type RestProps = SvelteHTMLElements["div"];

export interface PincodeProps extends RestProps {
  /**
   * @default []
   */
  code?: Code;

  /**
   * @default ""
   */
  value?: string;

  /**
   * @default "alphanumeric"
   */
  type?: "alphanumeric" | "numeric";

  /**
   * `true` if all inputs have a value
   * @default false
   */
  complete?: boolean;

  /**
   * @default false
   */
  selectTextOnFocus?: boolean;

  [key: `data-${string}`]: any;
}

export default class Pincode extends SvelteComponentTyped<
  PincodeProps,
  {
    complete: CustomEvent<{ code: Code; value: string }>;
    clear: CustomEvent<null>;
  },
  { default: {} }
> {
  focusFirstInput: () => void;

  focusNextEmptyInput: () => void;

  focusLastInput: () => void;
}
