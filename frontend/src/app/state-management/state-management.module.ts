import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//modules
import { StateManagementRoutingModule } from "./state-management-routing.module";
//component
import { BehaviourSubjectComponent } from "./behaviour-subject/behaviour-subject.component";
import { StateManagementComponent } from "./state-management.component";
//services
import { StateManagementService } from "./services/state-management.service";

@NgModule({
  declarations: [BehaviourSubjectComponent, StateManagementComponent],
  imports: [CommonModule, StateManagementRoutingModule],
  exports: [StateManagementRoutingModule],
  providers: [StateManagementService]
})
export class StateManagementModule {}
