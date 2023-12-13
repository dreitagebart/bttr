import { YogaInitialContext } from "graphql-yoga";
import { GraphQLError } from "graphql";

import { prismaClient } from "../../prismaClient";
import { builder } from "../builder";

builder.queryFields((t) => ({
  me: t.prismaField({
    type: "User",
    resolve: async (query, root, args, ctx: YogaInitialContext) => {
      const payload = await ctx.request.cookieStore?.get("auth");

      if (!payload) {
        throw new GraphQLError("Not logged in");
      }

      return prismaClient.user.findUniqueOrThrow({
        where: {
          username: payload.value,
        },
      });
    },
  }),
}));
