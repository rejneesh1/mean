import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { MainNavComponent } from "./component/main-nav/main-nav.component";

// ngx-bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [MainNavComponent],
  imports: [CommonModule, SharedRoutingModule, NgbModule],
  exports: [MainNavComponent, NgbModule]
})
export class SharedModule {}
