import { ResolverMap } from "../../../types/graphql-utils";
import { User } from '../../../entity/User';
import { createMiddleware } from "../../../utils/createMiddleware";
import middleware from "./middleware";
import { getRepository } from "typeorm";

export const resolvers: ResolverMap = {
  Query: {
    me: createMiddleware(middleware, (_, __, { session }) =>
      getRepository(User).findOne({ where: { id: session.userId } })
    )
  }
};
