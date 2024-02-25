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
import * as geoip from 'geoip-country';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  async create(@Req() request: Request, @Body() body: CreateCandidateForm) {
    const ip =
      request.headers['cf-connection-ip'] ||
      request.headers['x-real-ip'] ||
      request.headers['x-forwarded-for'] ||
      request.socket.remoteAddress ||
      '';

    try {
      if (ip === '::1') {
        return await this.candidateService.create(body);
      }
      if (ip !== '::1') {
        const country = geoip.lookup(ip).country;
        if (country === 'BY') {
          return await this.candidateService.create(body);
        }
      }
      throw new InternalServerErrorException(ErrorMessage.CountryNotAllowed);
    } catch (error) {
      throw new InternalServerErrorException(ErrorMessage.RecordCreationFailed);
    }
  }
}
