import { Injectable, NotFoundException } from '@nestjs/common';
import { Posts } from './schemas/posts.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Posts.name)
        private postModel: mongoose.Model<Posts>
    ){}

    async findAll(){
        const posts = await this.postModel.find();
        return posts;
    }

    async create(posts: Posts){
        const res = await this.postModel.create(posts)
        return res
    }

    async findById(id:string){
        const post = await this.postModel.findById(id)
        if(!post){
            throw new NotFoundException('Post not found!!')
        }
        return post
    }
}
