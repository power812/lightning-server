import { Controller, Get, Post } from '@nestjs/common';

@Controller('statistics')
export class StatisticsController {
  @Post('report/test/version/list')
  testVersionList() {
    return {
      bean: [
        {
          visitRate: '0.1',
          testStatus: 1,
          version: 23,
          pv: 10,
          uv: 5,
          ip: 3,
          registration: 1000,
          registrationRate: 0.08,
          conversionRate: 0.3,
          versionName: '测试活动',
          versionId: 1,
          // avgDuration: 343,
        },
      ],
    };
  }

  @Get('abtest/list')
  abtestList() {
    return {
      bean: {
        records: [
          {
            produce_id: 1,
            company_id: 33,
            comId: 12,
            testId: 32,
            activityid_or_name: 345,
            testName: '测试活动',
            creatTime: new Date().getTime(),
            updateTime: new Date().getTime(),
            startTime: new Date().getTime(),
            endTime: new Date().getTime(),
            status: 1,
            testStatus: 1,
            name: '新年大礼包聚合页',
            company: '泰康人寿',
            template: '通用模板',
            effective_time: new Date().getTime(),
            produce_company_id: '33',
            produce_activity_id: '23',
          },
        ],
      },
    };
  }
  @Post('site/log')
  siteLog() {
    return {
      bean: [
        {
          updateTime: new Date().getTime(),
          log: '测试聚合页效果',
          editor: 'power',
        },
      ],
    };
  }
  @Post('report/overview/error/rank')
  errorRank() {
    return {
      data: [
        {
          detail: { name: '新年大礼包聚合页' },
          errorApi: 10,
          errorScript: 22,
          error: 3123,
          errorResource: 33,
          errorTotal: 100,
        },
        {
          detail: { name: '100万交通意外险' },
          errorApi: 10,
          errorScript: 22,
          error: 3123,
          errorResource: 33,
          errorTotal: 100,
        },
        {
          detail: { name: '赠险交互页面' },
          errorApi: 102,
          errorScript: 223,
          error: 314,
          errorResource: 335,
          errorTotal: 1005,
        },
      ],
    };
  }
  @Post('report/overview/total')
  total() {
    return {
      bean: {
        ip: 23,
        yesterdayIp: 23,
        pv: 12,
        yesterdayPv: 231,
        uv: 67,
        yesterdayUv: 123,
        error: 656,
        yesterdayError: 344,
      },
    };
  }
  @Post('report/overview/rank')
  rank() {
    return {
      bean: {
        visitorRank: [
          {
            detail: {
              name: 'kaka',
            },
            total: 23,
          },
          {
            detail: {
              name: 'power',
            },
            total: 55,
          },
        ],
        registrationRank: [
          {
            detail: {
              produce_company_id: 33,
              produce_activity_id: 53,
              test_company_id: 33,
              name: '百万赠险',
            },
            total: 11,
          },
          {
            detail: {
              produce_company_id: 33,
              produce_activity_id: 53,
              test_company_id: 33,
              name: '新年大礼包',
            },
            total: 442,
          },
        ],
      },
    };
  }
  @Post('report/overview/error/api')
  errorApi() {
    const errorArr = new Array(24).fill({ ip: 23, error: 0 });
    const arr = [];

    errorArr.forEach((item, index) => {
      const tem = {
        error: 0,
      };
      tem.error = Math.floor(Math.random() * 100);
      arr[index] = tem;
    });
    return {
      bean: arr,
    };
  }
  @Post('report/overview/error/js')
  errorJs() {
    const errorArr = new Array(24).fill({ ip: 23, error: 0 });
    const arr = [];

    errorArr.forEach((item, index) => {
      const tem = {
        error: 0,
      };
      tem.error = Math.floor(Math.random() * 100);
      arr[index] = tem;
    });
    return {
      bean: arr,
    };
  }
  @Post('report/overview/error/resource')
  errorResource() {
    const errorArr = new Array(24).fill({ ip: 23, error: 0 });
    const arr = [];

    errorArr.forEach((item, index) => {
      const tem = {
        error: 0,
      };
      tem.error = Math.floor(Math.random() * 100);
      arr[index] = tem;
    });
    return {
      bean: arr,
    };
  }
  @Post('report/visit/overview')
  visitOverview() {
    return {
      bean: {
        today: {
          pv: 1545,
          uv: 123,
          ip: 34,
          registration: 32,
          registrationRate: 0.23,
          avgDuration: 12323535,
          conversionRate: 0.08,
          bounceRate: 0.1,
        },
        yesterday: {
          pv: 12245,
          uv: 6544,
          ip: 334,
          registration: 52,
          registrationRate: 0.11,
          avgDuration: 12313442,
          conversionRate: 0.07,
          bounceRate: 0.15,
        },
      },
    };
  }
  @Post('report/visit/list')
  visitList() {
    const beanArr = [];
    for (let i = 0; i < 24; i++) {
      let item = {
        dayId: new Date(),
        hour: i,
        pv: Math.floor(Math.random() * 100),
        uv: Math.floor(Math.random() * 100),
        ip: Math.floor(Math.random() * 100),
        registrationRate: Math.random(),
      };
      beanArr.push(item);
      item = {
        dayId: new Date(),
        hour: i,
        pv: Math.floor(Math.random() * 100),
        uv: Math.floor(Math.random() * 100),
        ip: Math.floor(Math.random() * 100),
        registrationRate: Math.random(),
      };
      beanArr.push(item);
    }
    return {
      bean: beanArr,
      beantest: [
        {
          hour: 1,
          pv: 140,
          uv: 10,
          ip: '89.0.142.86',
        },
        {
          hour: 1,
          pv: 10,
          uv: 158,
          ip: '89.0.142.86',
        },
        {
          hour: 2,
          pv: 100,
          uv: 10,
          ip: '89.0.142.86',
        },
        {
          hour: 2,
          pv: 1020,
          uv: 15,
          ip: '89.0.142.86',
        },
      ],
    };
  }
  @Post('report/heatmap/list')
  heatmapList() {
    return {
      bean: [],
    };
  }
  @Post('site/test/list')
  testList() {
    return { bean: [] };
  }
}
