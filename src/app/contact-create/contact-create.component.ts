import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css'],
})
export class ContactCreateComponent {
  constructor(private service: ContactsService, private router: Router) {}

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  criaContato() {
    this.service.criaContato(this.contactForm.value).subscribe((res) => {
      this.router.navigate(['/contacts']);
    });
  }
}
