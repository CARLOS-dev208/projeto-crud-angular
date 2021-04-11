import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css'],
})
export class ContactUpdateComponent implements OnInit {
  id: number;

  constructor(
    private service: ContactsService,
    private router: ActivatedRoute,
    private mudarRota: Router
  ) {}
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      this.id = parseInt(param.get('id'));
      this.service.pegaContatos(this.id).subscribe((res) => {
        this.contactForm.reset(res);
      });
    });
  }

  atualizaContato() {
    this.service
      .atualizarContato({ id: this.id, ...this.contactForm.value })
      .subscribe((res) => {
        this.mudarRota.navigate(['/contacts']);
      });
  }
}
