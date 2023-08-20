import { Controller, Get } from '@nestjs/common';

@Controller('source')
export class SourceController {
  @Get('list')
  list() {
    return {
      bean: {
        records: [
          {
            file_type: 'image',
            url: 'https://gd-hbimg.huaban.com/4adc5162f2c3af952cd383167e2726283e49da7ff3d85-ZqW7sl_fw658webp',
          },
          {
            file_type: 'image',
            url: 'https://gd-hbimg.huaban.com/d00b5f852738689fbc5d80a4ac5ddae1ce142a4c59f2d-w9AbhQ_fw658webp',
          },
          {
            file_type: 'txt',
          },
        ],
      },
    };
  }
}
