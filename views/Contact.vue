<template>
    <Navigation :items="[
        { name: 'Artykuły', url: '/' },
        { name: 'Autorzy', url: '/autorzy' },
        { name: 'Projekty', url: '/projekty' },
        { name: 'Kontakt', url: '/kontakt' },
    ]" />

    <MainContainer>
        <SectionWrapper width="var(--desktop-main-content-width)">
            <BasicSection width="var(--main-width)" class="component-border-vertical lg:h-[100vh]">
                <SectionTitle class="p-[30px] component-border-bottom">
                    <h1><b>Kontakt</b></h1>
                </SectionTitle>
                <div class="component-padding">
                    <div>
                        <div>
                            Chcesz się ze mną skontaktować? Napisz do mnie na <a style="color: blue" href="mailto:dawid@necodeo.com">dawid@necodeo.com</a>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </BasicSection>
        </SectionWrapper>
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection>
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
