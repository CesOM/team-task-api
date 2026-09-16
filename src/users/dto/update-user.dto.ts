import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";


export class UpdateUserDto {
    
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;

}