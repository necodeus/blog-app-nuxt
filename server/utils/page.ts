export const getPageData = cachedFunction(async (slug: string) => {
    const config = useRuntimeConfig()
    const BLOG_API_URL = config.public.BLOG_API_URL

    console.log(`${BLOG_API_URL}/page?slug=${slug}`)

    return await $fetch(`${BLOG_API_URL}/page?slug=${slug}`)
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
