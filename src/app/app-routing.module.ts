import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { FilesComponent } from './pages/files/files.component';
import { GroupComponent } from './pages/group/group.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginFormGuard } from './shared/guards/login-form.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canDeactivate: [LoginFormGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: GroupComponent },
    { path: 'groups', component: GroupComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'files', component: FilesComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginFormGuard],
})
export class AppRoutingModule { }
