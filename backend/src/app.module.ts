import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dilmindineth:dineth123@bloggie.qhsri8o.mongodb.net/bloggieDB?appName=bloggie'),
    PostsModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
