import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CompanyController } from './company/company.controller';
import { ActivityController } from './activity/activity.controller';
import { GeneratorController } from './generator/generator.controller';
import { TemplateController } from './template/template.controller';
import { StatisticsController } from './statistics/statistics.controller';
import { SourceController } from './source/source.controller';

@Module({
  imports: [UserModule],
  controllers: [
    CompanyController,
    ActivityController,
    GeneratorController,
    TemplateController,
    StatisticsController,
    SourceController,
  ],
  providers: [],
})
export class AppModule {}
