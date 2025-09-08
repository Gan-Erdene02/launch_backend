import { Injectable } from '@nestjs/common';
import { RoleModel } from './schema/role.schema';

@Injectable()
export class RoleService {
  public async find() {
    return await RoleModel.find()
  }

  public async create(body: any) {
    const data = new RoleModel(body)
    return await data.save()
  }
}
