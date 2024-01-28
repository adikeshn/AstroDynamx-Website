import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>Fueling Dreams with STEM Tutoring and Rocketry</h1>
      <Link
        to='/signup'
        className={styles["button"]}
      >
        Get Started
      </Link>
    </div>
  );
};

export default Header;
