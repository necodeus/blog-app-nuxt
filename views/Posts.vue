<template>
    <MainContainer>
        <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection width="var(--main-width)" class="component-border-vertical lg:h-[100vh]">
                <div class="component-padding">
                    <PostList :posts="data.posts" />
                </div>
            </BasicSection>
        </SectionWrapper>
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection>
            <ExternalLinks />
        </BasicSection>
    </AsideContainer>
</template>

<script setup>
const { data } = defineProps({
    data: {
        type: Object,
        default: () => ({
            posts: [],
        }),
        required: false,
    },
})

console.log(data)
</script>
