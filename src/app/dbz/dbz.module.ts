import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { DbzFormComponent} from './components/form/form.component';



@NgModule({
  exports:[
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
