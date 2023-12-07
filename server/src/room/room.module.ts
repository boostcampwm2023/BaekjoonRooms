import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Room from 'src/entities/room.entity';
import { RoomUserModule } from 'src/roomUser/room.user.module';
import { UserModule } from 'src/user/user.module';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

@Module({
  imports: [UserModule, RoomUserModule, TypeOrmModule.forFeature([Room])],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
