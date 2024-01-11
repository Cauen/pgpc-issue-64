import SchemaBuilder from "@pothos/core";
import { PrismaClient } from ".prisma/client";
import { Prisma } from "@prisma/client";
import PrismaPlugin from "@pothos/plugin-prisma";
import { Scalars } from "prisma-generator-pothos-codegen";
import PrismaTypes from "@pothos/plugin-prisma/generated";

const prisma = new PrismaClient({});

export const builder = new SchemaBuilder<{
  Context: { prisma: PrismaClient };
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<
    Prisma.Decimal,
    Prisma.InputJsonValue | null,
    Prisma.InputJsonValue
  >; // required to define correct types for created scalars.
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
    filterConnectionTotalCount: true,
  },
});


