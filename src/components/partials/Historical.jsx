import React from 'react';
import '../../styles/historical.css';

const files = [
  'Rapport_Analyse_Marché.txt',
  'Plan_Projet.txt',
  'Revue_Littérature.txt',
  'Étude_Faisabilité.txt',
  'Budget_Initial.txt',
  'Analyse_Risques.txt',
  'Stratégie_Marketing.txt',
  'Cahier_Charges.txt',
  'Spécifications_Techniques.txt',
  'Plan_Test.txt',
  'Rapport_Progression.txt',
  'Évaluation_Intermédiaire.txt',
  'Bilan_Final.txt',
  'Plan_Maintenance.txt',
  'Guide_Utilisateur.txt',
  'Rapport_Audit.txt',
  'Document_Formation.txt',
  'Recommandations_Améliorations.txt',
  'Présentation_Client.txt',
  'Résumé_Exécutif.txt'
];

const Historical = () => {
  return (
    <div className='Historical'>
      <h2>Fichiers analysés</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Historical;
