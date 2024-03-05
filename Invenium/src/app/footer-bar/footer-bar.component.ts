import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {
  emailAddress: string = 'krmcintosh87@gmail.com';
  subject: string = 'Booking Inquiry';
  body: string = 'I hope this email finds you well. I am interesting in booking Invenium for an upcoming gig.';
  mailtoLink: string;

  constructor() {
    this.mailtoLink = `mailto:${this.emailAddress}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
  }

}
