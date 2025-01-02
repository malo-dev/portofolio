/* eslint-disable prettier/prettier */
import { IsArray, IsMilitaryTime, IsNotEmpty, IsString } from 'class-validator';
export class createSongDTO{
@IsString()
@IsNotEmpty()
    readonly title : string;
    @IsNotEmpty()
    @IsArray()
    readonly artists : string[];
    @IsNotEmpty()
    @IsMilitaryTime()
    readonly releasedDate : Date
}