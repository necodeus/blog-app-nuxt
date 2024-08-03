<template>
    <Head>
        <Meta name="theme-color" content="#fff" />
    </Head>

    <MainContainer>
        <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection width="var(--main-width)" class="component-border-vertical lg:h-[100vh]">
                <ErrorHeader :code="404" message="Strona nie została znaleziona" />
            </BasicSection>
        </SectionWrapper>
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection>
            <OtherPostsFilled :posts="[]" />
        </BasicSection>
        <BasicSection>
            <ExternalLinks />
        </BasicSection>
    </AsideContainer>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        default: () => ({}),
        required: false,
    },
})

console.log(props)
</script>
