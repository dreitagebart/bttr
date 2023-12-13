import express from "express";
import { createYoga } from "graphql-yoga";
import { schema, useCookies } from "@bttr/database";

import { getAppFolders, getAppName, getAppPath } from "./utils";

const app = express();

const yoga = createYoga({
  plugins: [useCookies()],
  schema,
  graphqlEndpoint: "/graphql",
});

app.use(yoga.graphqlEndpoint, yoga);

// app.use("/launchpad", express.static("/bttr/core/launchpad/dist"));

// getAppFolders("bttr").map((folder) => {
//   app.use(`/apps/bttr/${folder}`, express.static(getAppPath(folder, "bttr")));
// });

// getAppFolders("custom").map((folder) => {
//   app.use(
//     `/apps/custom/${folder}`,
//     express.static(getAppPath(folder, "custom"))
//   );
// });

// app.get("/", (req, res) => {
//   res.sendFile("/bttr/core/launchpad/dist/index.html");
// });

// app.get("/hello", (req, res) => {
//   res.json({ hello: "world" });
// });

// app.get("/apps/bttr/*", (req, res) => {
//   return res.sendFile(getAppPath(getAppName(req), "bttr"));
// });

// app.get("/apps/custom/*", (req, res) => {
//   return res.json({ appName: getAppName(req) });
// });

app.listen(3000, () => {
  console.log(`Running a GraphQL API server at http://localhost:3000/graphql`);
});
