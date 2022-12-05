import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  subject: string = "";
  body: string = "";

  constructor() { 

  }

  ngOnInit(): void {

  }

  submitMessage(): void {
    
  }
}