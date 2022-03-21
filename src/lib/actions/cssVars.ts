const updateStyles = (node: HTMLElement, styles: Record<string, string | number>) => {
    // for every key and value of the styles object, set a var on the node
    for (const [key, value] of Object.entries(styles)) {
        node.style.setProperty(`--${key}`, value.toString())
    }
}
export default (node: HTMLElement, styles: Record<string, string | number>) => {
    updateStyles(node, styles)

    return {
        update(new_styles: Record<string, string | number>) {
            updateStyles(node, new_styles)
            // for each key in the initial var list, if it's been removed from the new list, remove it from the style list
            Object.keys(new_styles).forEach(key => !styles.hasOwnProperty(key) && node.style.removeProperty(`--${key}`))
        }
    }
}