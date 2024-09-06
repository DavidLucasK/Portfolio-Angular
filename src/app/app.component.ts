import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from './header/header.module'; // Importe o HeaderModule aqui
import { NavbarModule } from './navbar/navbar.module';
import { AboutModule } from './about/about.module';
import { CompanysModule } from './companys/companys.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule, NavbarModule, AboutModule, CompanysModule], // Adicione HeaderModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
}
