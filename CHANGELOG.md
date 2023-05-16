# Changelog

## [4.1.1](https://github.com/npm/ini/compare/v4.1.0...v4.1.1) (2023-05-16)

### Bug Fixes

* [`090f64e`](https://github.com/npm/ini/commit/090f64e92a7ff722adf723dc13e7b468e591f057) [#208](https://github.com/npm/ini/pull/208) check process on browser (#208) (@Creskendoll)

## [4.1.0](https://github.com/npm/ini/compare/v4.0.0...v4.1.0) (2023-04-13)

### Features

* [`622106a`](https://github.com/npm/ini/commit/622106a1a0bcd2bc32bfd2e6f9cc45a1a1cb53f7) [#205](https://github.com/npm/ini/pull/205) add "align" and "sort" options (#205) (@rquadling)
* [`dc64a1a`](https://github.com/npm/ini/commit/dc64a1a3aa322c0c258383bedcae738aaa67028d) [#204](https://github.com/npm/ini/pull/204) add bracketedArray option (#204) (@wraithgar)
* [`6a3cb38`](https://github.com/npm/ini/commit/6a3cb38b134f674dff1a7b5d3732553e8bace777) [#199](https://github.com/npm/ini/pull/199) add platform option to force line endings (#199) (@wraithgar, Francois-Xavier Kowalski)
* [`b363ae6`](https://github.com/npm/ini/commit/b363ae67ddf9b1232daafb3cc2b2b1e5cb656406) [#198](https://github.com/npm/ini/pull/198) add newline option (#198) (@wraithgar, Francois-Xavier Kowalski)

### Bug Fixes

* [`ad4b5d8`](https://github.com/npm/ini/commit/ad4b5d8423f67d67b8683ac8e809b9dd23fe82e2) [#200](https://github.com/npm/ini/pull/200) Refactored section split logic (#200) (@wraithgar, @platinumazure)
* [`5b5c9b7`](https://github.com/npm/ini/commit/5b5c9b777209bae480f62fb80149008350d37bc5) [#123](https://github.com/npm/ini/pull/123) residual space after section causes bad parsing (#123) (@Nautigsam)
* [`fa2c17e`](https://github.com/npm/ini/commit/fa2c17e6e5f4ebaec30e08653b9603049c8cf0c3) [#201](https://github.com/npm/ini/pull/201) ignore all whitespace lines (#201) (@wraithgar)

## [4.0.0](https://github.com/npm/ini/compare/v3.0.1...v4.0.0) (2023-03-08)

### ⚠️ BREAKING CHANGES

* `ini` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`6b70a48`](https://github.com/npm/ini/commit/6b70a480a47cac47b2da4ec40aba6b9b4bb77608) [#176](https://github.com/npm/ini/pull/176) postinstall for dependabot template-oss PR (@lukekarrys)

## [3.0.1](https://github.com/npm/ini/compare/v3.0.0...v3.0.1) (2022-08-22)


### Bug Fixes

* linting ([#166](https://github.com/npm/ini/issues/166)) ([5d9ab39](https://github.com/npm/ini/commit/5d9ab392643a93358e1d7595e8efb3d6d97d1181))

## [3.0.0](https://github.com/npm/ini/compare/v2.0.1...v3.0.0) (2022-04-05)


### ⚠ BREAKING CHANGES

* this drops support for node 10 and non-LTS versions of node 12 and node 14

### Bug Fixes

* replace deprecated String.prototype.substr() ([#155](https://github.com/npm/ini/issues/155)) ([e3a5d18](https://github.com/npm/ini/commit/e3a5d183269744f6b590c1a9916ef151de09bf64))


### Dependencies

* @npmcli/template-oss@3.2.2 ([#156](https://github.com/npm/ini/issues/156)) ([837831a](https://github.com/npm/ini/commit/837831a44ba1f04f62a9d0b369525a4f8d8116e9))
