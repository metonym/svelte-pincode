/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export type Code = string[];

export interface PincodeProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
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
}

export default class Pincode extends SvelteComponentTyped<
  PincodeProps,
  { complete: CustomEvent<{ code: Code; value: string }> },
  { default: {} }
> {
  focusFirstInput?: () => void;
  focusNextEmptyInput?: () => void;
  focusLastInput?: () => void;
}
