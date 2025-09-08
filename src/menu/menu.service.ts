import { Injectable } from '@nestjs/common';
import { MenuModel } from './schema/menu.schema';

@Injectable()
export class MenuService {
  public async find() {
    return await MenuModel.find()
  }

  public async create(body: any) {
    const data = new MenuModel(body)
    return await data.save()
  }
}
