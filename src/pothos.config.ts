/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    // outputFilePath: "./src/graphql/prisma/generated/inputs/index.ts",
    outputFilePath: "./generated/inputs/index.ts",
  },
  crud: {
    // outputDir: "./src/graphql/prisma/generated",
    deleteOutputDirBeforeGenerate: true,
    inputsImporter: `import * as Inputs from "../inputs/index.ts";`,
  },
  global: {
    builderImporter: `import { builder } from "./builder";`,
    builderLocation: "./builder",
  },
};
