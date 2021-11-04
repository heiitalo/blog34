import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public criador: Usuario;
  public dataPostagem: Date;
  public descricao: string;
  public idPostagem: number;
  public temaRelacionado: Tema;
  public titulo: string;
}