# Lifecycle demo

Public installation and documentation-viewer fixture for Build Your Harness.
Version 2.0.1. The plugin code is unchanged except for its displayed version.

![Documentation ready](https://img.shields.io/badge/documentation-ready-green)

## Image preview

Open this package image in a viewer tab and reopen BYH to check restoration.

![Connection color swatches](resources/preview.png)

## Diagram

```mermaid
flowchart LR
  Catalog --> Plugin
  Plugin --> Documentation
  Documentation --> Viewer
```

<details><summary>About this check</summary><p>This public test plugin has no backend or external service. Images use the host documentation loader.</p></details>

[Change notes](CHANGELOG.md)
