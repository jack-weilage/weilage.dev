/**
 * This svelte action is adapted from the NYTimes' classic `text-balancer`,
 * which can be found here: https://github.com/nytimes/text-balancer/.
 */
import type { Action } from 'svelte/action'

// This function is basically just a recursive binary search, honing in
// on a width which is just before wrapping.
function squeeze_container(
	node: HTMLElement,
	original_height: number,
	min: number,
	max: number,
): void {
	// If we've squeezed enough to bring the min and max together, we're done.
	if (min >= max) {
		node.style.maxWidth = `${max}px`
		return
	}

	// If we haven't squeezed far enough, try the average between max and min.
	const mid = (max + min) / 2
	node.style.maxWidth = `${mid}px`

	return node.clientHeight > original_height
		? // The element has overflowed onto another line; try between mid and max.
			squeeze_container(node, original_height, mid + 1, max)
		: // The element hasn't overflowed yet; try between min and mid.
			squeeze_container(node, original_height, min + 1, mid)
}

export const balance: Action = (node: HTMLElement) => {
	if (node.childNodes.length > 1 || node.firstChild?.nodeName !== '#text') {
		return
	}

	const callback = () => {
		// Reset any previous resizing.
		node.style.maxWidth = ''

		const original_height = node.clientHeight
		// Skip the first step (final width will never be less than half the inital width)
		const min = node.clientWidth / 2
		const max = node.clientWidth

		squeeze_container(node, original_height, min, max)
	}

	const resize = new ResizeObserver(callback)

	resize.observe(node.parentElement ?? document.documentElement)
	return {
		destroy() {
			resize.unobserve(node)
		},
	}
}
