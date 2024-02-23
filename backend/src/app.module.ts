import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacancyModule } from './app/vacancy/vacancy.module';
import { CandidateModule } from './app/candidate/candidate.module';
import { PrismaModule } from './libs/prisma/prisma.module';

@Module({
  imports: [VacancyModule, CandidateModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
