import { Controller, Get, Post } from '@nestjs/common';

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
            cdn: 'https://gd-hbimg.huaban.com/d00b5f852738689fbc5d80a4ac5ddae1ce142a4c59f2d-w9AbhQ_fw658webp',
            label: '',
          },
        ],
      },
    };
  }
  @Post('use')
  use() {
    return {
      rule: undefined,
      bean: {
        records: [
          {
            produce_company_id: 33,
            produce_activity_id: 334,
            pv: 100,
            uv: 42,
            ip: '12.42.132.32',
            registrationRate: 0.14,
            email: '123@qq.com',
            create_time: new Date().getTime(),
            note: 'remark',
          },
        ],
      },
    };
  }
  @Get('history')
  getHistory() {
    return {
      rule: undefined,
      bean: {
        records: [
          {
            email: '123@qq.com',
            note: '这是备注',
            create_time: new Date().getTime(),
            config: {
              name: 'test',
            },
          },
          {
            email: 'power@qq.com',
            note: '这是备注2',
            create_time: new Date().getTime(),
            config: {
              name: 'test',
            },
          },
        ],
      },
    };
  }
  @Get('getLabel')
  getLabel() {
    return {};
  }
  @Get('label/classify/list')
  getClassifyList() {
    return {
      bean: [
        {
          email: '123@qq.com',
          note: '备注',
          create_time: new Date().getTime(),
        },
      ],
    };
  }
  @Get('render')
  render() {
    return { tip: '这里使用iframe来渲染活动页面,应该是ssr渲染,暂时先不处理' };
  }
}
