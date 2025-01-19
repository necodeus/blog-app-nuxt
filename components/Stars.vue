<template>
    <svg :width="width" :height="height" :style="{
        minWidth: width,
        minHeight: height,
    }" :viewBox="`0 0 ${totalWidth} 10`" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="stars">
                <polygon
                    v-for="(star, index) in stars"
                    :key="index"
                    :points="star"
                />
            </clipPath>
        </defs>
        <rect :width="totalWidth" height="10" fill="#eee" clip-path="url(#stars)" />
        <rect :width="totalWidth" height="10" fill="gold" clip-path="url(#stars)"
            :style="{ transition: 'width 0.5s', width: pc + '%' }" />
    </svg>
</template>

<script setup>
const { gapWidth, rating } = defineProps({
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    gapWidth: {
        type: Number,
        required: true,
    },
});

const totalWidth = computed(() => (10 * 5) + (gapWidth * 4));
const pc = computed(() => getFixedPercentage(rating, gapWidth));

function getFixedPercentage(rating, gapWidth) {
    const starWidth = 10;
    const maxRating = 5;

    const totalWidth = (starWidth * maxRating) + (gapWidth * (maxRating - 1));
    const filledWidth = (Math.floor(rating) * (starWidth + gapWidth)) + (rating % 1 * starWidth);
    const percentage = (filledWidth / totalWidth) * 100;

    return percentage;
}

function generateStarPoints(offsetX) {
    return `${offsetX + 5},0.5 ${offsetX + 6.25},3.85 ${offsetX + 9.9},3.85 ${offsetX + 7.075},6.15 ${offsetX + 8.3},9.5 ${offsetX + 5},7.3 ${offsetX + 1.7},9.5 ${offsetX + 2.925},6.15 ${offsetX + 0.1},3.85 ${offsetX + 3.75},3.85`;
}

const stars = computed(() => {
    const starArray = [];
    for (let i = 0; i < 5; i++) {
        starArray.push(generateStarPoints(i * (10 + gapWidth)));
    }
    return starArray;
});
</script>
