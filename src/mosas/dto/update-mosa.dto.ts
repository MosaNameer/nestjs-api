import { PartialType } from '@nestjs/mapped-types';
import { CreateMosaDto } from './create-mosa.dto';

export class UpdateMosaDto extends PartialType(CreateMosaDto) {
    name: string;
}
