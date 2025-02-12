import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {
  @Get()
  async getPosts() {
    return { message: "Uhuuul! It's working!" };
  }
}
