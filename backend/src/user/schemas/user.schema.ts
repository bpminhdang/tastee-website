import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true, unique: true })
  userEmail: string;

  @Prop()
  userBio: string;

  @Prop({ type: [Types.ObjectId], ref: 'User', default: [] })
  favoriteUser: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'User', default: [] })
  followers: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'User', default: [] })
  followings: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Recipe', default: [] })
  recipeSaved: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Recipe', default: [] })
  recipeIds: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'React', default: [] })
  likeIds: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Comment', default: [] })
  commentIds: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
