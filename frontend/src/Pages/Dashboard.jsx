import React from "react";
import styles from "../components/Dashboard/Dashboard.module.css";
import defaultBanner from "../assets/images/default_banner.png";
import defaultProfilePicture from "../assets/images/anonymous.jpg";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.page}>
        <div className={styles.containerDashboard}>
          <div className={styles.topContainer}>
            <div className={styles.banner}>
              <img src={defaultBanner} alt="" />
            </div>
            <div className={styles.userInfos}>
              <div className={styles.userAvatar}>
                <img src={defaultProfilePicture} alt="" />
              </div>
              <div className={styles.userName}>
                <p>John Doe</p>
              </div>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.tagDescription}>
              <div className={styles.tag}>
                <div className={styles.singleTag}>
                  <p>javascript</p>
                </div>
                <div className={styles.singleTag}>
                  <p>html</p>
                </div>
                <div className={styles.singleTag}>
                  <p>css</p>
                </div>
                <div className={styles.singleTag}>
                  <p>c#</p>
                </div>
              </div>
              <div className={styles.description}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  dicta magnam quidem quasi suscipit modi ratione omnis
                  inventore? Ad, odit iste vero dicta aperiam facere ipsam
                  voluptate nobis debitis asperiores. Sequi iure nisi harum
                  ducimus, commodi id unde, ipsa ea corporis enim eius accusamus
                  voluptatibus debitis, expedita asperiores blanditiis quaerat
                  quidem? Eaque vitae quasi debitis iure aliquid ducimus
                  explicabo laborum! Laborum architecto saepe aliquam ratione,
                  quibusdam inventore officia eos vel recusandae, necessitatibus
                </p>
              </div>
            </div>
            <div className={styles.quizz}>
              <div className={styles.singleQuizz}>
                <div className={styles.singleQuizzTop}>
                  <div>
                    <p className={styles.stack}>Javascript</p>
                  </div>
                  <div>
                    <p className={styles.score}>8/10</p>
                  </div>
                </div>
                <div className={styles.singleQuizzBottom}>
                  <p className={styles.level}>This quizz is level 1</p>
                </div>
              </div>
              <div className={styles.singleQuizz}>
                <div className={styles.singleQuizzTop}>
                  <div>
                    <p className={styles.stack}>Javascript</p>
                  </div>
                  <div>
                    <p className={styles.score}>8/10</p>
                  </div>
                </div>
                <div className={styles.singleQuizzBottom}>
                  <p className={styles.level}>This quizz is level 1</p>
                </div>
              </div>
              <div className={styles.singleQuizz}>
                <div className={styles.singleQuizzTop}>
                  <div>
                    <p className={styles.stack}>Javascript</p>
                  </div>
                  <div>
                    <p className={styles.score}>8/10</p>
                  </div>
                </div>
                <div className={styles.singleQuizzBottom}>
                  <p className={styles.level}>This quizz is level 1</p>
                </div>
              </div>
              <div className={styles.addXp}>
                <button onClick={() => navigate("/quizz")}>
                  + Ajouter une expérience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
