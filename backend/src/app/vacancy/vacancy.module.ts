import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { VacancyRepo } from 'src/domain/repos/vacancy.repo';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Module({
  controllers: [VacancyController],
  providers: [VacancyService, VacancyRepo, PrismaService],
})
export class VacancyModule {}
