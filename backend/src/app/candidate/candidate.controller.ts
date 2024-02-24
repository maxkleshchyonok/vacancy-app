import {
  Controller,
  Post,
  Req,
  Body,
  InternalServerErrorException,
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateForm } from './domain/create-user.form';
import { ErrorMessage } from 'src/enums/error-message.enum';
import { Request } from 'express';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  async create(@Req() request: Request, @Body() body: CreateCandidateForm) {
    const candidate = await this.candidateService.create(body);
    if (!candidate) {
      throw new InternalServerErrorException(ErrorMessage.RecordCreationFailed);
    }
    return candidate;
  }
}
