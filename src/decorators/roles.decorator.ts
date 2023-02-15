import { SetMetadata } from '@nestjs/common';
import { Role } from '../utils/role.enum';

export const ROLES_KEY = 'roles';
// a decotor which helps to asign roles to access a route in our app
export const Roles = function (...roles: Role[]) {
  return SetMetadata(ROLES_KEY, roles);
};
