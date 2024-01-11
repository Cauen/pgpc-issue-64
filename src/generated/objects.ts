import { Prisma } from '.prisma/client';
export {
  organisationObject,
  organisationIDFieldObject,
  organisationNameFieldObject,
  createManyorganisationMutation,
  createOneorganisationMutation,
  deleteManyorganisationMutation,
  deleteOneorganisationMutation,
  updateManyorganisationMutation,
  updateOneorganisationMutation,
  upsertOneorganisationMutation,
  createManyorganisationMutationObject,
  createOneorganisationMutationObject,
  deleteManyorganisationMutationObject,
  deleteOneorganisationMutationObject,
  updateManyorganisationMutationObject,
  updateOneorganisationMutationObject,
  upsertOneorganisationMutationObject,
  findFirstorganisationQuery,
  findManyorganisationQuery,
  countorganisationQuery,
  findUniqueorganisationQuery,
  findFirstorganisationQueryObject,
  findManyorganisationQueryObject,
  countorganisationQueryObject,
  findUniqueorganisationQueryObject
} from './organisation';
import { builder } from '../builder';

export const BatchPayload = builder.objectType(builder.objectRef<Prisma.BatchPayload>('BatchPayload'), {
  description: 'Batch payloads from prisma.',
  fields: (t) => ({
    count: t.exposeInt('count', { description: 'Prisma Batch Payload', nullable: false }),
  }),
});

export const modelNames = [
  'organisation',
] as const;

export type Model = typeof modelNames[number];
