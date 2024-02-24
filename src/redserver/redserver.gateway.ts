import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { RedisService } from 'src/redis/redis.service';


@WebSocketGateway()
export class RedserverGateway /*implements OnGatewayConnection*/ {
  /*constructor(private readonly redisService: RedisService) {}

  async handleConnection(client: any) {
    const userId = client.id;
    const userData = {
      // Данные пользователя
      name: 'John Doe',
      lastConnection: new Date().toISOString(),
    };

    await this.redisService.set(`user:${userId}`, JSON.stringify(userData));
    console.log(`User ${userId} connected`);
  }

  */
}
