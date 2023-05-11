/*
 * This code is shamelessly "inspired" by the NYTimes' classic `text-balancer`,
 * which can be found here: https://github.com/nytimes/text-balancer/
 */
function line_count(style: CSSStyleDeclaration) {
	return +style.height.replace('px', '') / +style.lineHeight.replace('px', '')
}

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

export function balance(node: HTMLElement) {
	if (
		node.childElementCount > 1 ||
		node.firstChild?.nodeName !== '#text' ||
		line_count(getComputedStyle(node)) < 2
	) {
		return
	}

	squeeze_container(node, node.clientHeight, 0, node.clientWidth)
}
