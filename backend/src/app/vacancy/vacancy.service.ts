import { Injectable } from '@nestjs/common';
import { VacancyRepo } from 'src/domain/repos/vacancy.repo';

@Injectable()
export class VacancyService {
  constructor(private vacancyRepo: VacancyRepo) {}

  async findAll() {
    return await this.vacancyRepo.findAllVacancies();
  }
}
