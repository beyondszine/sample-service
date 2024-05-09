import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupportedtypesModule } from './supportedtypes/supportedtypes.module';
import { EmployeesModule } from './employees/employees.module';
import { RequirementsModule } from './requirements/requirements.module';

@Module({
  imports: [SupportedtypesModule, EmployeesModule, RequirementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
