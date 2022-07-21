<script>
  /** @type {any} */
  export let value = "";
  export let id = "input" + Math.random().toString(36);
  export let ref = null;

  import { getContext, onMount } from "svelte";

  let type;
  let selectTextOnFocus;

  const ctx = getContext("Pincode");
  const unsubscribeType = ctx._type.subscribe((_type) => {
    type = _type;
  });
  const unsubscribeSelectTextOnFocus = ctx._selectTextOnFocus.subscribe((_selectTextOnFocus) => {
    selectTextOnFocus = _selectTextOnFocus;
  });
  const KEYBOARD = {
    CONTROL: 17,
    COMMAND: 91,
    V: 86,
    TAB: 9,
    BACKSPACE: 8,
  };

  let unsubscribe = undefined;
  let modifierKeyDown = false;

  onMount(() => {
    ctx.add(id, value);

    unsubscribe = ctx._valuesById.subscribe((_) => {
      value = _[id] || "";
    });

    return () => {
      ctx.remove(id);
      unsubscribe();
      unsubscribeType();
      unsubscribeSelectTextOnFocus();
    };
  });
</script>

<input
  bind:this="{ref}"
  {...$$restProps}
  type="{type === 'numeric' ? 'number' : 'text'}"
  inputmode="{type === 'numeric' ? 'numeric' : 'text'}"
  pattern="{type === 'numeric' ? '[0-9]{1}' : '^[a-zA-Z0-9]$'}"
  maxlength="1"
  value="{value}"
  on:focus
  on:focus="{() => {
    if (selectTextOnFocus) ref.select();
  }}"
  on:blur
  on:keydown
  on:keydown="{(e) => {
    if (e.keyCode === KEYBOARD.BACKSPACE) {
      e.preventDefault();
      return ctx.clear(id);
    }

    if (e.keyCode == KEYBOARD.CONTROL || e.keyCode == KEYBOARD.COMMAND) {
      modifierKeyDown = true;
    }

    if (e.keyCode == KEYBOARD.V && modifierKeyDown) {
      return;
    }

    if (e.keyCode !== KEYBOARD.TAB) {
      e.preventDefault();

      if (type === 'numeric' && /^[0-9]$/.test(e.key)) {
        ctx.update(id, e.key);
      }

      if (type === 'alphanumeric' && /^[a-zA-Z0-9]$/.test(e.key)) {
        ctx.update(id, e.key);
      }
    }
  }}"
  on:keyup="{(e) => {
    if (e.keyCode == KEYBOARD.CONTROL || e.keyCode == KEYBOARD.COMMAND) {
      modifierKeyDown = false;
    }
  }}"
/>

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
