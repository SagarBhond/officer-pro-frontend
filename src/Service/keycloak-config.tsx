import Keycloak from 'keycloak-js';

export const keycloakConfig = {
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'OfficerPro',
  url: (import.meta.env.VITE_KEYCLOAK_URL || 'https://auth.sagarbhond.site').replace(/\/+$/, ''),
  clientId: 'officerpro-officer-app',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;