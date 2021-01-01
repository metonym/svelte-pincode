<script lang="ts">
  import { onMount } from "svelte";

  import { Pincode, PincodeInput } from "./types";
  import { Code } from "./types/Pincode";

  const correctCode = "1234";

  let ref: Pincode;
  let code: Code = [];
  let value = "";

  $: complete = value.length === correctCode.length;
  $: success = complete && value === correctCode;
  $: error = complete && !success;

  onMount(() => {
    ref.focusFirstInput();
    ref.focusNextEmptyInput();
    ref.focusLastInput();
  });
</script>

<Pincode
  bind:this="{ref}"
  bind:code
  bind:value
  on:complete="{(e) => {
    console.log(e.detail);
  }}"
>
  <PincodeInput on:focus on:blur on:input on:keydown />
  <PincodeInput />
  <PincodeInput />
  <PincodeInput />
</Pincode>

<div class:complete class:success class:error>
  {#if !complete}{correctCode.length - value.length} more...{/if}
  {#if success}Correct code!{/if}
  {#if error}Incorrect code.{/if}
</div>
