<script setup>
const d = defineProps({
    posts: {
        type: Array,
        default: [],
        required: false,
    },
})
const posts = d.posts

console.log(d);
</script>

<template>
    <TopNavbar
        :items="[
            { name: 'Artykuły', url: '/' },
            { name: 'Autorzy', url: '/autorzy' },
            { name: 'Projekty', url: '/projekty' },
            { name: 'Kontakt', url: '/kontakt' },
        ]"
    />

    <MainContainer>
        <SectionWrapper
            width="var(--desktop-main-content-width)"
        >
            <BasicSection
                width="var(--main-width)"
                class="component-border-vertical lg:h-[100vh]"
            >
                <SectionTitle class="p-[30px] component-border-bottom">
                    <h1><b>Artykuły</b></h1>
                </SectionTitle>
                <div class="component-padding">
                    <PostsListing :posts="posts" />
                </div>
            </BasicSection>
        </SectionWrapper>
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection></BasicSection>
    </AsideContainer>
</template>
