import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService){}

    //Get All Posts
    @Get()
    getAllPosts(){
        return this.postsService.findAll();
    }

    //Get Posts By ID
    @Get(':id')
    getPostsById(@Param('id') id:string){
        return this.postsService.findById(id);
    }

    //Create Posts
    @Post()
    createPost(@Body() posts: CreatePostDto){
        return this.postsService.create(posts);
    }
}
