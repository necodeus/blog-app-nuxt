<template>
    <Navigation :items="[
        { name: 'Artykuły', url: '/' },
        { name: 'Autorzy', url: '/autorzy' },
        { name: 'Projekty', url: '/projekty' },
        { name: 'Kontakt', url: '/kontakt' },
    ]" />
    <MainContainer>
        <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection width="var(--main-width)" class="component-border-vertical">
                <div>
                    <PostHeader
                        :image="data.post.cover_picture['1200x430']"
                        :authorName="data.postAuthor.name"
                        :authorPhoto="data.postAuthor.author_picture['25x25']"
                        :name="data.post.title"
                        :createdAt="data.post.created_at"
                        teaser=""
                        :postId="data.post.id"
                        :numberOfComments="0"
                    />
                </div>
            </BasicSection>
        </SectionWrapper>

        <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection width="var(--main-width)" class="not-desktop">
                <div class="m-[7px]">
                    <PostNavigation :items="[]" />
                </div>
            </BasicSection>

            <BasicSection width="var(--main-width)" class="component-border-vertical">
                <PostContent content="" />

                <div class="component-border-top p-[7px]">
                    <PostAuthor :profile="data.postAuthor" />
                </div>
            </BasicSection>
        </SectionWrapper>
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection>
            <AsidePopularPosts :posts="[]" />
            <AsideArchive />
        </BasicSection>
    </AsideContainer>
</template>

<script setup>
import moment from 'moment/min/moment-with-locales'

moment.locale('pl')

const { data } = defineProps({
    data: {
        type: Object,
        default: () => ({}),
        required: false,
    },
})

console.log(data)
</script>
