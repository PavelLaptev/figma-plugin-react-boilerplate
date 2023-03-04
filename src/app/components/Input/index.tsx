import React from "react";
import styles from "./styles.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  label?: string;
}

const Input: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState(props.value);

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <label className={styles.label}>{props.label}</label>
      <input
        {...props}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

Input.defaultProps = {
  className: "",
  value: "",
  label: "Label",
};

export default Input;
