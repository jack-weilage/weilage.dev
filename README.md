<h1 align="center"><pre><a target="_blank" href="https://weilage.dev">weilage.dev</a></pre></h1>

## Plans
This website is __*very*__ early in development, so many many items simply haven't been implemented.

- [x] Create basic homepage
- [ ] Upgrade homepage
    - [ ] Animate all elements smoothly
    - [ ] Add background mask
- [ ] Create blog
    - [ ] Add markdown parser
    - [ ] Actually create blog articles

## Development
This website is built with <a target="blank" href="https://kit.svelte.dev">SvelteKit</a>, so a development server is built in.
<br>
<br>
- `pnpm dev` starts a development server at <a target="_blank" href="http://localhost:3000">localhost:3000</a>.
- `pnpm dev -- --host` hosts the development server on your network at <a target="_blank" href="about:blank">{LOCAL_IP}:3000</a>.
- `pnpm build && pnpm preview` builds and locally hosts a production version of the site.