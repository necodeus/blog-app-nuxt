<template>
    <div :class="classes" v-html="setFirstWordBold(text)"></div>
</template>

<script setup>
const { className } = defineProps({
    className: {
        type: String,
        default: '',
        required: false,
    },
    text: {
        type: String,
        required: true,
    },
})

const setFirstWordBold = (text) => {
    if (!text) return '';

    const words = text.split(' ');
    words[0] = `<span class="font-bold">${words[0]}</span>`;

    return words.join(' ');
}

const classes = "font-jost text-[22px] component-border-bottom" + (className ? ` ${className}` : "");
</script>
