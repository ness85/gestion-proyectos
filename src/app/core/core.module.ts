import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { LayoutComponent } from './shell/layout/layout.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
