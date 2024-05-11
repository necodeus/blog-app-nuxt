export const getIndexData = cachedFunction(async () => {
    const config = useRuntimeConfig()
    const BLOG_API_URL = config.public.BLOG_API_URL

    console.log(`${BLOG_API_URL}/posts`)

    return await $fetch(`${BLOG_API_URL}/posts`)
}, {
    maxAge: 3,
    name: 'getIndexData',
    getKey: (id: string) => id,
})
