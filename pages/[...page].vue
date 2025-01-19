<script lang="ts" setup>
const getViewName = (contentType: string) => {
    switch (contentType) {
        case 'POST':
            return 'Post'
        case 'POSTS':
            return 'Posts'
        case 'AUTHOR':
            return 'Author'
        case 'AUTHORS':
            return 'Authors'
        default:
            return 'Error'
    }
}

type TPage = {
    url: {
        content_type: string
    }
}

const { currentRoute } = useRouter();

const { path } = unref(currentRoute);

const { data: response } = await useFetch(`/api/_page?path=${path}`);

const data = unref(response) as TPage;

const viewName = getViewName(data.url?.content_type)
const View = defineAsyncComponent(() => import(`../views/${viewName}.vue`));

</script>

<template>
    <View v-bind="data" />
</template>
