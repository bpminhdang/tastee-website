import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop({ required: true })
  recipeTitle: string;

  @Prop()
  recipeCap: string;

  @Prop()
  recipeIngr: string;

  @Prop()
  recipeStep: string;

  @Prop()
  recipeImg: string;

  @Prop()
  recipeTime: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  authorId: Types.ObjectId;

  @Prop({ default: true })
  isShow: boolean;

  @Prop({ type: [Types.ObjectId], ref: 'Comment', default: [] })
  commentIds: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'React', default: [] })
  recipeLikeIds: Types.ObjectId[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
