import * as React from "react";
import styles from "./app.module.scss";

import Input from "./components/Input";
import Button from "./components/Button";

// Application
const App = ({}) => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <section className={styles.wrap}>
      <h1 className={styles.title}>Figma React Boilerplate</h1>
      <p className={styles.description}>
        Select any element on the page and add an outline. This action will show
        you how the plugin and Figma API connect to each other.
      </p>
      <Input label="Outline width (px)" type="number" value="4" />
      <Button label="Add outline" onClick={handleClick} />
    </section>
  );
};

export default App;
