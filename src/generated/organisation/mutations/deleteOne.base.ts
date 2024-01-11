import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneorganisationMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.organisationWhereUniqueInput, required: true }) }))

export const deleteOneorganisationMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'organisation',
    nullable: true,
    args: deleteOneorganisationMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.organisation.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneorganisationMutation = defineMutation((t) => ({
  deleteOneorganisation: t.prismaField(deleteOneorganisationMutationObject(t)),
}));
