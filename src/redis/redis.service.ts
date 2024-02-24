import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  /*private redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      host: '127.0.0.1',
      port: 6379,
    });
  }

  getClient(): Redis {
    return this.redisClient;
  }

  async set(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }*/
}
