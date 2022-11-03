<script lang="ts" setup>
  import { computed } from 'vue';

  interface Props {
    title: string;
    value: string;
  }

  interface Emits {
    (e: 'update:value', newValue: string): void;
  }

  const props = withDefaults(defineProps<Props>(), {
    title: 'いんぷっとふぃーるど',
    value: '',
  });

  const emit = defineEmits<Emits>();

  const value = computed({
    get(): string {
      return props.value;
    },
    set(value: string) {
      emit('update:value', value);
    },
  });
</script>

<template>
  <div>
    <label>
      <p
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {{ title }}
      </p>
      <input
        v-model="value"
        type="text"
        class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700"
      />
    </label>
  </div>
</template>
