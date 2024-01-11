// @ts-nocheck
import { Prisma } from '.prisma/client';

import { builder } from '../../builder';

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};



export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const OrganisationScalarFieldEnum = builder.enumType('OrganisationScalarFieldEnum', {
  values: ["ID","Name"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const NullsOrder = builder.enumType('NullsOrder', {
  values: ["first","last"] as const,
});

export const organisationWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[organisationWhereInput]}),
  OR: t.field({"required":false,"type":[organisationWhereInput]}),
  NOT: t.field({"required":false,"type":[organisationWhereInput]}),
  ID: t.field({"required":false,"type":IntFilter}),
  Name: t.field({"required":false,"type":StringNullableFilter}),
});
export const organisationWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationWhereInput>, false>('organisationWhereInput').implement({
  fields: organisationWhereInputFields,
});

export const organisationOrderByWithRelationInputFields = (t: any) => ({
  ID: t.field({"required":false,"type":SortOrder}),
  Name: t.field({"required":false,"type":SortOrder}),
});
export const organisationOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationOrderByWithRelationInput>, false>('organisationOrderByWithRelationInput').implement({
  fields: organisationOrderByWithRelationInputFields,
});

export const organisationWhereUniqueInputFields = (t: any) => ({
  ID: t.int({"required":false}),
  AND: t.field({"required":false,"type":[organisationWhereInput]}),
  OR: t.field({"required":false,"type":[organisationWhereInput]}),
  NOT: t.field({"required":false,"type":[organisationWhereInput]}),
  Name: t.field({"required":false,"type":StringNullableFilter}),
});
export const organisationWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationWhereUniqueInput>, false>('organisationWhereUniqueInput').implement({
  fields: organisationWhereUniqueInputFields,
});

export const organisationOrderByWithAggregationInputFields = (t: any) => ({
  ID: t.field({"required":false,"type":SortOrder}),
  Name: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":organisationCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":organisationAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":organisationMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":organisationMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":organisationSumOrderByAggregateInput}),
});
export const organisationOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationOrderByWithAggregationInput>, false>('organisationOrderByWithAggregationInput').implement({
  fields: organisationOrderByWithAggregationInputFields,
});

export const organisationScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[organisationScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[organisationScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[organisationScalarWhereWithAggregatesInput]}),
  ID: t.field({"required":false,"type":IntWithAggregatesFilter}),
  Name: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
});
export const organisationScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationScalarWhereWithAggregatesInput>, false>('organisationScalarWhereWithAggregatesInput').implement({
  fields: organisationScalarWhereWithAggregatesInputFields,
});

export const organisationCreateInputFields = (t: any) => ({
  Name: t.string({"required":false}),
});
export const organisationCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationCreateInput>, false>('organisationCreateInput').implement({
  fields: organisationCreateInputFields,
});

export const organisationUpdateInputFields = (t: any) => ({
  Name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const organisationUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationUpdateInput>, false>('organisationUpdateInput').implement({
  fields: organisationUpdateInputFields,
});

export const organisationCreateManyInputFields = (t: any) => ({
  ID: t.int({"required":false}),
  Name: t.string({"required":false}),
});
export const organisationCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationCreateManyInput>, false>('organisationCreateManyInput').implement({
  fields: organisationCreateManyInputFields,
});

export const organisationUpdateManyMutationInputFields = (t: any) => ({
  Name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const organisationUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationUpdateManyMutationInput>, false>('organisationUpdateManyMutationInput').implement({
  fields: organisationUpdateManyMutationInputFields,
});

export const IntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFilter>, false>('IntFilter').implement({
  fields: IntFilterFields,
});

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>, false>('StringNullableFilter').implement({
  fields: StringNullableFilterFields,
});

export const organisationCountOrderByAggregateInputFields = (t: any) => ({
  ID: t.field({"required":false,"type":SortOrder}),
  Name: t.field({"required":false,"type":SortOrder}),
});
export const organisationCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationCountOrderByAggregateInput>, false>('organisationCountOrderByAggregateInput').implement({
  fields: organisationCountOrderByAggregateInputFields,
});

export const organisationAvgOrderByAggregateInputFields = (t: any) => ({
  ID: t.field({"required":false,"type":SortOrder}),
});
export const organisationAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationAvgOrderByAggregateInput>, false>('organisationAvgOrderByAggregateInput').implement({
  fields: organisationAvgOrderByAggregateInputFields,
});

export const organisationMaxOrderByAggregateInputFields = (t: any) => ({
  ID: t.field({"required":false,"type":SortOrder}),
  Name: t.field({"required":false,"type":SortOrder}),
});
export const organisationMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationMaxOrderByAggregateInput>, false>('organisationMaxOrderByAggregateInput').implement({
  fields: organisationMaxOrderByAggregateInputFields,
});

export const organisationMinOrderByAggregateInputFields = (t: any) => ({
  ID: t.field({"required":false,"type":SortOrder}),
  Name: t.field({"required":false,"type":SortOrder}),
});
export const organisationMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationMinOrderByAggregateInput>, false>('organisationMinOrderByAggregateInput').implement({
  fields: organisationMinOrderByAggregateInputFields,
});

export const organisationSumOrderByAggregateInputFields = (t: any) => ({
  ID: t.field({"required":false,"type":SortOrder}),
});
export const organisationSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.organisationSumOrderByAggregateInput>, false>('organisationSumOrderByAggregateInput').implement({
  fields: organisationSumOrderByAggregateInputFields,
});

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>, false>('IntWithAggregatesFilter').implement({
  fields: IntWithAggregatesFilterFields,
});

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>, false>('StringNullableWithAggregatesFilter').implement({
  fields: StringNullableWithAggregatesFilterFields,
});

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const NullableStringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>, false>('NullableStringFieldUpdateOperationsInput').implement({
  fields: NullableStringFieldUpdateOperationsInputFields,
});

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({"required":false}),
  increment: t.int({"required":false}),
  decrement: t.int({"required":false}),
  multiply: t.int({"required":false}),
  divide: t.int({"required":false}),
});
export const IntFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>, false>('IntFieldUpdateOperationsInput').implement({
  fields: IntFieldUpdateOperationsInputFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>, false>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>, false>('NestedStringNullableFilter').implement({
  fields: NestedStringNullableFilterFields,
});

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>, false>('NestedIntWithAggregatesFilter').implement({
  fields: NestedIntWithAggregatesFilterFields,
});

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>, false>('NestedFloatFilter').implement({
  fields: NestedFloatFilterFields,
});

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>, false>('NestedStringNullableWithAggregatesFilter').implement({
  fields: NestedStringNullableWithAggregatesFilterFields,
});

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const NestedIntNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>, false>('NestedIntNullableFilter').implement({
  fields: NestedIntNullableFilterFields,
});