import { Module } from '@nestjs/common';
import { RedserverService } from './redserver.service';

@Module({
  providers: [RedserverService]
})
export class RedserverModule {}
