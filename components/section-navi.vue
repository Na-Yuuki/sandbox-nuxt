<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      sectionPreFix?: string;
      sectionItems: string[];
    }>(),
    {
      sectionPreFix: '',
    }
  );
  const sectionOffsetTop = ref([]);
  const currentSection = ref(0);
  const isChangeNavi = ref(true);

  const pushElementOffsetTop = () => {
    props.sectionItems.forEach((_, targetIndex) => {
      const element = document.getElementById(
        `${props.sectionPreFix}${targetIndex}`
      );
      if (element) {
        sectionOffsetTop.value.push(
          element.getBoundingClientRect().top +
            window.pageYOffset -
            (targetIndex ? 60 : 160)
        );
      }
    });
  };

  const currentNavi = () => {
    const scrollY = window.scrollY;
    let target = props.sectionItems.findIndex((_, i, s) =>
      i === s.length - 1
        ? scrollY >= sectionOffsetTop.value[i]
        : scrollY >= sectionOffsetTop.value[i] &&
          scrollY < sectionOffsetTop.value[i + 1]
    );
    target = target === -1 ? 0 : target;
    if (currentSection.value !== target && isChangeNavi.value) {
      currentSection.value = target;
    }
  };

  const onScrollSection = (targetIndex: number) => {
    isChangeNavi.value = false;
    const element = document.getElementById(
      `${props.sectionPreFix}${targetIndex}`
    );
    if (element) {
      window.scrollTo({
        top: targetIndex
          ? element.getBoundingClientRect().top + window.pageYOffset - 55
          : 0,
        behavior: 'smooth',
      });
    }
    currentSection.value = targetIndex;
    setTimeout(() => {
      isChangeNavi.value = true;
    }, 750);
  };

  onMounted(() => {
    pushElementOffsetTop();
    currentNavi();
    window.addEventListener('scroll', currentNavi);
    window.addEventListener('resize', currentNavi);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', currentNavi);
    window.removeEventListener('resize', currentNavi);
  });
</script>

<template>
  <ul class="flex">
    <li
      v-for="(item, itemIndex) in props.sectionItems"
      :key="itemIndex"
      class="mb-4 last:mb-0"
      :class="{ selected_navi: itemIndex === currentSection }"
      @click="onScrollSection(itemIndex)"
    >
      {{ item }}
    </li>
  </ul>
</template>
