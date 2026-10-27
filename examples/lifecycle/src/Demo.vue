<script setup lang="ts">
import { ref } from "vue";
import {
  Stack,
  Text,
  TextField,
  Button,
  InlineNotice,
} from "@build-your-harness/ui";
import type { PreferencesContext } from "@build-your-harness/plugin-sdk";
import { version } from "./release";

defineOptions({ inheritAttrs: false });

const { context } = defineProps<{ context: PreferencesContext }>();
// Local view state; unlike preferences, this counter is not persisted.
const count = ref(0);
const error = ref("");

// This panel saves directly. The host settings page uses Apply / Cancel.
function save(message: string) {
  void context.preferences.update({ message }).mapErr((failure) => {
    error.value = failure.code;
    return failure;
  });
}
</script>
<template>
  <Stack padding="section">
    <Text>Lifecycle demo {{ version }}</Text>
    <TextField
      :label="context.t('message')"
      :model-value="String(context.preferences.values.value.message ?? '')"
      @update:model-value="save"
    />
    <Text>Shared Vue reactive count: {{ count }}</Text>
    <Button label="Increment" @press="count++" />
    <Button label="Open demo window" @press="context.windows.open('demo')" />
    <InlineNotice v-if="error" level="error" :message="error" />
  </Stack>
</template>
