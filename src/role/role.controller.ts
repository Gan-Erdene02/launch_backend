import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Get()
  public async find() {
    return this.service.find()
  }

  @Post()
  public async create(@Body() body: any) {
    return this.service.create(body)
  }
}
