import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countorganisationQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.organisationWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.organisationOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.organisationWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.OrganisationScalarFieldEnum], required: false }),
}))

export const countorganisationQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countorganisationQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.organisation.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countorganisationQuery = defineQuery((t) => ({
  countorganisation: t.field(countorganisationQueryObject(t)),
}));
