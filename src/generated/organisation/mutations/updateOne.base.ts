import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneorganisationMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.organisationWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.organisationUpdateInput, required: true }),
    }))

export const updateOneorganisationMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'organisation',
    nullable: true,
    args: updateOneorganisationMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.organisation.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneorganisationMutation = defineMutation((t) => ({
  updateOneorganisation: t.prismaField(updateOneorganisationMutationObject(t)),
}));
