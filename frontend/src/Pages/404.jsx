import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/notfound.module.css'
const PageNotFound = () => {
  return (
    <div className={styles.div}>
      <h1  className={styles.h1}>Page non trouvée (404)</h1>
      <p className={styles.p}>Désolé, la page que vous recherchez n'existe pas.</p>
     <Link to="/" className={styles.a}>Retour à la page d'accueil</Link>
    </div>
  );
};

export default PageNotFound;
