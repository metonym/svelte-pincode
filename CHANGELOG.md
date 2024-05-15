# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- ## Unreleased -->

## [2.2.1](https://github.com/metonym/svelte-pincode/releases/tag/v2.2.1) - 2024-05-14

**Fixes**

- update TypeScript definitions to support Svelte 4
- add `exports` field to `package.json`

## [2.2.0](https://github.com/metonym/svelte-pincode/releases/tag/v2.2.0) - 2022-10-30

**Features**

- dispatch `clear` event when value is cleared

## [2.1.3](https://github.com/metonym/svelte-pincode/releases/tag/v2.1.3) - 2022-10-26

**Fixes**

- avoid double firing `on:complete` event

## [2.1.2](https://github.com/metonym/svelte-pincode/releases/tag/v2.1.2) - 2022-09-17

**Fixes**

- set `type: "module"` in `package.json`

## [2.1.1](https://github.com/metonym/svelte-pincode/releases/tag/v2.1.1) - 2022-08-26

**Fixes**

- remove whitespace when pasting

## [2.1.0](https://github.com/metonym/svelte-pincode/releases/tag/v2.1.0) - 2022-07-27

**Features**

- add paste support

## [2.0.1](https://github.com/metonym/svelte-pincode/releases/tag/v2.0.1) - 2021-11-10

**Fixes**

- remove `.DS_Store` from published `src`

## [2.0.0](https://github.com/metonym/svelte-pincode/releases/tag/v2.0.0) - 2021-11-10

**Breaking Changes**

- drop support for ESM/UMD formats
- move type definitions to the `src` folder

**Fixes**

- export non-default props in unstyled component types

## [1.3.0](https://github.com/metonym/svelte-pincode/releases/tag/v1.3.0) - 2021-07-31

**Features**

- support pasting a pincode in Safari

**Fixes**

- type `Pincode` focus methods as `SvelteComponentTyped` accessors instead of props

## [1.2.0](https://github.com/metonym/svelte-pincode/releases/tag/v1.2.0) - 2021-05-11

**Features**

- ship unstyled Pincode components (available in the `svelte-pincode/src/unstyled` folder)

## [1.1.1](https://github.com/metonym/svelte-pincode/releases/tag/v1.1.1) - 2021-01-03

**Fixes**

- use default behavior for Tab key

## [1.1.0](https://github.com/metonym/svelte-pincode/releases/tag/v1.1.0) - 2021-01-02

**Fixes**

- add Pincode `selectTextOnFocus` prop to select the text when focusing the input element

## [1.0.0](https://github.com/metonym/svelte-pincode/releases/tag/v1.0.0) - 2021-01-02

**Features**

- add Pincode `type` prop; default value is "alphanumeric"
- support numeric variant by setting `type="numeric"`
- add reactive Pincode `complete` prop
- remove forwarded `input` event from PincodeInput

**Fixes**

- fix the incorrect value being dispatched in the `on:complete` event detail

## [0.2.0](https://github.com/metonym/svelte-pincode/releases/tag/v0.2.0) - 2021-01-01

**Features**

- add `focusFirstInput`, `focusNextEmptyInput`, `focusLastInput` methods

## [0.1.0](https://github.com/metonym/svelte-pincode/releases/tag/v0.1.0) - 2021-01-01

- initial release
