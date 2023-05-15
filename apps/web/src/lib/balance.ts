/**
 * This svelte action is adapted from the NYTimes' classic `text-balancer`,
 * which can be found here: https://github.com/nytimes/text-balancer/.
 */
import type { Action } from 'svelte/action'

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
		node.style.maxWidth = ''
		squeeze_container(node, node.clientHeight, 0, node.clientWidth)
	}

	const resize = new ResizeObserver(callback)

	resize.observe(node.parentElement ?? document.documentElement)
	return {
		destroy() {
			resize.unobserve(node)
		},
	}
}
