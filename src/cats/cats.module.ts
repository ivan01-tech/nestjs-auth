import { Module } from '@nestjs/common';
import { CatsServices } from './cats.service';

@Module({
  imports: [],
  exports: [CatsServices],
  providers: [CatsServices],
})
export class CatsModule {}
