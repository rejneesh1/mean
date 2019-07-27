import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CrudRoutingModule } from "./crud-routing.module";
import { CrudComponent } from "./crud/crud.component";
import { CrudService } from "./crud.service";

@NgModule({
  declarations: [CrudComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CrudRoutingModule],
  exports: [CrudRoutingModule],
  providers: [CrudService]
})
export class CrudModule {}
