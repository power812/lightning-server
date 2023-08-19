import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CompanyController } from './company/company.controller';
import { ActivityController } from './activity/activity.controller';
import { GeneratorController } from './generator/generator.controller';
import { TemplateController } from './template/template.controller';
import { StatisticsController } from './statistics/statistics.controller';

@Module({
  imports: [UserModule],
  controllers: [CompanyController, ActivityController, GeneratorController, TemplateController, StatisticsController],
  providers: [],
})
export class AppModule {}
