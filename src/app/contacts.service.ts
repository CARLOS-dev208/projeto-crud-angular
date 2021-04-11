import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContatosClient {
  id: number;
  name: string;
  phone: number;
}
const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  criaContato(contato: ContatosClient): Observable<ContatosClient> {
    return this.http.post<ContatosClient>(`${baseUrl}/contatos`, contato);
  }

  listaDeContatos(): Observable<ContatosClient[]> {
    return this.http.get<ContatosClient[]>(`${baseUrl}/contatos?_sort=name`);
  }

  deletaContato(id: number) {
    return this.http.delete(`${baseUrl}/contatos/${id}`);
  }

  pegaContatos(id: number): Observable<ContatosClient> {
    return this.http.get<ContatosClient>(`${baseUrl}/contatos/${id}`);
  }

  atualizarContato(contato: ContatosClient): Observable<ContatosClient> {
    return this.http.put<ContatosClient>(
      `${baseUrl}/contatos/${contato.id}`,
      contato
    );
  }
}
