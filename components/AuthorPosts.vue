<template>
    <ul v-if="posts.length > 0" class="font-jost inline-flex flex-col gap-[30px] p-[30px] component-border-bottom w-full">
        <li class="flex flex-col" v-for="post in posts" :key="post.id">
            <h1>
                <NuxtLink :to="post.path || ''" class="text-[38px]">
                    {{post.title}}
                </NuxtLink>
            </h1>
            <p class="line-clamp-3 text-[20px] leading-[35px] mt-[20px]">
                {{post.teaser}}
            </p>
        </li>
    </ul>
    <div v-else class="p-[30px] component-border-bottom">Brak wpisów</div>
</template>

<script setup>
defineProps({
    posts: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>
