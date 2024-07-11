import React from "react";
import { useState } from "react";
import '../../styles/header.css';

const Header = () => {
  // Par défaut, la langue est le français
  const [langue, setLangue] = useState("fr");

  // Fonction pour changer la langue
  const changerLangue = (nouvelleLangue) => {
    setLangue(nouvelleLangue);
  };
  return (
    <div className="header-container">
      <h1></h1>
      {/* Élément de sélection de langue */}

      <div>
        <p>John Smith</p>
      </div>
    </div>
  );
};

export { Header };
