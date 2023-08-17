import { Controller, Get } from '@nestjs/common';
const companyData = {
  bean: {
    records: [
      {
        campaignid: 33,
        name: '泰康人寿',
        activity_num: 34,
      },
    ],
  },
  msg: '请求成功',
};

@Controller('company')
export class CompanyController {
  @Get('list')
  getCompany() {
    return companyData;
  }
  @Get('getActivity')
  getAcivity() {
    return {
      bean: {
        records: {
          data: [
            {
              activityid: 1,
              activityname: '聚合页-整合营销用',
            },
            {
              activityid: 2,
              activityname: '保险页-新年大礼包',
            },
          ],
        },
      },
    };
  }
}
