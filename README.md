# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Inspiration

- Chatbot animation (text abruptly appearing and disappearing)
- 8 bit & Robot references (motion with low FPS, pixelated animation, blinking cursor)
- Mistral branding (color scheme, playing on shapes of yellow -> orange)

## Goal

The goal is to challenge the current design. While using the same codes (color, content), I try to make the page
more "alive" and dynamic, with the feeling the content is more reactive to the user. Each animation should
be playfull and fun, while still leaving the content readable and accessible right away. The experience should also be consistent on mobile

## Improvements

- Normalize h1 & h2 to make a better visual hierarchy
- h1 level paragraph have a "robotic/8bit" fade-in
- h1 have a parallax effect on scroll
- h2-h3 level paragraph have a smooth "futuristic" fade-in
- Model cards has been added side-to-side to be able to read more than one at once, and have a parallax effect on scroll as well
- Cta have a "chat is answering" / "chat is thinking" effect on hover, while the arrow icon is blinking like a cursor
- All animations are active in the mobile version

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
