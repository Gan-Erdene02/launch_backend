import { Prop, Schema } from "@nestjs/mongoose";
import { getModelForClass } from "@typegoose/typegoose";
import { Types } from "mongoose";

@Schema()
export class Role {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Menu' }] })
  menus: Types.ObjectId[];
}

export const RoleModel = getModelForClass(Role, { schemaOptions: { collection: 'Role' } });
