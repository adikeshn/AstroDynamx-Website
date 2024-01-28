import HPTopBar from "../../../components/Home/TopBar/TopBar";

import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles["outside-class"]}>
      <div className={styles["inside-class"]}>
        <HPTopBar />
        <div className={styles["add-class-box"]}>
          <div className={styles["add-class-text"]}>
            Taking off your STEM education is one click away!
          </div>
          <a
            rel='noreferrer'
            href='https://docs.google.com/forms/d/e/1FAIpQLSeer3eGO5dAdOpEoN02hY01ZdAjjIjr6XrIWtWIx4MtrV4k6g/viewform?usp=sf_link'
            target='_blank'
          >
            <div className={styles["add-class-button"]}>
              <button>Start Learning</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
