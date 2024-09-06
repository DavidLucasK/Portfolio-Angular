import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanysComponent } from './companys.component';

@NgModule({
  declarations: [CompanysComponent],
  imports: [CommonModule],
exports: [CompanysComponent] // Exporta o CompanysComponent para uso em outros módulos
})
export class CompanysModule { }
