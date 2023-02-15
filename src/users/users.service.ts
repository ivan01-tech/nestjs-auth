import { Injectable } from '@nestjs/common';
import { Role } from 'src/utils/role.enum';

export type User = any;
@Injectable()
export class UsersService {
  roles: Role[];
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
