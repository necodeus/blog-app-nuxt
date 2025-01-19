<script setup>
import moment from 'moment/min/moment-with-locales'
moment.locale('pl')

const { post } = defineProps({
  navigation: {
    type: Array,
    default: () => [],
    required: false,
  },
  post: {
    type: Object,
    default: () => ({}),
    required: false,
  },
  postAuthor: {
    type: Object,
    default: () => ({}),
    required: false,
  },
})

const contentItems = [];
</script>

<template>
  <ContentLayout>
    <template #header>
      <TopNavbar :items="navigation" />
    </template>

    <PostHeader
      v-if="post?.id"
      :coverPicture="post.cover_picture"
      :postAuthor="postAuthor"
      :createdAt="post.created_at"
      :name="post.title"
      :rating="4.5"
      :numberOfComments="post.comments_count"
      :teaser="post.teaser"
    />

    <PostNavigation v-if="contentItems.length > 0" :items="contentItems" />

    <div v-if="post.content.length" class="border-b-[1px] border-[#e5e5e5]">
      <PostContent :content="post.content ?? ''" />
    </div>
  </ContentLayout>
</template>
