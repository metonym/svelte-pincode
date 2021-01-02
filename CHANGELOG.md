# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- Add option to `selectTextOnFocus`

## [1.0.0](https://github.com/metonym/svelte-pincode/releases/tag/v1.0.0) - 2021-01-02

**Features**

- add Pincode `type` prop; default value is "alphanumeric"
- support numeric variant by setting `type="numeric"`
- add reactive Pincode `complete` prop
- remove forwarded `input` event from PincodeInput

**Fixes**

- fix the incorrect value being dispatched in the `on:complete` event detail

## [0.2.0](https://github.com/metonym/svelte-pincode/releases/tag/v0.2.0) - 2021-01-01

- Add `focusFirstInput`, `focusNextEmptyInput`, `focusLastInput` methods

## [0.1.0](https://github.com/metonym/svelte-pincode/releases/tag/v0.1.0) - 2021-01-01

- Initial release
