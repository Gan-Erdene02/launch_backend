import { getModelForClass, prop } from "@typegoose/typegoose";

export class User {
  
  @prop({ required: true, unique: true })
  username: string;

  @prop({ required: true })
  password: string; // Hashed

  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Role' }] })
  // roles: Types.ObjectId[];
}

export const UserModel = getModelForClass(User, { schemaOptions: { collection: 'User' } });
