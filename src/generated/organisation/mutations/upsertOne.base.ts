import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneorganisationMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.organisationWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.organisationCreateInput, required: true }),
      update: t.field({ type: Inputs.organisationUpdateInput, required: true }),
    }))

export const upsertOneorganisationMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'organisation',
    nullable: false,
    args: upsertOneorganisationMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await _context.prisma.organisation.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneorganisationMutation = defineMutation((t) => ({
  upsertOneorganisation: t.prismaField(upsertOneorganisationMutationObject(t)),
}));
