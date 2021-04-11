import { Component, OnInit } from '@angular/core';
import { ContactsService, ContatosClient } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contatos: ContatosClient[] = [];
  constructor(private servece: ContactsService) {}

  ngOnInit(): void {
    this.servece.listaDeContatos().subscribe(
      (res) => {
        this.contatos = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletaContato(contato: ContatosClient) {
    this.servece.deletaContato(contato.id).subscribe(() => {
      const index = this.contatos.indexOf(contato);
      this.contatos.splice(index, 1);
    });
  }
}
