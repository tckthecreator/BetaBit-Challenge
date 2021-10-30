import { User } from '../entities/user.entity';
export class CreateUserDto extends User {
  nome: string;
  email: string;
  celular: string;
  dataDeNascimento: string | Date;
  foto: string;
}
