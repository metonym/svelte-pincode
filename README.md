# svelte-pincode

[![NPM][npm]][npm-url]

> Pincode component for Svelte.

Try it in the [Svelte REPL](https://svelte.dev/repl/2841eef46bfb49c4a848a2a063602e5d?version=3.31.0).

<!-- TOC -->

## Quick Start

```bash
yarn add -D svelte-pincode
# OR
npm i -D svelte-pincode
```

## Usage

### Basic

Bind to either the `code` or `value` prop.

- **`code`** (`string[]`): Array of input values. An empty string represents an undefined value.
- **`value`** (`string`): The `code` props as a string (i.e., `code.join('')`)

<!-- prettier-ignore-start -->
```svelte
<script>
  import { Pincode, PincodeInput } from "svelte-pincode";

  let code = [];
  let value = '';
</script>

<Pincode bind:code bind:value>
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<div>code: <code>{JSON.stringify(code)}</code></div>
<div>value: <code>{JSON.stringify(value)}</code></div>
```
<!-- prettier-ignore-end -->

### Numeric variant

By default, this component accepts alphanumeric values.

Set `type="numeric"` to only allow numbers (i.e., `0-9`).

<!-- prettier-ignore-start -->
```svelte
<Pincode type="numeric">
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>
```
<!-- prettier-ignore-end -->

### Initial values

Define intitial input values by using the `code` prop or `value` prop on `PincodeInput`.

<!-- prettier-ignore-start -->
```svelte
<script>
  let pincode = ["1", "", "3"];
</script>

<Pincode bind:code={pincode}>
  <PincodeInput />
  <PincodeInput value="2" />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<div>code: <code>{JSON.stringify(pincode)}</code></div>
```
<!-- prettier-ignore-end -->

### Completion & error states

Validation is left to the consumer.

This example illustrates how you can validate the code once all inputs have a value.

`value` is simply the `code` array joined as a string.

<!-- prettier-ignore-start -->
```svelte
<script>
  const correctCode = "1234";

  let inputValue = '';

  $: complete = inputValue.length === correctCode.length;
  $: success = complete && inputValue === correctCode;
  $: error = complete && !success;
</script>

<Pincode bind:value={inputValue}>
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<div class:complete class:success class:error>
  {#if !complete}
    Enter {correctCode.length - inputValue.length} more digit(s)...
  {/if}
  {#if success}Correct code!{/if}
  {#if error}Incorrect code.{/if}
</div>
```
<!-- prettier-ignore-end -->

### Programmatic usage

`code` can be set programmatically.

Type in some initial values and then try setting or clearing the code using the buttons.

<!-- prettier-ignore-start -->
```svelte
<script>
  let passcode = [];
</script>

<Pincode bind:code={passcode}>
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<div>code: <code>{JSON.stringify(passcode)}</code></div>

<button type="button" on:click={() => passcode = ['1', '2', '3', '4']}>
  Set code
</button>

<button type="button" on:click={() => passcode = ['', '', '', '']}>
  Clear code
</button>
```
<!-- prettier-ignore-end -->

### Focus first input

To programmatically focus the first input, invoke the `focusFirstInput` method on a component reference.

<!-- prettier-ignore-start -->
```svelte
<script>
  let ref;
</script>

<Pincode bind:this={ref}>
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<br />

<button type="button" on:click={ref.focusFirstInput}>
  Focus first input
</button>
```
<!-- prettier-ignore-end -->

### Focus next empty input

To focus the next input with no value, invoke the `focusNextEmptyInput` method.

<!-- prettier-ignore-start -->
```svelte
<script>
  let pincodeRef;
</script>

<Pincode code={["9", "9"]} bind:this={pincodeRef}>
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<br />

<button type="button" on:click={pincodeRef.focusNextEmptyInput}>
  Focus next empty input
</button>
```
<!-- prettier-ignore-end -->

### Focus last input

To focus the last input, invoke the `focusLastInput` method.

<!-- prettier-ignore-start -->
```svelte
<script>
  let passcodeRef;
</script>

<Pincode bind:this={passcodeRef}>
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<br />

<button type="button" on:click={passcodeRef.focusLastInput}>
  Focus last input
</button>
```
<!-- prettier-ignore-end -->

## Styling

This component is minimally styled.

Default styles:

```css
/** Pincode **/
[data-pincode] {
  display: inline-flex;
  border: 1px solid #e0e0e0;
}

/** PincodeInput */
input {
  width: 3rem;
  padding: 0.5rem 1rem;
  margin: 0;
  border: 0;
  border-radius: 0;
  text-align: center;
}

input:focus {
  z-index: 1;
}

input:not(:last-of-type) {
  border-right: 1px solid #e0e0e0;
}
```

## API

### Pincode

#### Props

| Prop name           | Value                                                      |
| :------------------ | :--------------------------------------------------------- |
| code                | `string[]` (default: `[]`)                                 |
| value               | `string` (default: `""`)                                   |
| type                | `"alphanumeric"` or `"numeric"` (defaul: `"alhpanumeric"`) |
| focusFirstInput     | `() => void`                                               |
| focusNextEmptyInput | `() => void`                                               |
| focusLastInput      | `() => void`                                               |

#### Dispatched Events

- **on:complete**: fired when all inputs have a value

```html
<Pincode
  on:complete="{(e) => {
    console.log(e.detail); // { code: string[]; value: string; }
  }}"
/>
```

### PincodeInput

#### Props

| Prop name | Value                                                      |
| :-------- | :--------------------------------------------------------- |
| id        | `string` (default: `"input" + Math.random().toString(36)`) |
| ref       | `HTMLInputElement` (default: `null`)                       |

#### Forwarded Events

- on:focus
- on:blur
- on:keydown

## TypeScript

`svelte` version 3.31 or greater is required to use this component with TypeScript.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-pincode.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-pincode
