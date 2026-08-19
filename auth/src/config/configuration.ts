import { readFileSync } from 'node:fs';

const privateKeyPath = process.env.JWT_PRIVATE_KEY_PATH;

export default () => ({
  db: {
    port: 5432,
    host: 'host.lima.internal',
    name: 'atlas_users',
    user: process.env.user,
    password: process.env.password,
  },
  jwt: {
    secret: process.env.secret,
    privateKey: privateKeyPath
      ? readFileSync(privateKeyPath, { encoding: 'utf8' })
      : undefined,
  },
});
