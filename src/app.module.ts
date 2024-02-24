import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedserverGateway } from './redserver/redserver.gateway';
import { RedserverModule } from './redserver/redserver.module';
import { RedisService } from './redis/redis.service';
import { TranslateModule } from './translate/translate.module';

@Module({
  imports: [RedserverModule, TranslateModule],
  controllers: [AppController],
  providers: [AppService, RedserverGateway, RedisService],
})
export class AppModule {}
