import styles from "./Mission.module.scss";

const Mission = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text"]}>
        <h1 className={styles["title"]}>MISSION STATEMENT</h1>
        <div className={styles["descriptions"]}>
          <p className={styles["description"]}>
            Hey and welcome to AstroDynamX! We are a group of passionate high school students
            working to create a rocket that will reach space and make aerospace engineering more
            accessible to all. Doing this is hard and we know it&apos;s hard, but that is what makes
            it fulfilling. In a year when we have our rocket flying, you will thank yourself for
            putting in the work.
          </p>
          <p className={styles["description"]}>
            Of course, we are very privileged, and it is important to give back to our community.
            That is why we are also creating teaching resources that will educate the next
            generation on STEM topics. Hopefully you stick with us on our mission. We&apos;d love to
            have your help!
          </p>
        </div>
      </div>
      <img
        className={styles["earth"]}
        src='earth.png'
        alt=''
      />
    </div>
  );
};

export default Mission;
