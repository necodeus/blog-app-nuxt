<template>
  <ul class="font-jost flex flex-col gap-[30px] p-[30px] component-border-bottom">
    <li v-for="link in links" :key="link.href">
      <a class="text-[20px] inline-block" target="_blank" rel="noopener noreferrer nofollow" :href="link.href">
        <b class="font-medium">{{ link.text }}</b>
        <br />
        <div class="mt-[10px]">{{ link.description }}</div>
      </a>
    </li>
  </ul>
</template>

<script setup>
const { links } = defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>
