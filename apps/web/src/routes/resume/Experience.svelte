<script lang="ts">
    export let start:    string | undefined = undefined
    export let end:      string | undefined = undefined
    export let position: string | undefined = undefined

    export let id = 0
</script>

<article class:swap-side={id % 2 === 1}>
    <h3>
        <slot name="heading" />
        {#if position}
            <span>{position}</span>
        {/if}
    </h3>
    <div>
        {#if start}
            <p class="duration">
                {new Date(start).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                -
                {#if end}
                    {new Date(end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                {:else}
                    Present
                {/if}
            </p>
        {/if}
        <p class="desc">
            <slot />
        </p>
    </div>
</article>

<style lang="postcss">
    article {
        @media not print {
            /* If the parent is not a grid and this element should be swapped. */
            :global(:not(div.grid)) > &.swap-side,
            /* Or the parent is a grid and this element is the eventh child. */
            :global(div.grid) > &:nth-child(even) {
                text-align: end;

                & > h3 {
                    flex-direction: row-reverse;
                }
            }
        }
        /* If the parent is not a grid and this isn't the first child. */
        :global(:not(div.grid)) > &:not(:first-of-type) {
            margin-top: 3.5rem;

            @media print {
                margin-top: 0.5rem;
            }
        }
        & > h3 {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0 1.5rem;

            margin: 0 0 0.25rem;

            & > span {
                font-weight: 300;
            }
        }
        & > div {
            font-size: 0.9em;

            & > p.duration {
                margin: 0 0 1rem;

                font-size: 0.95em;
                font-weight: 300;
                font-style: italic;

                color: var(--color--text-alt);

                @media print {
                    margin-bottom: 0.25rem;
                }
            }
            & > p.desc {
                margin: 0;
            }
        }
    }
</style>
