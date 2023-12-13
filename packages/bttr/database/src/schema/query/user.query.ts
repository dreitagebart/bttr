import { prismaClient } from "../../prismaClient";
import { builder } from "../builder";

builder.queryFields((t) => ({
  users: t.prismaField({
    type: ["User"],
    resolve: (query, root, args, ctx) => {
      return prismaClient.user.findMany({});
    },
  }),
}));
