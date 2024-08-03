<template>
    <div class="font-jost py-[30px] text-[17px]" v-observe-visibility="commentsVisibility">
        <CommentHeading :comments-count="comments?.length" />
        <CommentInput
            :action-handler="() => {
                console.log('action-handler')
            }"
            :clear-on-action="true"
        />
        <CommentList v-if="isCommentsVisible && comments?.length > 0" :post-id="postId" :comments="comments" />
        <CommentListEmpty v-if="isCommentsVisible && comments?.length === 0" />
    </div>
</template>

<script setup>
const props = defineProps({
    postId: {
        type: Number,
        required: true,
        default: null,
    },
})

const comments = ref([])
const isCommentsVisible = ref(false)

const commentsVisibility = (isVisible) => {
    console.log('commentsVisibility', isVisible)
}
</script>
