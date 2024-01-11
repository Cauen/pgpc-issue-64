import * as Inputs from "../../inputs/index.ts";
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyorganisationMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.organisationWhereInput, required: false }),
      data: t.field({ type: Inputs.organisationUpdateManyMutationInput, required: true }),
    }))

export const updateManyorganisationMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyorganisationMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.organisation.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyorganisationMutation = defineMutation((t) => ({
  updateManyorganisation: t.field(updateManyorganisationMutationObject(t)),
}));
