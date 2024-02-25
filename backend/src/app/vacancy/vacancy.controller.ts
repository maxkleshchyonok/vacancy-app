import {
  Controller,
  Get,
  HttpCode,
  InternalServerErrorException,
} from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { ErrorMessage } from 'src/enums/error-message.enum';

@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @HttpCode(200)
  @Get()
  async findAll() {
    const vacancies = await this.vacancyService.findAll();
    if (!vacancies) {
      throw new InternalServerErrorException(ErrorMessage.RecordsNotFound);
    }
    return vacancies;
  }
}
