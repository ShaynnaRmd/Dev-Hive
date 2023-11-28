import React, { useEffect } from "react";
import styles from "../components/Dashboard/Dashboard.module.css";
import defaultBanner from "../assets/images/default_banner.png";
import defaultProfilePicture from "../assets/images/anonymous.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const [profileData, setProfileData] = useState(false);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const getProfileData = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const url = `https://prodev-ba4t.onrender.com/displayProfile/${id}`;
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(
          `Échec de la requête avec le code d'état ${response.status}`
        );
      }

      const responseServer = await response.json();
      console.log("Requete réussie :", responseServer);
      setProfileData(responseServer);
      console.log(responseServer.data.profile.stack);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      {profileData && (
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
                  <p>{`${profileData.data.profile.firstname} ${profileData.data.profile.lastname}`}</p>
                </div>
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.tagDescription}>
                <div className={styles.tag}>
                  {profileData.data.profile.stack &&
                    profileData.data.profile.stack.map((stack) => {
                      return (
                        <div className={styles.singleTag}>
                          <p>{stack}</p>
                        </div>
                      );
                    })}
                </div>
                <div className={styles.description}>
                  <p>{profileData.data.profile.description}</p>
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
                  <button>+ Ajouter une expérience</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
