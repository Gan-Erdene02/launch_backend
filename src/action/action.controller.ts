import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActionService } from './action.service';

@Controller('action')
export class ActionController {
  constructor(private readonly service: ActionService) {}

  @Get()
  public async find() {
    return this.service.find()
  }

  @Post()
  public async create(@Body() body: any) {
    return this.service.create(body)
  }
}
