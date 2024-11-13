export default ({ env }) => ({
    "users-permissions": {
        config: {
            jwtSecret: env("JWT_SECRET"),
        },
    },
    upload: {
        config: {
            provider: "local",
            sizeLimit: 1_000_000,
        },
    },
});
