# Figma React Boilareplate ⚛️ 

![preview.webp](https://user-images.githubusercontent.com/18498712/222872587-28fb60ea-9282-48f4-8984-3e80a4b1b140.jpeg)

## What is this?

This is a boilerplate fro creating a Figma plugin using React and Typescript.

---

## Supports

- SASS (SCSS)
- CSS/SASS/SCSS Modules
- Typescript
- Import SVG images

## Structure

```
├── src
│   ├── app
│   │   ├── assets
│   │   ├── components
│   │   ├── styles
│   ├── figma-controller
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.html
├── manifest.json
├── .prettierrc.yml
├── declaration.d.ts
```

### src/app

This is where the main app is located. It is a React app that is rendered inside the Figma plugin.

### src/figma-controller

This is where the Figma controller is located. It is a Typescript file that is used to communicate with the Figma API.


---

## How to use

1. Clone this repo
2. Run `yarn` or `npm install`

---
   
## How to run

In the project directory, you can run:
- `yarn dev` or `npm run dev` to run the app in the development mode.
- `yarn build` or `npm run build` to build the app for production to the `build` folder.

--

## Notes

- run `yarn build` or `npm run build` before publishing the plugin to Figma. This will optimize the code and remove unnecessary files.
- You'll need to restart plugin in Figma in order to see the changes.
- Do not forget to replace the name and id of the plugin in the `manifest.json` file.

---

## Feedback

If you have any feedback, please reach out to me here in issues, or on [Twitter](https://twitter.com/PaveILaptev).