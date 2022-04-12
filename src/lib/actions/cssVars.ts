type Styles = Record<string, string>

/** update vars on a node */
const updateStyles = (node: HTMLElement, styles: Styles) => {
    const updated_keys = []
    // for every key and value of the styles object, set a var on the node
    for (const [key, value] of Object.entries(styles)) {
        node.style.setProperty(`--${key}`, value.toString())
        updated_keys.push(key)
    }

    return updated_keys
}
/** remove vars from a node */
const removeStyles = (node: HTMLElement, styles: string[]) => styles.forEach(key => node.style.removeProperty(`--${key}`))


export default (node: HTMLElement, styles: Styles) => {
    // update the variables on first render
    updateStyles(node, styles)

    return {
        update(updated_styles: Styles) {
            // update the variables
            const updated_keys = updateStyles(node, updated_styles)

            const old_keys = Object.keys(styles)
            // remove any variables that no longer exist
            removeStyles(node, old_keys.filter(key => !updated_keys.includes(key)))
            // remove any variables that have no value
            removeStyles(node, old_keys.filter(key => !updated_styles[key]))

            styles = updated_styles
        }
    }
}