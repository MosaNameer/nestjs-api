import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateMosaDto } from './dto/create-mosa.dto';
import { UpdateMosaDto } from './dto/update-mosa.dto';
import { MosasService } from './mosas.service';

@Controller('mosas')
export class MosasController {
    constructor(private readonly mosasService: MosasService){}
    @Get()
    getMosas(@Query('weapon') weapon: 'sword' | 'gun' | 'knife'){
        return this.mosasService.getMosas(weapon);
    }

    @Get(':id')
    getOneMosa(@Param('id') id: string){
        try{
        return this.mosasService.getMosa(+id);
        }catch(err){
            throw new NotFoundException();
        }
    }

    @Post()
    createMosa(@Body() createMosaDto: CreateMosaDto){
        return this.mosasService.createMosa(createMosaDto);
    }

    @Put(':id')
    updateMosa(@Param('id') id: string, @Body() updateMosaDto: UpdateMosaDto){
        return this.mosasService.updateMosa(+id, updateMosaDto);
    }

    @Delete(':id')
    deleteMosa(@Param('id') id: string){
        return this.mosasService.removeMosa(+id);
    }
}