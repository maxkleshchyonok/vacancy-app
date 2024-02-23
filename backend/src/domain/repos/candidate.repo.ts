import { Injectable } from '@nestjs/common';
import { Candidate } from '@prisma/client';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class CandidateRepo {
  constructor(private prisma: PrismaService) {}

  async createCandidate(body: Pick<Candidate, 'email' | 'vacancyId'>) {
    return await this.prisma.candidate.create({
      data: {
        email: body.email,
        vacancyId: body.vacancyId,
      },
      include: {
        vacancy: true,
      },
    });
  }
}
