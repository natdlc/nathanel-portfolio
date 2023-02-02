import styles from "./anchor.module.css";

export default function Anchor(props) {
  return (
    <a className={styles.custom} {...props}>
      {props.children}
    </a>
  );
}
