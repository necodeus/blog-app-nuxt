<script setup>
import moment from 'moment/min/moment-with-locales'

moment.locale('pl')

const { post } = defineProps({
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
</script>

<template>
  <TopNavbar 
    :items="[
      { name: 'Artykuły', url: '/' },
      { name: 'Autorzy', url: '/autorzy' },
      { name: 'Projekty', url: '/projekty' },
      { name: 'Kontakt', url: '/kontakt' },
    ]"
  />

  <MainContainer>
    <SectionWrapper
      width="var(--desktop-main-content-width)"
    >
      <BasicSection
        width="var(--main-width)"
        class="component-border-vertical"
      >
        <div>
          <PostHeader
            :image="post.cover_picture['1200x430']"
            :authorName="postAuthor.name"
            :authorPhoto="postAuthor.author_picture['25x25']"
            :name="post.title"
            :createdAt="post.created_at"
            teaser=""
            :postId="post.id"
            :numberOfComments="0" />
        </div>
      </BasicSection>
    </SectionWrapper>

    <SectionWrapper width="var(--desktop-main-content-width)">
      <BasicSection width="var(--main-width)" class="not-desktop">
        <div class="m-[7px]">
          <PostNavigation :items="[]" />
        </div>
      </BasicSection>

      <BasicSection width="var(--main-width)" class="component-border-vertical">
        <PostContent content="" />

        <div class="component-border-top p-[7px]">
          <PostAuthor :profile="postAuthor" />
        </div>
      </BasicSection>
    </SectionWrapper>
  </MainContainer>

  <AsideContainer class="component-border-vertical">
    <BasicSection>
      <AsidePopularPosts :posts="[]" />
    </BasicSection>
  </AsideContainer>
</template>
