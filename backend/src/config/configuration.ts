export default () => ({
    db: {
        port: Number(process.env.POSTGRES_PORT) || 5432,
        name: process.env.POSTGRES_NAME,
        password: process.env.POSTGRES_PASSWORD,
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST || "localhost",
    }
});