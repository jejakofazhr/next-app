import Tokens from 'csrf';
const tokens = new Tokens();

export const generateCsrfToken = (secret) => tokens.create(secret);
export const validateCsrfToken = (secret, token) => tokens.verify(secret, token);
