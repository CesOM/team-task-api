import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.usersService.getById(id);
    }

    @Post()
    create(
        @Body() createUserDto: CreateUserDto,
    ) {
       return this.usersService.create(createUserDto);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
}
