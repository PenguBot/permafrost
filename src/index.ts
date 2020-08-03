import fastify from "fastify";
import cors from "fastify-cors";
import helmet from "fastify-helmet";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore (No types published, and I dunno how to properly type it)
import rawBody from "fastify-raw-body";
import sensible from "fastify-sensible";

import { POWERED_BY } from "./tokens";
import rootService from "./services/root";

const server = fastify({
  logger: true
});

async function run() {
  await server.register(helmet, {
    hidePoweredBy: {
      setTo: process.env.POWERED_BY ?? POWERED_BY
    }
  })
  .register(rawBody, {
    field: "rawBody",
    global: false,
    encoding: "utf8"
  })
  .register(cors, {
    origin: "*.pengubot.com"
  })
  .register(sensible);

  server.addContentTypeParser("text/plain", () => {
    throw server.httpErrors.badRequest();
  });

  await server.register(rootService);
  await server.listen(8791);
  console.log("Permafrost is up on port 8791");
}

void run();
