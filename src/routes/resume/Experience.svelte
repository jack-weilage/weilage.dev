<script lang="ts">
    import type { Dayjs } from 'dayjs'

    export let start: Dayjs
    export let end: Dayjs
    export let skills: string[] = []
</script>

<article>
    <slot name="heading">
        <h3>
            No <a href="/">heading</a>
        </h3>
    </slot>
    <p class="duration">
        <time datetime={start.toISOString()}>{start.format('MMMM YYYY')}</time>
        -
        <time datetime={end.toISOString()}>{end.format('MMMM YYYY')}</time>
    </p>
    <p class="content">
        <slot />
    </p>
    <ul class="skills">
        {#each skills as skill}
            <li>{skill}</li>
        {:else}
            <li>General</li>
        {/each}
    </ul>
</article>

<style lang="postcss">
    article :global h3 {
        font-weight: 400;
        margin: 3rem 0 0;

        & a {
            font-weight: bold;
            color: var(--color--text-bold);
        }
    }
    .duration {
        display: inline-block;
        background-color: var(--color--background);
        margin: 0;
        padding: 0 0.5rem;

        font-size: 0.95em;

        transform: translate(1rem, 50%);
    }
    .content {
        margin-top: 0;
        border-top: 5px double var(--color--border);
        padding-top: 1rem;
    }
    .skills {
        padding: 0;
        list-style: none;

        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        & li {
            padding: 0.5rem;
            border-radius: 0.5rem;
            background-color: var(--color--background-alt);

            outline-offset: -2px;
            outline: 2px solid var(--color--background-alt);

            line-height: 1;
        }
    }
</style>