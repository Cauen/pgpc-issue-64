import * as express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { createServer } from "http";
import { generateSchema } from "./src/builder";

(async () => {
  const app = express();

  /**
   * Health check for codegen in dev, and in Apollo Server v4 there are no default helth checks
   * so a custom route must be defined.
   */
  app.use("/health", (_req, res) => {
    res.status(200).send("Alive and well!");
  });

  const httpServer = createServer(app);

  const apollo = new ApolloServer({
    schema: generateSchema,
  });

  await apollo.start();

  app.use("/", expressMiddleware(apollo));

  httpServer.listen(8080, () =>
    console.log(`Server is now running on http://localhost:8080`),
  );
})();
