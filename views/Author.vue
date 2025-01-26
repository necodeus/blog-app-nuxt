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
    spotifyActivity: {
        type: Object,
        required: true,
        default: () => {},
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

        <SectionTitle :text="`Autor ${author.name}`" class="p-[30px]" />
        <AuthorDetails class="p-[30px] component-border-bottom" :name="author.name" :bio="author.bio"
            :numberOfPosts="posts.length" :avatar_image_id="author.avatar_image_id" />
        <SectionTitle text="Artykuły" class="p-[30px]" />
        <AuthorPosts :posts="posts" />

        <template #rightSidebar>
            <SectionTitle v-if="links.length > 0" text="Linki zewnętrzne" class="p-[30px]" />
            <AsideLinks v-if="links.length > 0" :links="links" />

            <SectionTitle v-if="spotifyActivity?.player?.length > 0" text="Spotify na żywo" class="p-[30px]" />
            <div v-if="spotifyActivity?.player?.length > 0" class="p-[30px] component-border-bottom">
                <AsideSpotify :spotifyActivity="spotifyActivity" />
            </div>
        </template>
    </ContentLayout>
</template>
