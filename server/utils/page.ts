export const getPageData = cachedFunction(async (slug: string) => {
    const url = `${useRuntimeConfig().public.BLOG_API_URL}/initial-url-data?path=${slug}`;

    return await $fetch(url)
        .catch(() => {
            return {
                error: true,
            }
        })
}, {
    maxAge: 3,
    name: 'getPageData',
    getKey: (id: string) => id,
})
