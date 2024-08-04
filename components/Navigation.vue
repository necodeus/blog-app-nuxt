<script setup>
const { items } = defineProps({
    items: {
        type: Array,
        required: true,
    },
});

const router = useRouter();
</script>

<template>
    <div class="component-border-bottom flex font-jost text-[16px] h-[50px]">
        <div :style="{
            display: 'flex',
            gap: '30px',
            alignItems: 'center',
            margin: '0 30px',
        }">
            <Logo class="mr-[20px]" height="25" />
            <NuxtLink
                v-for="item in items"
                :to="item.url"
                :class="router.currentRoute.value.path === item.url ? 'font-medium' : ''"
            >
                {{ item.name }}
            </NuxtLink>
        </div>
    </div>
</template>
