import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";

export default function Loyaut({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
