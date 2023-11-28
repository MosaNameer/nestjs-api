import { Injectable } from '@nestjs/common';
import { CreateMosaDto } from './dto/create-mosa.dto';
import { UpdateMosaDto } from './dto/update-mosa.dto';

@Injectable()
export class MosasService {
    private mosas = [
        { id: 1, name: 'Mosa 1', age: 20, weapon: 'sword' },
        { id: 2, name: 'Mosa 2', age: 25, weapon: 'gun' },
        { id: 3, name: 'Mosa 3', age: 30, weapon: 'knife' },
    ];

    getMosas(weapon?: 'sword' | 'gun' | 'knife') {
        if (weapon) {
            return this.mosas.filter((mosa) => mosa.weapon === weapon);
        }
        return this.mosas; 
    }

    getMosa(id: number) {
        const mosa = this.mosas.find((mosa) => mosa.id === id);

        if (!mosa) {
            throw new Error(`Mosa ${id} not found`);
        }
        return mosa;    
    }

    createMosa(createMosaDto: CreateMosaDto) {
        const newMosa = {
            ...createMosaDto,
            id: Date.now(),
        };
        this.mosas.push(newMosa);
        return newMosa;
    }

    updateMosa(id: number, updateMosaDto: UpdateMosaDto) {
        this.mosas = this.mosas.map((mosa) => {
            if (mosa.id === id) {
                return {
                    ...mosa,
                    ...updateMosaDto,
                };
            }
            return mosa;
        });
        return this.getMosa(id);
    }

    removeMosa(id: number) {
        const toBeRemoved = this.getMosa(id);
        this.mosas = this.mosas.filter((mosa) => mosa.id !== id);
        return toBeRemoved;
    }
}
