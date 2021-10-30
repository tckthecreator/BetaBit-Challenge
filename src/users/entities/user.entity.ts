import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  nome: string;
  email: string;
  celular: string;
  dataDeNascimento: string | Date;
  foto: string;
}
