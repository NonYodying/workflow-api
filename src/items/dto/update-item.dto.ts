import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateItemDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
