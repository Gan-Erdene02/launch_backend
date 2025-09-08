import { Prop, Schema } from "@nestjs/mongoose";
import { getModelForClass } from "@typegoose/typegoose";
import { Types } from "mongoose";

@Schema()
export class Menu {
  @Prop({ required: true })
  name: string;

  @Prop()
  path: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Action' }] })
  actions: Types.ObjectId[];
}

export const MenuModel = getModelForClass(Menu, { schemaOptions: { collection: 'Menu' } });
