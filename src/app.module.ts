import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { HelloController } from './controller/hello.controller';
import { GetPostsController } from './controller/get-posts.controller';

@Module({
  imports: [],
  controllers: [HelloController, GetPostsController],
  providers: [PrismaService],
})
export class AppModule {}
