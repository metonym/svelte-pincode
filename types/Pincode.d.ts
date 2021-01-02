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
   * @constant
   * @default () => { ref.querySelector("input").focus(); }
   */
  focusFirstInput?: () => void;

  /**
   * @constant
   * @default () => { for (const input of ref.querySelectorAll("input")) { if (input.value.length === 0) { input.focus(); break; } } }
   */
  focusNextEmptyInput?: () => void;

  /**
   * @constant
   * @default () => { ref.querySelector("input:last-of-type").focus(); }
   */
  focusLastInput?: () => void;
}

export default class Pincode extends SvelteComponentTyped<
  PincodeProps,
  { complete: CustomEvent<{ code: Code; value: string }> },
  { default: {} }
> {}
