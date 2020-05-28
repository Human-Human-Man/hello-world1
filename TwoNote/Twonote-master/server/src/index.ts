import "./routes";

import { app } from "./server";

(async (): Promise<void> => {
  await app.start();

  console.log(`Server listening at ${app.info.uri}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
