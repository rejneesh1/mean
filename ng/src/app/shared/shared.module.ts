import { NgModule } from "@angular/core";
//material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";

//flex

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule, BrowserAnimationsModule]
})
export class SharedModule {}
