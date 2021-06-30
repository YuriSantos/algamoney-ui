import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  exibindoMenu = false;
  
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    
  }

}
