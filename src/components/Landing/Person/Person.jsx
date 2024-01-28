import styles from "./Person.module.scss";

function Person({ name, desc }) {
  return (
    <div className={styles["person-div"]}>
      <img
        src={"daddydonald.jpg"}
        className={styles["profile-img"]}
      />
      <span className={styles["name-text"]}>{name}</span>
      <div className={styles["desc-text"]}>{desc}</div>
    </div>
  );
}

export default Person;
