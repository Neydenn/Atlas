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
  },
});
