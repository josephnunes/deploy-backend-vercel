import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('posts')
export class GetPostsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getPosts() {
    const posts = await this.prisma.post.findMany();
    return { posts };
  }
}
