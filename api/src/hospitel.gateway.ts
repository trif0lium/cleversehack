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
  handleHospitelSubscribe(
    @ConnectedSocket() client: Socket,
    @MessageBody() hospitelCode: string,
  ) {
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
