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
                AUTORZY
            </BasicSection>
        </SectionWrapper>
    </MainContainer>
</template>
