<template>
    <DynamicComponent :data="data" />
</template>

<script lang="ts" setup>
const { data } = await useFetch<any>(`/api/_page?path=${useRouter().currentRoute.value.path}`)

const contentType = unref(data).url?.content_type

const DynamicComponent = defineAsyncComponent(() => import(`../views/${getViewByContentType(contentType)}.vue`))

const getViewByContentType = (contentType: string) => {
    switch (contentType) {
        case 'POST':
            return 'Post'
        case 'POSTS':
            return 'Posts'
        case 'AUHTOR':
            return 'Author'
        case 'AUTHORS':
            return 'Authors'
        case 'PROJECTS':
            return 'Projects'
        case 'CONTACT':
            return 'Contact'
        default:
            return 'Error'
    }
}
</script>
