import { getModelForClass, prop } from "@typegoose/typegoose";

export class Action {

  @prop({ required: true })
  name: string;

  @prop()
  code: string;
}

export const ActionModel = getModelForClass(Action, { schemaOptions: { collection: 'Action' } })