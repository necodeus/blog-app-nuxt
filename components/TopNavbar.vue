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
    <div class="component-border-bottom font-jost text-[16px] h-[50px] flex">
        <div :style="{
            display: 'flex',
            gap: '30px',
            alignItems: 'center',
            margin: '0 30px',
        }">
            <div class="flex items-center gap-[15px]">
                <Logo height="25" />
                <div class="logoSeparator"></div>
                <FrameworkLogo :width="75" />
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
    </div>
</template>

<style scoped>
    .logoSeparator {
        width: 1px;
        height: 15px;
        background-color: #e5e5e5; 
    }
</style>
