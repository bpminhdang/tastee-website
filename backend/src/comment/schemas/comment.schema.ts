import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  time: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  authorId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Recipe', required: true })
  recipeId: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
