<script lang="ts">
  import { onMount } from "svelte";
  import { Pincode, PincodeInput } from "svelte-pincode";
  import type { Code } from "svelte-pincode/src/Pincode.svelte";
  import UPincode, { Code as Code2 } from "svelte-pincode/src/unstyled/Pincode.svelte";
  import UPincodeInput, { type PincodeInputProps } from "svelte-pincode/src/unstyled/PincodeInput.svelte";

  const correctCode = "1234";

  let ref: Pincode;
  let code: Code | Code2 = [];
  let value = "";
  let inputProps: PincodeInputProps = { value: "" };

  $: complete = value.length === correctCode.length;
  $: success = complete && value === correctCode;
  $: error = complete && !success;

  onMount(() => {
    ref.focusFirstInput?.();
    ref.focusNextEmptyInput?.();
    ref.focusLastInput?.();
  });
</script>

<Pincode
  type="numeric"
  bind:this="{ref}"
  bind:code
  bind:value
  on:complete="{(e) => {
    console.log(e.detail);
  }}"
  on:clear
>
  <PincodeInput on:focus on:blur on:keydown />
  <PincodeInput {...inputProps} />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<div class:complete class:success class:error>
  {#if !complete}{correctCode.length - value.length} more...{/if}
  {#if success}Correct code!{/if}
  {#if error}Incorrect code.{/if}
</div>

<UPincode
  type="numeric"
  bind:this="{ref}"
  bind:code
  bind:value
  on:complete="{(e) => {
    console.log(e.detail);
  }}"
>
  <UPincodeInput on:focus on:blur on:keydown />
</UPincode>
