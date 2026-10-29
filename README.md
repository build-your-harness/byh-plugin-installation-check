# Lifecycle demo

Public acceptance fixture for BYH catalog loading. Version 2.0.2.
The plugin runtime is unchanged except for its displayed version.

The catalog contains one installable plugin and 99 deliberately unavailable
network sentinels. Do not install the sentinels: they verify that browsing and
searching a catalog does not request every recommended repository.

## Four image requests

![Preview one](resources/wire-1.png)

![Preview two](resources/wire-2.png)

![Preview three](resources/wire-3.png)

![Preview four](resources/wire-4.png)

## Diagram

```mermaid
flowchart LR
    Catalog --> Plugin --> Documentation --> Viewer
```
