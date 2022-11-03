<script setup>
  import { ref } from 'vue';

  // constant
  const defaultCount = 1;
  // data
  const count = ref(defaultCount);

  // computed
  const plusOne = computed(() => count.value + 1);

  // watch
  watch(count, (count, prevCount) => {
    console.log(`watch: ${prevCount} -> ${count}`);
  });

  // method
  function countUp() {
    console.log('call function countUp');
    console.log(count);
    count.value++;
  }
</script>

<template>
  <div class="flex">
    <div class="box">
      <div>count: {{ count }}</div>
      <div>plusOne: {{ plusOne }}</div>
      <div>
        <button @click="countUp">COUNT UP</button>
      </div>
    </div>
    <input-field title="name" value />
  </div>
</template>

<style>
  .box {
    border: 1px solid rgb(0 0 0 / 0.85);
    padding: 1rem;
  }
</style>
