import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type RestProps = SvelteHTMLElements["input"];

export interface PincodeInputProps extends RestProps {
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

  [key: `data-${string}`]: any;
}

export default class PincodeInput extends SvelteComponentTyped<
  PincodeInputProps,
  {
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
    keydown: WindowEventMap["keydown"];
  },
  {}
> {}
