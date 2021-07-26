import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { HospitelService } from './hospitel/hospitel.service';

@WebSocketGateway()
export class HospitelGateway {
  constructor(private readonly hospitelService: HospitelService) {}

  @WebSocketServer()
  server: Server;

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
