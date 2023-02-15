import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CatsServices } from './cats.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/utils/role.enum';
import { RolesGuard } from './roles.guard';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsServices) {}

  @Roles(Role.Admin)
  // to verify the roles need to access this endpoint
  @UseGuards(RolesGuard)
  @Get()
  async getCats() {
    const user = await this.catService.getCats();
    return user;
  }

  //  to asign a specfique roles for this enpoint
  @Roles(Role.Admin)
  @Post()
  // to verify the roles need to access this endpoint
  @UseGuards(RolesGuard)
  async create(@Body() req) {
    await this.catService.createCat(req.name);
  }
}
