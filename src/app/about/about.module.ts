import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule],
  exports: [AboutComponent] // Exporta o AboutComponent para uso em outros módulos
})
export class AboutModule { }
