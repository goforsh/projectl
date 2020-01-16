export function isExternal(routePath) {
    return /^(http|https|mailto|tel)/.test(routePath)
}