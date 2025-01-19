<script setup>
const d = defineProps({
    navigation: {
        type: Array,
        default: () => [],
        required: false,
    },
    posts: {
        type: Array,
        default: [],
        required: false,
    },
})
const posts = d.posts
</script>

<template>
    <ContentLayout>
        <template #header>
            <TopNavbar :items="navigation" />
        </template>

        <SectionTitle text="Artykuły" class="p-[30px]" />
        <PostsListing :posts="posts" />
    </ContentLayout>
</template>
