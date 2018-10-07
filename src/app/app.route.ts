import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './top-nav/top.nav.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [{
    path: '', component: TopNavComponent}]

    @NgModule({
        imports: [
          RouterModule.forRoot(appRoutes)
        ],
        exports: [RouterModule]
      })
      export class AppRoutes { }
      