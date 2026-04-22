const Redis = require("ioredis");

let redis = null;

try {
  if (process.env.REDIS_URL) {
    redis = new Redis(process.env.REDIS_URL, {
      lazyConnect: true,
      retryStrategy: () => null,
      maxRetriesPerRequest: 1,
    });
    redis.on("connect", () => console.log("Redis connected"));
    redis.on("error", () => {
      redis = null;
    });
  }
} catch (e) {
  redis = null;
}

module.exports = redis;
