import * as Inputs from "../../inputs/index.ts";
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyorganisationMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.organisationWhereInput, required: true }) }))

export const deleteManyorganisationMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyorganisationMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await _context.prisma.organisation.deleteMany({ where: args.where }),
  }),
);

export const deleteManyorganisationMutation = defineMutation((t) => ({
  deleteManyorganisation: t.field(deleteManyorganisationMutationObject(t)),
}));
