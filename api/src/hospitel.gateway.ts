import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class HospitelGateway {
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
