import { server } from "@hapi/hapi";

export const app = server({
  port: "PORT" in process.env ? Number(process.env.PORT) : 8080,
  host: "0.0.0.0",
});
