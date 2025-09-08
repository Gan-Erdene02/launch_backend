import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  public async find() {
    return this.service.find()
  }

  @Post()
  public async create(@Body() body: any) {
    return this.service.create(body)
  } 
  
}
