import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import styles from "../assets/css/Profile.module.css";
import svgleft from "../assets/svg/svgleft.svg";
import svgtop from "../assets/svg/svgtop.svg";
import svgright from "../assets/svg/svgright.svg";

export function Profile() {
  const [inputValues, setInputValues] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [checkedStacks, setCheckedStacks] = useState({});
  const [banner, setBanner] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const stacks = [
    "Python",
    "HTML",
    "CSS",
    "NodeJS",
    "PHP",
    "React",
    "Angular",
    "Java",
    "Javascript",
  ];

  const sendProfileData = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const url = `https://prodev-ba4t.onrender.com/createProfile/${id}`;
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(
          `Échec de la requête avec le code d'état ${response.status}`
        );
      }

      const responseServer = await response.json();
      console.log("Requete réussie :", responseServer);
      if (responseServer.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let listStacks = [];
    for (const [key, value] of Object.entries(checkedStacks)) {
      if (value) {
        listStacks.push(key);
      }
    }
    const data = {
      firstname: firstName,
      lastname: lastName,
      description: description,
      stack: listStacks,
      // banner: banner,
      // profilePicture: profilePicture.name,
    };
    console.log(data);
    sendProfileData(data);
  };

  const handleCheckboxChange = (stack) => {
    // Met à jour l'état de la case à cocher spécifique
    setCheckedStacks((prevCheckedStacks) => ({
      ...prevCheckedStacks,
      [stack]: !prevCheckedStacks[stack], // Inverse l'état précédent
    }));
  };

  return (
    <div className={styles.profileContainer}>
      <img src={svgleft} className={styles.svgleft} alt="" />
      <img src={svgtop} className={styles.svgtop} alt="" />
      <img src={svgright} className={styles.svgright} alt="" />

      <div className={styles.form}>
        <div className={styles.title}>
          <h2>Construisons ton profile !</h2>
        </div>
        <form action="" onSubmit={formSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="" className={styles.label}>
              Prénom
            </label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer} id={styles.description}>
            <label htmlFor="" className={styles.label}>
              Description
            </label>
            <textarea
              className={styles.input}
              name=""
              cols="30"
              rows="10"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.inputContainer}>
            <fieldset>
              <legend>Technologies maitrisés</legend>
              {stacks.map((stack) => {
                return (
                  <div className={styles.checkboxcontainer}>
                    <label htmlFor="" className={styles.label}>
                      {stack}
                    </label>
                    <input
                      type="checkbox"
                      value={stack}
                      checked={checkedStacks[stack] || false}
                      onChange={() => handleCheckboxChange(stack)}
                    />
                  </div>
                );
              })}
            </fieldset>
          </div>
          <div className={styles.button}>
            <div className={styles.btn}>
              <button>Bannière</button>
              <input
                onChange={(e) => setBanner(e.target.files[0])}
                type="file"
                style={{
                  position: "absolute",
                  top: "0px",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.btn}>
              <button>Photo de Profile</button>
              <input
                onChange={(e) => setProfilePicture(e.target.files[0])}
                type="file"
                style={{
                  position: "absolute",
                  top: "0px",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <input className={styles.confirm} type="submit" value="Confirmer" />
        </form>
      </div>
    </div>
  );
}
