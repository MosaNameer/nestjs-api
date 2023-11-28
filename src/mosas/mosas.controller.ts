import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

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
    createMosa(@Body() createMosaDto){
        return {};
    }

    @Put(':id')
    updateMosa(@Param('id') id: string){
        return {
            message: `Mosa ${id}`
        };
    }

    @Delete(':id')
    deleteMosa(@Param('id') id: string){
        return {
            message: `Mosa ${id}`
        };
    }
}