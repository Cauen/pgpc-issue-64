import { builder } from "./builder";
import { generateAllCrud } from "./generated/autocrud";

generateAllCrud();

builder.queryType({});
builder.mutationType({});

export const generateSchema = builder.toSchema();