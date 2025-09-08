import { Body, Controller, Get, Post } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly service: MenuService) {}

  @Get()
  public async find() {
    return this.service.find()
  }

  @Post()
  public async create(@Body() body: any) {
    return this.service.create(body)
  }
}
