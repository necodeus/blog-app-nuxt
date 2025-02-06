<script setup>
import FrameworkLogo from './FrameworkLogo.vue';

const { items } = defineProps({
    items: {
        type: Array,
        default: [],
        required: true,
    },
});

const router = useRouter();
</script>

<template>
    <div class="component-border-bottom font-jost text-[16px] h-[50px] flex items-center justify-between">
        <div :style="{
            display: 'flex',
            gap: '30px',
            alignItems: 'center',
            margin: '0 30px',
        }">
            <div class="flex items-center gap-[15px]">
                <Logo />
            </div>
            <template v-if="items.length">
                <NuxtLink
                    v-for="item in items"
                    :to="item.url"
                    :class="router.currentRoute.value.path === item.url ? 'font-medium' : ''"
                >
                    {{ item.name }}
                </NuxtLink>
            </template>
        </div>
        <div class="mr-[30px]">
            <FrameworkLogo :width="75" />
        </div>
    </div>
</template>

<style scoped>
    .logoSeparator {
        width: 1px;
        height: 15px;
        background-color: #e5e5e5; 
    }
</style>
