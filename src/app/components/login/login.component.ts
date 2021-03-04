import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  guser: any;
  constructor(
    private ngZone: NgZone,
    @Inject(DOCUMENT) private doc: Document,
    private rendere:Renderer2,
    private metaService: Meta
  ) { 
    (window as { [key: string]: any })['onSignin'] = (user: any) => this.ngZone.run(() => {
      this.afterSignUp(user);
    })
  }

  ngOnInit(): void {
    this.metaService.addTags([
      { name: 'google-signin-client_id', content:'428328137785-even8uo0lrvmda5pr58i7okvaj1dg6hk.apps.googleusercontent.com'}
    ]);
    let script = this.rendere.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js'
    script.defer = true;
    script.async = true;
    this.rendere.appendChild(this.doc.body, script);
  }

  afterSignUp(googleUser: any) {
    this.guser = googleUser;
    console.log(googleUser);
  }

}
