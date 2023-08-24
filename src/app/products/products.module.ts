import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
})
export class ProductsModule {}
