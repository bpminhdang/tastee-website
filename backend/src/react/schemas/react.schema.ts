import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReactDocument = React & Document;

@Schema()
export class React {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  authorId: Types.ObjectId;

  @Prop({ default: Date.now })
  time: Date;

  @Prop({ required: true })
  type: string; // e.g., 'like', 'save', 'love'

  @Prop({ type: Types.ObjectId, required: true }) // Can be Recipe or Comment
  objectId: Types.ObjectId;
}

export const ReactSchema = SchemaFactory.createForClass(React);
