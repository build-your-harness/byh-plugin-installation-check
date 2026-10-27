import { h } from "vue";
import { ok } from "neverthrow";
import { definePlugin } from "@build-your-harness/plugin-sdk";
import Demo from "./Demo.vue";
import DemoWindow from "./DemoWindow.vue";
import preferences from "./preferences";

export default definePlugin({
  // Local key only: BYH assigns the full identity when installing the package.
  key: "lifecycle-demo",
  i18n: {
    en: {
      title: "Lifecycle demo",
      message: "Saved message",
      theme: "Demo theme",
      settings: "Demo preferences",
    },
  },
  // Application contributions also work without an active space.
  app: {
    preferences,
    themes: [
      {
        key: "demo",
        title: "theme",
        colorScheme: "dark",
        ui: {
          background: "#191D1F",
          surface: "#20272A",
          foreground: "#E2E9E8",
          muted: "#A1AEAC",
          border: "#354244",
          accent: "#B6D8CB",
          selection: "#2D3E3A",
          hover: "#2D383A",
          error: "#F09898",
        },
      },
    ],
    windows: [
      {
        key: "demo",
        title: "title",
        kind: "window",
        component: DemoWindow,
        sizing: { mode: "content" },
      },
    ],
    // BYH supplies preferences, translations and window operations here.
    create: (context) =>
      ok({
        panels: [
          {
            key: "demo",
            title: "title",
            icon: "notebook-pen",
            defaultPlacement: "right-top",
            component: () => h(Demo, { context }),
          },
        ],
      }),
  },
});
