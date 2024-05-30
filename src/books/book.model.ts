import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@ObjectType()
@Schema()
export class Book {
    @Field()
    title: string;

    @Field()
    author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
