import React, { useState } from 'react';
import '../styles/register.css';
const Register = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (step === 1 && !email) {
      setError('Veuillez entrer une adresse e-mail.');
    } else if (step === 3 && !password) {
      setError('Veuillez choisir un mot de passe.');
    } else if (step === 4 && password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
    } else {
      setError('');
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Votre logique d'inscription ici
    console.log('Inscription réussie !');
  };

  return (
    <div className='container'>
      <h2>Inscription</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {step === 1 && (
        <>
          <p>Veuillez entrer votre adresse e-mail :</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleNext}>Suivant</button>
        </>
      )}
      {step === 2 && (
        <>
          <p>Bienvenue {email} ! Veuillez entrer votre nom et prénom :</p>
          <input type="text" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </>
      )}
      {step === 3 && (
        <>
          <p>Bien {firstName} {lastName} ! Veuillez maintenant choisir un mot de passe :</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </>
      )}
      {step === 4 && (
        <>
          <p>Presque terminé ! Veuillez confirmer votre mot de passe :</p>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </>
      )}
      {step === 5 && (
        <>
          <p>Merci {firstName} ! Veuillez accepter nos conditions d'utilisation et politique de confidentialité :</p>
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">J'accepte les conditions d'utilisation.</label><br />
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleSubmit}>S'inscrire</button>
        </>
      )}
    </div>
  );
};

export default Register;
