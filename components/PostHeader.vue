<template>
    <div class="font-jost  border-b-[1px] border-[#e5e5e5]">
        <div class="relative">
            <picture>
                <source v-if="coverPicture?.['785x420']" media="(min-width: 1468px)"
                    :srcset="coverPicture?.['785x420']" />
                <source v-if="coverPicture?.['1200x430']" media="(min-width: 800px)"
                    :srcset="coverPicture?.['1200x430']" />
                <source v-if="coverPicture?.['785x420']" media="(min-width: 0px)" :srcset="coverPicture?.['785x420']" />
                <img class="background" :src="coverPicture?.['1200x4320']" loading="lazy" alt="" />
            </picture>
            <div class="px-[30px] !pt-[330px] relative bg-[linear-gradient(transparent_50%,white_100%)]">
                <PublicationDetails :publisher="publisher" :createdAt="createdAt" />
                <div class="relative !py-0">
                    <h1 class="flex">
                        <span class="text-[38px]">{{ name }}</span>
                    </h1>
                </div>
            </div>
        </div>
        <div class="p-[30px] relative !pt-[10px] bg-white">
            <div class="flex items-center">
                <Stars :width="160" :height="30" :rating="rating" :gapWidth="5" />

                <div class="divSeparator"></div>

                <div>{{ rating }}</div>
            </div>
            <div v-if="teaser?.length > 0" class="mt-[10px] text-[20px] leading-[35px]">{{ teaser }}</div>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment/min/moment-with-locales'
moment.locale('pl')

const { postAuthor, numberOfComments } = defineProps({
    coverPicture: {
        type: Object,
        default: () => ({}),
        required: false,
    },
    postAuthor: {
        type: Object,
        default: () => ({}),
        required: false,
    },
    createdAt: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    numberOfComments: {
        type: Number,
        required: false,
    },
    teaser: {
        type: String,
        required: false,
    },
})

const publisher = {
    name: postAuthor?.name,
    path: postAuthor?.path,
    picture: postAuthor?.author_picture,
}
</script>

<style scoped>
.background {
    background-color: #eee;
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: 7px 7px 7px 7px;
    width: calc(100% - 7px * 2);
    height: 100%;
    display: block;
    object-fit: cover;
}

.div-separator {
    background-color: black;
    border-radius: 999px;
    width: 3px;
    height: 3px;
    min-width: 3px;
    min-height: 3px;
    max-width: 3px;
    max-height: 3px;
    margin: 0 10px;
    display: flex;
    opacity: 0.5;
}
</style>
