import { Module } from '@nestjs/common';
import { RefSystemLevelController } from './ref-system-level.controller';
import { RefSystemLevelService } from './ref-system-level.service';

@Module({
  controllers: [RefSystemLevelController],
  providers: [RefSystemLevelService]
})
export class RefSystemLevelModule {}
