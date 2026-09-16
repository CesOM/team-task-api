import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            "id": '1',
            "name": 'John Doe',
            "email": 'john.doe@example.com',
            "password": 'hashed-password',
            "isActive": true,
            "createdAt": new Date(),
            "updatedAt": new Date(),
        },
    ];

    getAll(): User[] {
        return this.users;
    }

    getById(id: string): User | undefined {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    create(createUserDto: CreateUserDto): User {
        const newUser: User = {
            ...createUserDto,
            id: (this.users.length + 1).toString(),
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id: string, updateUserDto: Partial<User>): User {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        const updatedUser = {
            ...this.users[userIndex],
            ...updateUserDto,
            updatedAt: new Date(),
        };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }

}
