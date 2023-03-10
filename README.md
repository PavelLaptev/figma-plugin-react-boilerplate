# π¨ React Boilerplate for Figma plugins βοΈ

![preview](https://user-images.githubusercontent.com/18498712/222872587-28fb60ea-9282-48f4-8984-3e80a4b1b140.jpeg)

## β What is this?

This is a boilerplate for creating a Figma plugin using React and Typescript.

---

## Supports

- SASS (SCSS)
- CSS/SASS/SCSS Modules
- Typescript
- Import SVG images

---

## π¦ Latest packages versions

- `@figma/plugin-typings`: 1.61.0
- `react`: 18.2.0

---

## Structure

```
βββ src
β   βββ app
β   β   βββ assets
β   β   βββ components
β   β   βββ styles
β   βββ figma-controller
β   βββ App.tsx
β   βββ index.tsx
β   βββ index.html
βββ manifest.json
βββ .prettierrc.yml
βββ declaration.d.ts
βββ tsconfig.json
βββ webpack.config.js
```

### src/app

This is where the main app is located. It is a React app that is rendered inside the Figma plugin.

### src/figma-controller

This is where the Figma controller is located. It is a Typescript file that is used to communicate with the Figma API.


---

## π οΈ How to use

1. Clone this repo
2. Run `yarn` or `npm install`
3. Run `yarn dev` or `npm run dev`
4. Go to Figma and add a new plugin (Plugins -> Development -> Import plugin from manifestβ¦)
5. Run the plugin

---
   
## βοΈ How to run

In the project directory, you can run:
- `yarn dev` or `npm run dev` to run the app in the development mode.
- `yarn build` or `npm run build` to build the app for production to the `build` folder.

---

## β Important

- run `yarn build` or `npm run build` before publishing the plugin to Figma. This will optimize the code and remove unnecessary files.
- You'll need to restart plugin in Figma in order to see the changes during development.
- Do not forget to replace the name and id of the plugin in the `manifest.json` file before publication.

---
 
## π£ Feedback

If you have any feedback, please reach out to me here in issues, or on [Twitter](https://twitter.com/PaveILaptev).
