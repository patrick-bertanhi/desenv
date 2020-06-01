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
    this.route.navigate(['features/home']);
  }

  onRedirectBuscaEnd() {
    this.route.navigate(['features/busca-enderecos']);
  }

  onRedirectEnd() {
    this.route.navigate(['features/enderecos']);
  }

  onRedirectGerador() {
    this.route.navigate(['features/gerador']);
  }

  onRedirectValid() {
    this.route.navigate(['features/validador']);
  }

}
