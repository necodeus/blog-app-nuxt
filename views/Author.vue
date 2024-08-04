<script setup>
const songs = [
    {
        type: 'current',
        name: 'Dynasty - Orchestral Version',
        artists: 'MIIA',
        images: [
            { url: 'https://images.necodeo.com/c66cd118-9668-4272-8c28-d46c3c5da3a4/55x55' },
        ],
    },
    {
        type: 'history',
        name: 'Szampan',
        artists: 'sanah',
        images: [
            { url: 'https://images.necodeo.com/c66cd118-9668-4272-8c28-d46c3c5da3a4/55x55' },
        ],
        played_at: '2024-06-17 17:00:00',
    },
];
</script>

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
                AUTHOR
            </BasicSection>
        </SectionWrapper>
    </MainContainer>

    <AsideContainer class="component-border-vertical">
        <BasicSection>
            <ExternalLinks />
        </BasicSection>

        <BasicSection>
            <Profiles />
            <div class="component-padding font-jost">
                <SectionTitle><b>Spotify</b> - na żywo</SectionTitle>
                <Spotify :songs="songs" />
            </div>
        </BasicSection>
    </AsideContainer>
</template>
