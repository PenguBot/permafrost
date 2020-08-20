import stripe from "stripe";
import fp from "fastify-plugin";
import { STRIPE_TOKEN } from "../tokens";

const stripePlugin = fp(server => {
  server.decorate("stripe", () => new stripe(process.env.STRIPE_TOKEN ?? STRIPE_TOKEN, { apiVersion: "2020-03-02", typescript: true }));
});

export default stripePlugin;
