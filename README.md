# Mistral models page redesign

## Live version

The live version of this project is available at https://mistral-model-rebranding.netlify.app/

## Goal

The goal is to challenge the current design without changing its core.

While using the same codes (color, content, placements), I try to make the page more alive and dynamic to give the feeling the content is more reactive to the user. Each animation should be playfull and fun, while still leaving the content readable and accessible right away. The experience should also be consistent on mobile.

Small design updates have been made to improve readability or to make some elements pop more.

Keep in mind that this has been made in a very short time (3-4 days) with constraints, so there is still a lot of room for improvement and optimization.

## Inspiration

- Chatbot animation (text abruptly appearing and disappearing)
- 8 bit & Robot references (motion with low FPS, pixelated animation, blinking cursor, scrolling information)
- Mistral branding (color scheme, playing on shapes of yellow -> orange)
- Mistral square & rectangular shape as its identity : consolidate the shape to uniformize interactive elements (button, cards)

Motion references :

- [futuristic city 1](https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2989da120242593.60adeb7e781fc.gif)
- [Cyberpunk city 2](https://id.pinterest.com/pin/35747390786995745/)

## Tech stack

- SvelteKit for the frontend framework: lighter & faster than React, more consistent than Vue
- Tailwind for the CSS: easy to use and maintain, lot of good built-in utilities
- No external library for animation: all animations are made with CSS or with custom code to keep good performance and maintainability. Keeping the animations simple also helps to keep project lightweight and performant, without having to include heavy-ish external library.

## Improvements

Misc

- Normalize h1 & h2 to make a better visual hierarchy
- h1 level paragraph have a "robotic/8bit" fade-in
- h2-h3 level paragraph have a smooth "futuristic" fade-in
- icon blink when hovered/activated

Button

- Cta have a "chat is answering" / "chat is thinking" effect on hover, its arrow icon is blinking like a cursor
- Cta has been transformed to a square shape to be more consistent with the rest of the design

Section: "It starts with frontier science"

- The scrolling slider has been transformed to a grid of models. Each card is now square to keep them at the same level of importance
- Models icon have been grayscaled to leave the main title readable. When user hover the card, the icon is colored back to indicate it's interactive
- The grid is moving based on the user cursor to show the diversity of Mistral models.
- Added a "trail" effect while hovering models to re-enforce a "pixel/8bit" feeling in the site

Section: "tailored for your"

- Model cards has been added side-to-side to be able to read more than one at once
- Having them all available right away also help the user to compare models next to each others
- Parallax effect on scroll, added the effect of the card "unfolding" when it appears to keep the original animation idea

Section: "Free open-weight models"

- Added the image next to the title to give more personnality to each model
- Simplified the card to fit "Tailored for you" spirit

Section: "Custom models for your own needs"

- Add fade-in / fade-out between slides
- Prevent the dom to "jump" when switching between tabs
- Added animation on tab to better reflect user interactivity

Section: "Ready to get started"

- Added models icons to make this section feels like a "checkpoint"
- Added a parallax effect on scroll to keep the dynamic feeling of each section being alive

Section: "Model licenses explained"

- Added a fade-in with a light delay for each row of the array

## Animation

The animations are made with simple concepts :

**Fade-in only, play only once to avoid overwhelming the user**

- Most of them are fade-in animations only : triggered only when the element enters the viewport.
- An IntersectionObserver is monitoring its visibility and update a Svelte `$state()` to trigger or not the animations.
- DOM is always in its final state, the animations are in fact removing the "style before visible & transitionning" classes. This way if the user has javascript disabled, the page is already in its final state and he doesn't see a broken un-animated page.

_-> See [components/modules/card-model.svelte](https://github.com/ivandaum/mistral-model-rebranding/blob/main/src/lib/components/modules/card-model.svelte) for a practical example._

**CSS animations for better performance and maintainability**

- Most of the animations (keyframes, transition, transform) are made with CSS with tailwind class systems.
- The animation on states changes are triggered by HTML states (hover, ...)
- the DOM is updated by adding or removing classes throught Svelte.

_-> See [components/atoms/cta.svelte](https://github.com/ivandaum/mistral-model-rebranding/blob/main/src/lib/components/atoms/cta.svelte) for a practical example._

**One requestAnimationFrame loop for the rest of the calculations**

- Complex animations (parallax, slider) are made without external library.
- All calculations are made in a unique `requestAnimationFrame` loop (managed by [utils/raf.ts](https://github.com/ivandaum/mistral-model-rebranding/blob/main/src/lib/utils/raf.ts) manager).
- Animations are added/removed when the component enters or leaves the viewport to keep good performances.
- Rather than updating the component style/css directly, the animation set a html variable (`--x` or `--y` for example) that can be used in the component and its children thanks to tailwind syntax (with the class `translate-x-(--x)`)

_-> See [components/organismes/home-models.svelte](https://github.com/ivandaum/mistral-model-rebranding/blob/main/src/lib/components/organisms/home-models.svelte) for a practical example._

## Project install & start

### Svelte

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.12.4 create --template minimal --types ts --add prettier eslint tailwindcss="plugins:none" sveltekit-adapter="adapter:netlify" --install npm mistral-use-case
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
