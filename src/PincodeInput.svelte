<script>
  /** @type {any} */
  export let value = "";
  export let id = "input" + Math.random().toString(36);
  export let ref = null;

  import { getContext, onMount } from "svelte";

  const ctx = getContext("Pincode");

  let unsubscribe = undefined;

  onMount(() => {
    ctx.add(id, value);

    unsubscribe = ctx._valuesById.subscribe((_) => {
      value = _[id] || "";
    });

    return () => {
      ctx.remove(id);
      unsubscribe();
    };
  });
</script>

<style>
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
</style>

<input
  bind:this="{ref}"
  {...$$restProps}
  type="text"
  inputmode="numeric"
  pattern="[0-9]{1}"
  maxlength="1"
  value="{value}"
  on:focus
  on:blur
  on:input
  on:input="{(e) => {
    ctx.update(id, e.target.value);
  }}"
  on:keydown
  on:keydown="{(e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      ctx.clear(id);
    }
  }}"
/>
