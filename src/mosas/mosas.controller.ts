import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateMosaDto } from './dto/create-mosa.dto';
import { UpdateMosaDto } from './dto/update-mosa.dto';

@Controller('mosas')
export class MosasController {
    @Get()
    getMosas(@Query('type') type: string){
        return [{ type }];
    }

    @Get(':id')
    getOneMosa(@Param('id') id: string){
        return {
            message: `Mosa ${id}`
        };
    }

    @Post()
    createMosa(@Body() createMosaDto: CreateMosaDto){
        return {
            name: createMosaDto.name,
        };
    }

    @Put(':id')
    updateMosa(@Param('id') id: string, @Body() updateMosaDto: UpdateMosaDto){
        return {
            id,
            name: updateMosaDto.name,
        };
    }

    @Delete(':id')
    deleteMosa(@Param('id') id: string){
        return {
            message: `Mosa ${id}`
        };
    }
}