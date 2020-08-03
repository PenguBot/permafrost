import { FastifyInstance } from "fastify";
import { HttpVerbs } from "util/types/Enum";

export default function rootService(server: FastifyInstance, _opts: unknown, done: () => unknown) {
  server.route({
    method: HttpVerbs.Get,
    url: "/",
    handler: async (_req, res) => {
      await res.send("Brr... it's freezing down here!");
    }
  });

  done();
}
