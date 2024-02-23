import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class VacancyRepo {
  constructor(private prisma: PrismaService) {}

  async findAllVacancies() {
    return await this.prisma.vacancy.findMany({
      include: {
        candidates: true,
      },
    });
  }
}
