<template>
    <MainContainer>
        <SectionWrapper width="var(--desktop-main-content-width)">
            <template #aside>
                <StickySection width="334px">
                    <div class="background m-[7px]">
                        <Advertisement />
                    </div>
                </StickySection>
            </template>

            <BasicSection width="var(--main-width)" class="component-border-vertical">
                <div>
                    <Header
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
            <template #aside>
                <StickySection width="334px">
                    <div class="m-[7px]">
                        <ContentNav :items="[]" />
                    </div>
                </StickySection>
            </template>

            <BasicSection width="var(--main-width)" class="not-desktop">
                <div class="m-[7px]">
                    <ContentNav :items="[]" />
                </div>
            </BasicSection>

            <BasicSection width="var(--main-width)" class="component-border-vertical">
                <Content content="" />

                <div class="component-border-top p-[7px]">
                    <PostAuthor :profile="data.postAuthor" />
                </div>
            </BasicSection>
        </SectionWrapper>

        <SectionWrapper width="var(--desktop-main-content-width)">
            <template #aside>
                <StickySection width="334px">
                    <div class="m-[7px]">
                        <Advertisement />
                    </div>
                </StickySection>
            </template>

            <BasicSection width="var(--main-width)" class="component-border-vertical">
                <Comments id="comments" :postId="data.post.id" />
            </BasicSection>
        </SectionWrapper>
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection>
            <OtherPostsFilled :posts="data.otherPosts" />
        </BasicSection>
        <BasicSection>
            <ExternalLinks />
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
