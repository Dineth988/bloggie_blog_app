import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';


export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail({}, {message: "Please entercorrect email"})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;


}