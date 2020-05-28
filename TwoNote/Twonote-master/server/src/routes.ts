import { app } from "./server";
import { counter } from "./counter";

app.route({
  method: "GET",
  path: "/",
  handler() {
    return counter.value;
  },
});

app.route({
  method: "POST",
  path: "/increment",
  handler() {
    counter.increment();
  },
});
