import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private autService: AutenticacionService,
                private router: Router,
                private activatedRouter: ActivatedRoute) { }

  ngOnInit() {

        console.log(this.isAuth());

  }

    isAuth() {
        return this.autService.isAuthenticated();
    }

    onLogout() {
        this.autService.logout();
        this.router.navigate(['/inicio'])
    }




}
