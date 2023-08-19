import { Controller, Get, Post } from '@nestjs/common';

@Controller('activity')
export class ActivityController {
  @Post('create')
  create() {
    return {
      success: true,
    };
  }
  @Get('list')
  // 获取活动列表
  getList() {
    return {
      bean: {
        total: 10,
        rule: undefined,
        records: [
          {
            name: '新年大礼包聚合页',
            company: {
              name: '泰康人寿',
            },
            activity_num: 34, // 活动数量
            template: '通用模板',
            produce_id: 1,
            produce_company_id: 33,
            produce_activity_id: 1,
            test_id: 10,
            description: '描述',
            label: [{ name: '标签1' }, { name: '标签2' }],
            status: '1',
            create_time: new Date().getTime(),
            renew_time: new Date().getTime(),
            regenerator: { name: 'power' },
            template_name: '测试模板',
            company_id: 1,
            activityid_or_name: '聚合页-整合营销用',
          },
          {
            name: '新年大礼包聚合页',
            company: {
              name: '泰康人寿',
            },
            template: '通用模板',
            produce_id: 1,
            produce_company_id: 33,
            produce_activity_id: 1,
            test_id: 10,
            description: '描述',
            label: [{ name: '标签1' }, { name: '标签2' }],
            status: '1',
            create_time: new Date().getTime(),
            renew_time: new Date().getTime(),
            regenerator: { name: 'power' },
            template_name: '测试模板',
            company_id: 1,
            activityid_or_name: '聚合页-整合营销用',
          },
          {
            name: '新年大礼包聚合页',
            company: {
              name: '泰康人寿',
            },
            template: '通用模板',
            produce_id: 1,
            produce_company_id: 33,
            produce_activity_id: 1,
            test_id: 10,
            description: '描述',
            label: [{ name: '标签1' }, { name: '标签2' }],
            status: '1',
            create_time: new Date().getTime(),
            renew_time: new Date().getTime(),
            regenerator: { name: 'power' },
            template_name: '测试模板',
            company_id: 1,
            activityid_or_name: '聚合页-整合营销用',
          },
        ],
      },
    };
  }
  @Get('label/list')
  getLabelList() {
    return {
      bean: {
        records: [
          {
            label: [{ name: '重疾险' }, { name: '意外险' }, { name: '医疗险' }],
            name: '保险',
          },
          {
            label: [{ name: '贷款' }, { name: 'pos机' }, { name: '信用卡' }],
            name: '银行',
          },
        ],
      },
    };
  }
  @Get('search/commonly')
  getSearchCommonly() {
    return {
      bean: [
        {
          produce_company_id: 1,
          produce_activity_id: 23,
          name: '平安人寿',
        },
      ],
    };
  }
  @Get('detail')
  detail() {
    return {
      success: true,
    };
  }
  @Get('detail/comId')
  detailComId() {
    return {
      success: true,
    };
  }
}
