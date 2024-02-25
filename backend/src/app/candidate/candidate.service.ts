import { Injectable } from '@nestjs/common';
import { Candidate } from '@prisma/client';
import { CandidateRepo } from 'src/domain/repos/candidate.repo';

@Injectable()
export class CandidateService {
  constructor(private candidateRepo: CandidateRepo) {}

  async create(body: Pick<Candidate, 'email' | 'vacancyId'>) {
    return await this.candidateRepo.createCandidate(body);
  }
}
