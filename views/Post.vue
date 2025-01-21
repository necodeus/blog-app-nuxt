<script setup>
import moment from 'moment/min/moment-with-locales'
moment.locale('pl')

import { slugify } from "../plugins/markdown-it/anchor";

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


function extractMarkdownHeadersWithIds(markdownText) {
  const headers = markdownText.match(/^#{1,6} .+$/gm) ?? [];

  return headers.map((header) => {
    const title = header.replace(/^#{1,6} /, "");

    return {
      id: slugify(title),
      title: title,
    };
  });
}

const contentItems = extractMarkdownHeadersWithIds(post?.content ?? "");
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

    <ContentNav v-if="contentItems.length > 0" :items="contentItems" />

    <div v-if="post.content.length" class="border-[#e5e5e5] border-b-[1px]">
      <PostContent :content="post.content ?? ''" />
    </div>
  </ContentLayout>
</template>
