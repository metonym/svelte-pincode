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
}

export default class Pincode extends SvelteComponentTyped<
  PincodeProps,
  { complete: CustomEvent<{ code: Code }> },
  { default: {} }
> {}
