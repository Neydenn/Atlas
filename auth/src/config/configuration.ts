export default () => ({
  db: {
    port: 5432,
    host: 'localhost',
    name: 'auth_db',
    user: process.env.user,
    password: process.env.password,
  },
  jwt: {
    secret: process.env.secret,
  },
});
