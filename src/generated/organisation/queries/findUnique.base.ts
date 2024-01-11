import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueorganisationQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.organisationWhereUniqueInput, required: true }) }))

export const findUniqueorganisationQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'organisation',
    nullable: true,
    args: findUniqueorganisationQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.organisation.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueorganisationQuery = defineQuery((t) => ({
  findUniqueorganisation: t.prismaField(findUniqueorganisationQueryObject(t)),
}));
