import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({
    timestamps: true
})
export class Posts{

    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    category: string;

    @Prop({ required: true })
    content: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts)