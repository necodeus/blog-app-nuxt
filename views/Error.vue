<script setup>
defineProps({
    data: {
        type: Object,
        default: () => ({}),
        required: false,
    },
})

const navigation = [
    { name: 'Artykuły', url: '/' },
    { name: 'Autorzy', url: '/autorzy' },
]
</script>

<template>
    <ContentLayout>
        <template #header>
            <TopNavbar :items="navigation" />
        </template>

        <div class="component-border-bottom">
            <ErrorHeader :code="404" message="Strona nie została znaleziona" />
        </div>
    </ContentLayout>
</template>
