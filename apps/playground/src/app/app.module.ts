import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ThemingModule} from '@fundamental-ngx/core/theming';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  ButtonModule,
  CardModule,
  CheckboxModule,
  FormItemModule,
  IconModule,
  InputModule,
  ListModule,
  SegmentedButtonModule,
  TextareaModule
} from "@fundamental/angular";
import {ListItemComponent} from "./list-item/list-item.component";

@NgModule({
  declarations: [AppComponent, ListItemComponent],
  imports: [
    BrowserModule,
    CardModule,
    ListModule,
    IconModule,
    FormItemModule,
    CheckboxModule,
    SegmentedButtonModule,
    InputModule,
    TextareaModule,
    RouterModule.forRoot([]),
    ThemingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
