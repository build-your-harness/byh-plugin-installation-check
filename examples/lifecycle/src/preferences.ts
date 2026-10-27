import { z } from "zod";
import { definePreferences } from "@build-your-harness/plugin-sdk/preferences";

// Keep this entry independent of Vue so BYH can validate settings separately.
export default definePreferences({
  key: "lifecycle-demo",
  settings: [
    {
      key: "demo",
      title: "settings",
      groups: [
        {
          key: "main",
          title: "settings",
          fields: [
            {
              key: "message",
              type: "text",
              title: "message",
              // Used both by the settings form and preference persistence.
              default: "Saved before update",
              schema: z
                .string()
                .refine(
                  (value) => new TextEncoder().encode(value).byteLength <= 2048,
                ),
            },
          ],
        },
      ],
    },
  ],
});
