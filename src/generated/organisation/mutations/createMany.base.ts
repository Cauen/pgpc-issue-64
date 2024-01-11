import * as Inputs from "../../inputs/index.ts";
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyorganisationMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.organisationCreateInput], required: true }) }))

export const createManyorganisationMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['organisation'],
    nullable: false,
    args: createManyorganisationMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await _context.prisma.$transaction(args.data.map((data) => _context.prisma.organisation.create({ data }))),
  }),
);

export const createManyorganisationMutation = defineMutation((t) => ({
  createManyorganisation: t.prismaField(createManyorganisationMutationObject(t)),
}));
