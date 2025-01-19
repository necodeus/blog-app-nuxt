<template>
    <div :class={className}>
        <NuxtLink v-if="path" :to="path || ''" class="inline-flex items-center gap-[20px]">
            <picture>
                <img class="min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] rounded-full bg-[#eee]"
                    :src="`https://images.necodeo.com/${avatar_image_id}/55x55`" alt="" loading="lazy" />
            </picture>
            <div class="font-jost">
                <div class="flex items-baseline">
                    <div class="text-[20px] font-medium">{{ name }}</div>
                    <div v-if="numberOfPosts > 0">&nbsp;/&nbsp;</div>
                    <div v-if="numberOfPosts > 0" class="text-[16px]">
                        {{ numberOfPosts }}{{ " " }}
                        {{ numberToPolishNumeral(numberOfPosts, {
                            one: "artykuł",
                            many: "artykułów",
                            exceptions: "artykuły",
                        }) }}
                    </div>
                </div>
                <div class="font-jost text-[16px]">{{ bio }}</div>
            </div>
        </NuxtLink>
        <div v-else class="inline-flex items-center gap-[20px]">
            <picture>
                <img class="min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] rounded-full bg-[#eee]"
                    :src="`https://images.necodeo.com/${avatar_image_id}/55x55`" alt="" loading="lazy" />
            </picture>
            <div class="font-jost">
                <div class="flex items-baseline">
                    <div class="text-[20px] font-medium">{{ name }}</div>
                    <div v-if="numberOfPosts > 0">&nbsp;/&nbsp;</div>
                    <div v-if="numberOfPosts > 0" class="text-[16px]">
                        {{ numberOfPosts }}{{ " " }}
                        {{ numberToPolishNumeral(numberOfPosts, {
                            one: "artykuł",
                            many: "artykułów",
                            exceptions: "artykuły",
                        }) }}
                    </div>
                </div>
                <div class="font-jost text-[16px]">{{ bio }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { numberToPolishNumeral } from '../server/utils/stringNumerals';

defineProps({
    className: {
        type: String,
        default: '',
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    avatar_image_id: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: false,
    },
    numberOfPosts: {
        type: Number,
        required: true,
    },
})
</script>