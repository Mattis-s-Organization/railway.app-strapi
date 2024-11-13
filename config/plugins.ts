export default ({ env }) => ({
    "users-permissions": {
        config: {
            jwtSecret: env("JWT_SECRET"),
        },
    },
    upload: {
        config: {
            provider: "local",
            providerOptions: {
                sizeLimit: 100000,
            },
        },
    },
});
