import React from 'react';
import Authentication from '../../../components/authentication/Authentication';

const Signup = () => {
  return (
    <Authentication
      title="Inscription"
      passwordForget={false}
      actionText="Tu as déjà un compte?"
      actionLink="/connexion"
      actionTextLink="Se connecter"
    />
  );
};

export default Signup;