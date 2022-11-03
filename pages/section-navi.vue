<script setup lang="ts">
  type TSection = {
    title: string;
    contents: string[];
  };
  const sections = ref<TSection[]>(
    Array.from(new Array(5), (_, i) => ({
      title: `セクション${i + 1}`,
      contents: Array.from(new Array(10), (_, j) =>
        [`セクション${i + 1}の${j + 1}個目のコンテンツ`].join()
      ),
    }))
  );
  const sectionItems = sections.value.map((s) => s.title);
</script>

<template>
  <NuxtLayout>
    <div>
      <!-- <SectionNavi section-pre-fix="section-" :section-items="sectionItems" /> -->
      <article
        v-for="(section, i) in sections"
        :key="i"
        class="flex flex-col mb-4 last:mb-0"
        :id="`section-${i}`"
      >
        <h1>{{ section.title }}</h1>
        <ul>
          <li v-for="(content, j) in section.contents" :key="i + '-' + j">
            {{ content }}
          </li>
        </ul>
      </article>
    </div>
  </NuxtLayout>
</template>
