let JWTRedisSession = require("jwt-redis-session"),
    redis = require("redis");

module.exports = (app) => {

    let redisClient = redis.createClient(),
        secret = "generateSecretKeySomehow";

    app.use(JWTRedisSession({
        client: redisClient,
        secret: secret,
        keyspace: "sess:",
        maxAge: 86400,
        algorithm: "HS256",
        requestKey: "session",
        requestArg: "jwtToken"
    }));
};