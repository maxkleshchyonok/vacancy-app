import { IsEmail, IsUUID, validate } from 'class-validator';

export class CreateCandidateForm {
  @IsEmail()
  public email: string;

  @IsUUID()
  public vacancyId: string;
}
