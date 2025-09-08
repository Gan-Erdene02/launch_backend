import { Injectable } from '@nestjs/common';
import { ActionModel } from './schema/action.schema';

@Injectable()
export class ActionService {
  public async find() {
    return await ActionModel.find()
  }

  public async create(body: any) {
    const data = new ActionModel(body)
    return await data.save()
  }

}
