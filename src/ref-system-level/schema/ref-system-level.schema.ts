import { getModelForClass, prop } from "@typegoose/typegoose";

export class RefSystemLevel {

  @prop({ required: true })
  name: string;

  @prop()
  code: string;

  @prop({ required: true, default: true })
  isActive: boolean;
}

export const RefSystemLevelModel = getModelForClass(RefSystemLevel, { schemaOptions: { collection: 'RefSystemLevel' } })