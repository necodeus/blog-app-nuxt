<template>
    <DynamicComponent :data="data" />
</template>

<script setup>
const { data } = await useFetch(`/api/_page?path=${useRouter().currentRoute.value.path}`);

const contentType = unref(data).url?.content_type;

const DynamicComponent = defineAsyncComponent(() => import(`../views/${getViewByContentType(contentType)}.vue`));

const getViewByContentType = (contentType) => {
    switch (contentType) {
        case 'POST':
            return 'Post'
        case 'POSTS':
            return 'Posts'
        case 'AUTHOR':
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
