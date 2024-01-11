import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneorganisationMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.organisationCreateInput, required: true }) }))

export const createOneorganisationMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'organisation',
    nullable: false,
    args: createOneorganisationMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.organisation.create({ data: args.data, ...query }),
  }),
);

export const createOneorganisationMutation = defineMutation((t) => ({
  createOneorganisation: t.prismaField(createOneorganisationMutationObject(t)),
}));
