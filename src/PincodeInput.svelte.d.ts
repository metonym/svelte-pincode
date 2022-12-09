/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PincodeInputProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["input"]> {
  /**
   * @default ""
   */
  value?: any;

  /**
   * @default "input" + Math.random().toString(36)
   */
  id?: string;

  /**
   * @default null
   */
  ref?: null | HTMLInputElement;
}

export default class PincodeInput extends SvelteComponentTyped<
  PincodeInputProps,
  {
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
    input: WindowEventMap["input"];
    keydown: WindowEventMap["keydown"];
  },
  {}
> {}
