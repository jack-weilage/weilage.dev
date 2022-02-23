<footer>
    <ul>
        <li>© 2022 Jack Weilage</li>
        <li>
            <a href="/privacy-statement" sveltekit:prefetch>Privacy Statement</a>
        </li>
        <li>
            <a href="/site-map">Site Map</a>
        </li>
    </ul>
</footer>

<style>
    footer {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;

        flex-shrink: 0;
        
        width: calc(100% - (2 * var(--footer-padding)));
        height: var(--footer-height);

        padding: var(--footer-padding);

        border-top: 1px solid #ccc;

        font-size: 0.8rem;
    }
    ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
    }
    li:not(:first-child) {
        margin-left: 0.5rem;
    }
    li:not(:last-child) {
        margin-right: 0.5rem;
    }
</style>