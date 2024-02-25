import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { CandidateRepo } from 'src/domain/repos/candidate.repo';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService, CandidateRepo, PrismaService],
})
export class CandidateModule {}
