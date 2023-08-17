import { Controller, Get } from '@nestjs/common';

@Controller('template')
export class TemplateController {
  @Get('list')
  getList() {
    return {
      bean: {
        rule: undefined,
        records: [
          {
            _id: 'common_diy',
            edit_times: 12,
            create_time: '1577408867',
            config: {
              name: 'common_diy',
              dataSource: {},
              config: {},
              template: { rmsDefault: 0 },
              other: [],
            },
            content: '',
            name: '空白模版-自制活动',
            template_id: '',
            cdn: 'https://gd-hbimg.huaban.com/4adc5162f2c3af952cd383167e2726283e49da7ff3d85-ZqW7sl_fw658webp',
            label: '',
          },
          {
            _id: 'ensure_diy',
            edit_times: 2,
            create_time: '1577408867',
            config: {
              name: 'common_diy',
              dataSource: {},
              config: {},
              template: { rmsDefault: 0 },
              other: [],
            },
            content: '',
            name: '保险模版-自制活动',
            template_id: '',
            cdn: 'https://gd-hbimg.huaban.com/cf46f456ce3bee6ce3661b5c26b0ddcd9ff7e71e330310-iAkMVa_fw658webp',
            label: '',
          },
        ],
      },
    };
  }
}
