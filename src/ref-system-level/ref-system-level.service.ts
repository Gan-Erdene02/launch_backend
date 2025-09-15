import { Injectable } from '@nestjs/common';
import { RefSystemLevelModel } from './schema/ref-system-level.schema';

@Injectable()
export class RefSystemLevelService {
  public async find(query: any) {
    const limit = parseInt(query.limit) || 10;
    const offset = ((parseInt(query.page) || 1) - 1) * limit;
    const result = await RefSystemLevelModel.aggregate([
      { $match: { isActive: true } },
      { $facet: { 
        rows: [
          { $skip: offset },
          { $limit: limit }
        ], 
        total: [{ $count: 'count' }]
      }}
    ])
    const data = {
      rows: result.length === 0 ? [] : result[0].rows,
      total: result[0].total.length > 0 ? result[0].total[0].count : 0,
    };
    return data
  }

  public async create(body: any) {
    const data = new RefSystemLevelModel(body)
    return await data.save()
  }

  public async update(_id: string, body: any) {
    return await RefSystemLevelModel.updateOne({ _id }, { $set: { ...body } });
  }
}
