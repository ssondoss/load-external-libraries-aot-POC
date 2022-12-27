import { NgModule } from "@angular/core";
import { MyLibComponent } from "./my-lib.component";

@NgModule({
  declarations: [MyLibComponent],
  imports: [],
  entryComponents: [MyLibComponent],

  exports: [MyLibComponent],
})
export class MyLibModule {}
