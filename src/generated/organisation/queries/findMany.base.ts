import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyorganisationQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.organisationWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.organisationOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.organisationWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.OrganisationScalarFieldEnum], required: false }),
}))

export const findManyorganisationQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['organisation'],
    nullable: false,
    args: findManyorganisationQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.organisation.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyorganisationQuery = defineQuery((t) => ({
  findManyorganisation: t.prismaField(findManyorganisationQueryObject(t)),
}));
