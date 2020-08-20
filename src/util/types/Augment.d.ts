import Stripe from "stripe";

export interface StripePlugin {
  (): Stripe
 }

 declare module "fastify" {
  interface FastifyInstance {
    myPluginFunc: StripePlugin
  }
 }

