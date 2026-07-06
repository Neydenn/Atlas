export default () => ({
  db: {
    port: 5432,
    host: 'localhost',
    name: 'atlas_db',
    user: process.env.user,
    password: process.env.password,
  },
});
