import "src/env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "src/passport";

import { authenticateJwt } from "src/passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ 
  schema,
  context: ({ request }) => ({ request })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`✅ GraphQL Server: http://localhost:${PORT}`)
);