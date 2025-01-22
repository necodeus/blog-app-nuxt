<script setup>
defineProps({
    navigation: {
        type: Array,
        required: true,
        default: () => [],
    },
    posts: {
        type: Array,
        required: true,
        default: () => [],
    },
    author: {
        type: Object,
        required: true,
        default: () => { },
    },
    songs: {
        type: Array,
        required: true,
        default: () => [],
    },
    posts: {
        type: Array,
        required: true,
        default: () => [],
    },
    links: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>

<template>
    <ContentLayout>
        <template #header>
            <TopNavbar :items="navigation" />
        </template>

        <SectionTitle text="Autor necodeus" class="p-[30px]" />
        <AuthorDetails class="p-[30px] component-border-bottom" :name="author.name" :bio="author.bio"
            :numberOfPosts="posts.length" :avatar_image_id="author.avatar_image_id" />
        <SectionTitle text="Artykuły" class="p-[30px]" />
        <AuthorPosts :posts="posts" />

        <template #rightSidebar>
            <SectionTitle text="Linki zewnętrzne" class="p-[30px]" />
            <AsideLinks :links="links" />

            <SectionTitle text="Spotify na żywo" class="p-[30px]" />
            <div class="p-[30px] component-border-bottom">
                <AsideSpotify :songs="songs" />
            </div>
        </template>
    </ContentLayout>
</template>
