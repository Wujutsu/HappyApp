import React from 'react';
import Authentication from '../../../components/authentication/Authentication';

const Login = () => {
  return (
    <Authentication
      title="Connexion"
      passwordForget={true}
      actionText="Tu n'as pas encore de compte?"
      actionLink="/inscription"
      actionTextLink="S'inscrire"
    />
  );
};

export default Login;