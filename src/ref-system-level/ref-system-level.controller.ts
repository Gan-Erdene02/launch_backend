import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RefSystemLevelService } from './ref-system-level.service';

@Controller('ref-system-level')
export class RefSystemLevelController {
  constructor(private readonly service: RefSystemLevelService) {}

  @Get()
  public async find(@Query() query: any) {
    return this.service.find(query)
  }

  @Post()
  public async create(@Body() body: any) {
    return this.service.create(body)
  }

  @Put('/:id')
  public async update(@Param('id') _id: string, @Body() body: any) {
    return this.service.update(_id, body)
  }
}
