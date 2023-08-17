import { Controller, Get } from '@nestjs/common';

@Controller('generator')
export class GeneratorController {
  @Get('list')
  getGenerator() {
    return [
      {
        id: 1,
        name: 'power',
      },
      {
        id: 2,
        name: 'kaka',
      },
    ];
  }
}
