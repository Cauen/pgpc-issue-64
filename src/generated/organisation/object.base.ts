import * as Inputs from "../inputs/index.ts";
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const organisationObject = definePrismaObject('organisation', {
  description: undefined,
  findUnique: ({ ID }) => ({ ID }),
  fields: (t) => ({
    ID: t.field(organisationIDFieldObject),
    Name: t.field(organisationNameFieldObject),
  }),
});

export const organisationIDFieldObject = defineFieldObject('organisation', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.ID),
});

export const organisationNameFieldObject = defineFieldObject('organisation', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.Name,
});
