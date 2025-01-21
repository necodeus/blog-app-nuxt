<template>
    <ul class="contentNav" v-if="items.length">
        <li v-for="(item, i) in items" :key="i">
            <NuxtLink :to="'#' + item.id">{{ item.title }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
        default: () => [],
    },
})
</script>

<style scoped>
.contentNav {
    color: gray;
    padding: 20px 30px;
    font-size: 18px;
    line-height: 35px;
    border-bottom: 1px solid #e5e5e5;
}

.contentNav li:not(:last-child) {
    margin-bottom: 10px;
}

.contentNav li {
    list-style: none;
    counter-increment: item;
    position: relative;
}

.contentNav li > *::before {
    content: counter(item) '. ';
}

.contentNav li > * {
    display: block;
}
</style>
