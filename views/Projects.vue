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
                <SectionTitle class="p-[30px] component-border-bottom">
                    <h1><b>Projekty</b></h1>
                </SectionTitle>
                <div style="overflow: hidden;">
                    <div>
                        <div style="padding: 30px; font-family: Jost; font-size: 18px; letter-spacing: 1.2px; font-weight: 500; border-bottom: 1px solid #ccc; display: inline-block;">Sklep internetowy</div>
                    </div>
                    <div>
                        <div style="padding: 30px; font-family: Jost; font-size: 18px; letter-spacing: 1.2px; font-weight: 500; border-bottom: 1px solid #ccc; display: inline-block;">Strona dla fanów anime</div>
                    </div>
                    <div>
                        <div style="padding: 30px; font-family: Jost; font-size: 18px; letter-spacing: 1.2px; font-weight: 500; border-bottom: 1px solid #ccc; display: inline-block;">Forum społecznościowe</div>
                    </div>
                    <div>
                        <div style="padding: 30px; font-family: Jost; font-size: 18px; letter-spacing: 1.2px; font-weight: 500; border-bottom: 1px solid #ccc; display: inline-block;">Uproszczony klient gry Silkroad</div>
                    </div>
                    <div>
                        <div style="padding: 30px; font-family: Jost; font-size: 18px; letter-spacing: 1.2px; font-weight: 500; border-bottom: 1px solid #ccc; display: inline-block;">Edytor stanu gry DBXV</div>
                    </div>
                    <div>
                        <div style="padding: 30px; font-family: Jost; font-size: 18px; letter-spacing: 1.2px; font-weight: 500; border-bottom: 1px solid #ccc; display: inline-block;">Wtyczki na serwer Counter-Strike</div>
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
