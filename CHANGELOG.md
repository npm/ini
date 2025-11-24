# Changelog

## [Unreleased]

* add multiline parsing/encoding support with `multiline` (parse) and `strictMultiline` (stringify) options

## [6.0.0](https://github.com/npm/ini/compare/v5.0.0...v6.0.0) (2025-10-22)
### ⚠️ BREAKING CHANGES
* `ini` now supports node `^20.17.0 || >=22.9.0`
### Bug Fixes
* [`6d395a4`](https://github.com/npm/ini/commit/6d395a4aaf7d7a5e32e250809cb7bd04c6a27b66) [#291](https://github.com/npm/ini/pull/291) align to npm 11 node engine range (#291) (@owlstronaut)
### Chores
* [`23a36a9`](https://github.com/npm/ini/commit/23a36a9ca194d97486ed367f63d13a2cde1d1ce5) [#290](https://github.com/npm/ini/pull/290) bump @npmcli/template-oss from 4.26.0 to 4.27.1 (#290) (@dependabot[bot], @npm-cli-bot)

## [5.0.0](https://github.com/npm/ini/compare/v4.1.3...v5.0.0) (2024-09-03)
### ⚠️ BREAKING CHANGES
* `ini` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`3eca645`](https://github.com/npm/ini/commit/3eca645de8586b8349acd79211b01a9199d8fd32) [#279](https://github.com/npm/ini/pull/279) align to npm 10 node engine range (@hashtagchris)
### Chores
* [`c89e209`](https://github.com/npm/ini/commit/c89e2090d7989bb91255ec46eaaf5f8cb1c34b34) [#279](https://github.com/npm/ini/pull/279) run template-oss-apply (@hashtagchris)
* [`fc44750`](https://github.com/npm/ini/commit/fc447500efe6523746fd9db9d3123485eed14b76) [#276](https://github.com/npm/ini/pull/276) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`21c20bb`](https://github.com/npm/ini/commit/21c20bb1729005ab46e0f248cea1a881c6ab5b49) [#277](https://github.com/npm/ini/pull/277) postinstall for dependabot template-oss PR (@hashtagchris)
* [`44b3b50`](https://github.com/npm/ini/commit/44b3b503fdd923fb230b6a4d859014b9364ee466) [#277](https://github.com/npm/ini/pull/277) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [4.1.3](https://github.com/npm/ini/compare/v4.1.2...v4.1.3) (2024-05-22)

### Bug Fixes

* [`858cc82`](https://github.com/npm/ini/commit/858cc82dff7eac9ff9a56181132d66d0e09a803c) [#252](https://github.com/npm/ini/pull/252) decoding bracketed arrays (#252) (@Cherry)

### Chores

* [`2da0471`](https://github.com/npm/ini/commit/2da047162452b6c74fbec797c115530547216685) [#251](https://github.com/npm/ini/pull/251) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`1eaf0fb`](https://github.com/npm/ini/commit/1eaf0fb982e6c905342e7fac3cb43574231a22f5) [#251](https://github.com/npm/ini/pull/251) postinstall for dependabot template-oss PR (@lukekarrys)
* [`faf21a1`](https://github.com/npm/ini/commit/faf21a13f35089a8ce5ebea438718c65b5b0e749) [#249](https://github.com/npm/ini/pull/249) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

## [4.1.2](https://github.com/npm/ini/compare/v4.1.1...v4.1.2) (2024-03-04)

### Bug Fixes

* [`e237377`](https://github.com/npm/ini/commit/e237377029caa6fe76b1290eb6e64247e3e11cf3) [#243](https://github.com/npm/ini/pull/243) Removed the unused doUnesc param in the unsafe function (#243) (@LoicE5)

### Documentation

* [`31b3209`](https://github.com/npm/ini/commit/31b3209c45498d1e0f4e38ee5d451ea80b56aa01) [#239](https://github.com/npm/ini/pull/239) Fix typo in `bracketedArray` option name in README.md (#239) (@futpib)
* [`24eb9a0`](https://github.com/npm/ini/commit/24eb9a0a8e5b3de43c993d463314d64f88ca1d50) Reworked README (#235) (@PhoneDroid)
* [`fc6ce28`](https://github.com/npm/ini/commit/fc6ce28a5963aa09d70ad70353397868e99fe804) [#212](https://github.com/npm/ini/pull/212) Fix typo in `bracketedArray` option name in README.md (#212) (@futpib)

### Chores

* [`29caa7c`](https://github.com/npm/ini/commit/29caa7c7578b9ed0b3d36987dc48cec30608d05a) [#240](https://github.com/npm/ini/pull/240) postinstall for dependabot template-oss PR (@lukekarrys)
* [`eafd8f7`](https://github.com/npm/ini/commit/eafd8f75194ba913a5aa23a920c84808452b0f24) [#240](https://github.com/npm/ini/pull/240) bump @npmcli/template-oss from 4.21.1 to 4.21.3 (@dependabot[bot])
* [`5cb0c9f`](https://github.com/npm/ini/commit/5cb0c9f453a190ee5a1d33c590945ca5bafd5fb5) [#238](https://github.com/npm/ini/pull/238) postinstall for dependabot template-oss PR (@lukekarrys)
* [`4ad194e`](https://github.com/npm/ini/commit/4ad194e5f01e67cc52f5a4f1a68e50d596cd51e5) [#238](https://github.com/npm/ini/pull/238) bump @npmcli/template-oss from 4.21.0 to 4.21.1 (@dependabot[bot])
* [`a138d1f`](https://github.com/npm/ini/commit/a138d1f1e210fc5d67c45465265030188b752308) [#233](https://github.com/npm/ini/pull/233) postinstall for dependabot template-oss PR (@lukekarrys)
* [`e37a22e`](https://github.com/npm/ini/commit/e37a22ed0c52ac4f9432fb99357a1d10291d56bb) [#233](https://github.com/npm/ini/pull/233) bump @npmcli/template-oss from 4.19.0 to 4.21.0 (@dependabot[bot])
* [`2f57997`](https://github.com/npm/ini/commit/2f5799792c0f06c6db8a0fcf882c6d7487c4710a) [#215](https://github.com/npm/ini/pull/215) postinstall for dependabot template-oss PR (@lukekarrys)
* [`526d5fe`](https://github.com/npm/ini/commit/526d5fec9d2be1dc4307f6ee7a2994bb9d59d4f6) [#215](https://github.com/npm/ini/pull/215) bump @npmcli/template-oss from 4.18.1 to 4.19.0 (@dependabot[bot])
* [`98de8c2`](https://github.com/npm/ini/commit/98de8c2fb6e640da26546dbcb90fa36af1f3b864) [#214](https://github.com/npm/ini/pull/214) postinstall for dependabot template-oss PR (@lukekarrys)
* [`fd33f54`](https://github.com/npm/ini/commit/fd33f541d8d54967c65b993a59af164448d0c798) [#214](https://github.com/npm/ini/pull/214) bump @npmcli/template-oss from 4.18.0 to 4.18.1 (@dependabot[bot])
* [`21abe16`](https://github.com/npm/ini/commit/21abe160c2314b6a96ce536c05a9b6ca79b394da) [#211](https://github.com/npm/ini/pull/211) postinstall for dependabot template-oss PR (@lukekarrys)
* [`f52bed5`](https://github.com/npm/ini/commit/f52bed502eb4bc1e182d027013b89d8653db9e57) [#211](https://github.com/npm/ini/pull/211) bump @npmcli/template-oss from 4.17.0 to 4.18.0 (@dependabot[bot])
* [`da3b717`](https://github.com/npm/ini/commit/da3b717f81a06ae06f03cc784d56c653839bb66a) [#210](https://github.com/npm/ini/pull/210) postinstall for dependabot template-oss PR (@lukekarrys)
* [`9e9adf4`](https://github.com/npm/ini/commit/9e9adf45e0ad196e9dd76a65ca85047cee909870) [#210](https://github.com/npm/ini/pull/210) bump @npmcli/template-oss from 4.15.1 to 4.17.0 (@dependabot[bot])

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
