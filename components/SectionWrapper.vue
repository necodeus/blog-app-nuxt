<template>
    <div class="flex">
        <div class="flex flex-col items-end" :style="{ width, minWidth: width }">
            <slot name="aside"></slot>
        </div>
        <div class="w-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    width: {
        type: String,
        default: 'auto',
    },
})
</script>
