import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StateManagementComponent } from "./state-management.component";
import { BehaviourSubjectComponent } from "./behaviour-subject/behaviour-subject.component";

const routes: Routes = [
  {
    path: "state-management",
    component: StateManagementComponent,
    children: [
      { path: "behaviour-subject", component: BehaviourSubjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateManagementRoutingModule {}
