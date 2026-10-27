<script setup lang="ts">
import { WindowForm, Button } from "@build-your-harness/ui";
import type {
  OrdinaryWindowContext,
  PreferencesContext,
} from "@build-your-harness/plugin-sdk";
import Demo from "./Demo.vue";

defineOptions({ inheritAttrs: false });

const { context } = defineProps<{
  context: OrdinaryWindowContext<PreferencesContext>;
}>();
</script>
<template>
  <WindowForm>
    <Demo :context="context" />
    <template #actions
      ><Button label="Close" @press="context.close"
    /></template>
  </WindowForm>
</template>
