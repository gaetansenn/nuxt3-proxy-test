export default defineEventHandler((event) => {
    // proxy only "/api" requests
    if (!event.node.req.url?.startsWith('/api/')) return

    const { apiBaseUrl } = useRuntimeConfig()
    const target = new URL(event.node.req.url.replace('/api', ''), apiBaseUrl)

    return proxyRequest(event, target.toString(), {
      headers: {}
    })
  })