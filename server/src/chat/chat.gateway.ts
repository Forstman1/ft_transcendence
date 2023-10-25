import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway, OnGatewayConnection, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Body, Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { th, tr } from '@faker-js/faker';



@WebSocketGateway({namespace: '/chat'}) 
export class ChatGateway implements OnGatewayInit , OnGatewayConnection {
  @WebSocketServer()
  server: Server;


  private readonly connectedClients: {[userID: string]: Socket} = {}
  private logger: Logger = new Logger('ChatGateway');

  
  afterInit() {
      this.logger.log('Initialized')
  }
  handleConnection(client: Socket) {
    // console.log(client)
    // return client
  }
  handleDisconnect(client: any) {
    // Handle disconnection event
  }
  @SubscribeMessage(`createRoom`)
  createRoom(
    @Body() data: {userId: string},
    @ConnectedSocket() client: Socket
  ) : string {
    try {
      const userId = data.userId;
      client.join(userId);
      this.connectedClients[userId] = client;
      return `the room has been created`;
    }
    catch(error) {
      console.log(error)
    }
  }
 //! SINCE THE ROOM WILL TAKE THE USER ID THE DB MODAL SHOULD ALSO HAVE THE SAME
  // @SubscribeMessage(`createNotif`)
}
