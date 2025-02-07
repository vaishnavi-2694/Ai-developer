import Redis from "ioredis";


export const redisClient=new Redis ({
host:process.env.REDIS_HOST,
port:process.env.REDIS_PORT,
 password: process.env.REDIS_PASSWORD

})

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

