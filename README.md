# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Goal

The goal is to challenge the current design. While using the same codes (color, content, placements), I try to make the page more "alive" and dynamic, with the feeling the content is more reactive to the user. Each animation should be playfull and fun, while still leaving the content readable and accessible right away. The experience should also be consistent on mobile.

## Inspiration

- Chatbot animation (text abruptly appearing and disappearing)
- 8 bit & Robot references (motion with low FPS, pixelated animation, blinking cursor, scrolling information)
- Mistral branding (color scheme, playing on shapes of yellow -> orange)
- Mistral square & rectangular shape as its identity : re-enforce the shape to uniformize interactive elements (button, cards)

Motion references :

- (futuristic city 1)[https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2989da120242593.60adeb7e781fc.gif]
- (Cyberpunk city 2)[https://id.pinterest.com/pin/35747390786995745/]

## Improvements

Misc

- Normalize h1 & h2 to make a better visual hierarchy
- h1 level paragraph have a "robotic/8bit" fade-in
- h1 have a parallax effect on scroll
- h2-h3 level paragraph have a smooth "futuristic" fade-in
- icon blink when hovered/activated

Button

- Cta have a "chat is answering" / "chat is thinking" effect on hover, its arrow icon is blinking like a cursor
- Cta has been transformed to a square shape to be more consistent with the rest of the design

Section: "It starts with frontier science"

- The scrolling slider has been transformed to a grid of models. Each card is now square to keep them at the same level of importance
- The grid is moving based on the user cursor to show the diversity of Mistral models.
- Added a "trail" effect while hovering models to re-enforce a "pixel/8bit" feeling in the site

Section: "tailored for your"

- Model cards has been added side-to-side to be able to read more than one at once
- Having them all available right away also help the user to compare models next to each others
- Parallax effect on scroll, added the effect of the card "unfolding" when it appears to keep the previous animation spirit

Section: "Free open-weight models"

- Added the image next to the title to give more personnality to each model
- Simplified the card to fit "Tailored for you" spirit

Section: "Ready to get started"

- Added models icons to make this section feels like a "checkpoint"
- Added a parallax effect on scroll to keep the dynamic feeling of each section being alive

## Live version

The live version of this project is available at https://mistral-model-rebranding.netlify.app/

## Creating a project

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

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
