import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { RecipeModule } from './recipe/recipe.module';
import { CommentModule } from './comment/comment.module';
import { ReactModule } from './react/react.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://21520176:1491076502@tastee.q30jats.mongodb.net/?retryWrites=true&w=majority&appName=Tastee'),
    UserModule,
    RecipeModule,
    CommentModule,
    ReactModule,
  ],
})
export class AppModule {}
