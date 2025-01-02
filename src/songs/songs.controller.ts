/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService : SongsService){}
  @Post()
  create(){
    return this.songsService.create("first song")
  }
  @Get()
  findAll() {
    return this.songsService.findAll()
  }
  @Get(":id")
  findOne(){
    return "alooo id"
  }
  @Delete(':id')
  deleteAll(){
    return "songs is deleted sucessfully"
  }
  @Put(':id')
  updateAll(){
    return "songs is updated successfully"
  }
}
