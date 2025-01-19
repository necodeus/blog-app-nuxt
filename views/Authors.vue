<script setup>
const { navigation, authors } = defineProps({
    navigation: {
        type: Array,
        default: () => [],
        required: false,
    },
    authors: {
        type: Array,
        default: () => [],
        required: false,
    },
})
</script>

<template>
    <ContentLayout>
        <template #header>
            <TopNavbar :items="navigation" />
        </template>
        <SectionTitle text="Autorzy" className="p-[30px]" />
        <div class="flex flex-col gap-[30px] p-[30px] component-border-bottom">
            <AuthorDetails
                v-for="author in authors"
                :key="author.id"
                :name="author.name"
                :bio="author.bio"
                :avatar_image_id="author.avatar_image_id"
                :path="author.path"
                :numberOfPosts="author.numberOfPosts"
            />
        </div>
    </ContentLayout>
</template>
