import { isAuthenticated } from "src/middlewares";
import { prisma } from "generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        userProfile, posts
      };
    }
  }
}