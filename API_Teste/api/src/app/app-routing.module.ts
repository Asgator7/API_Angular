import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/views/content/content.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [{
  path: "content",
  component: ContentComponent
}, {
  path: "",
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
