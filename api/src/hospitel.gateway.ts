import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { HospitelService } from './hospitel/hospitel.service';

@WebSocketGateway()
export class HospitelGateway implements OnGatewayInit {
  constructor(private readonly hospitelService: HospitelService) {}

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    this.hospitelService.capacityUpdate$.subscribe((data) => {
      server.to(`hospitel:${data.hospitelCode}`).emit(JSON.stringify(data));
    });
  }

  @SubscribeMessage('hospitel:subscribe')
  async handleHospitelSubscribe(
    @ConnectedSocket() client: Socket,
    @MessageBody() hospitelCode: string,
  ) {
    const hospitel = await this.hospitelService.findByCode(hospitelCode);
    if (hospitel) {
      client.join(`hospitel:${hospitel.code}`);
      this.server.to(client.id).emit(
        JSON.stringify({
          hospitelCode: hospitel.code,
          currentCapacity: hospitel.currentCapacity,
          maxCapacity: hospitel.maxCapacity,
          timestamp: Date.now(),
        } as CapacityUpdate),
      );
    }
    return;
  }

  @SubscribeMessage('hospitel:unsubscribe')
  handleHospitelUnsubscribe(
    @ConnectedSocket() client: Socket,
    @MessageBody() hospitelCode: string,
  ) {
    return;
  }
}
