import Keycloak from 'keycloak-js';

export const keycloakConfig = {
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'officers-pro',
  url: (import.meta.env.VITE_KEYCLOAK_URL || 'https://dev-keycloak.officerspro.in').replace(/\/+$/, ''),
  clientId: 'officerpro-officer-app',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;