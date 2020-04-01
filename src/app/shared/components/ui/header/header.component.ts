import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() perfil = {
    home: true,
    historico: true,
    busca: true
  };

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  onRedirectHome() {
    this.route.navigate(['home']);
  }

  onRedirectBuscaEnd() {
    this.route.navigate(['busca-enderecos']);
  }

  onRedirectEnd() {
    this.route.navigate(['enderecos']);
  }

  onRedirectGerador() {
    this.route.navigate(['gerador']);
  }

  onRedirectValid() {
    this.route.navigate(['validador']);
  }

}
