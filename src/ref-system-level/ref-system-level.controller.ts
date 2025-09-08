import { Body, Controller, Get, Post } from '@nestjs/common';
import { RefSystemLevelService } from './ref-system-level.service';

@Controller('ref-system-level')
export class RefSystemLevelController {
  constructor(private readonly service: RefSystemLevelService) {}

  @Get()
  public async find() {
    return this.service.find()
  }

  @Post()
  public async create(@Body() body: any) {
    return this.service.create(body)
  }
}
