import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { DashboardComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { ClaimComponent } from './backOffice/claim/claim.component';
import { AddclaimComponent } from './FrontOffice/addclaim/addclaim.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UsersComponent } from './backOffice/users/users.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './FrontOffice/updateuser/updateuser.component';
import { LoginadComponent } from './loginad/loginad.component';
import { ClaimsuserComponent } from './FrontOffice/claimsuser/claimsuser.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent},
    {
      path:'loginadmin',
      component: LoginadComponent},
    {
      path:'forbidden',
      component: ForbiddenComponent},
      {
        path:'forgotpassword',
        component: ForgotpasswordComponent},
        {
          path:'signup',
          component: SignupComponent},
  {
    path:'admin',
    component:AllTemplateAdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']},
    children:[
      {
        path:'',
        component:DashboardComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
      },
      {
        path:'claim',
        component:ClaimComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
      },
      {
        path:'users',
        component:UsersComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
      },{
        path:'updatepassword',component:UpdateuserComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
      }
      
    ]

  },
  

   { path:'user',
   component: AllTemplateUserComponent, canActivate:[AuthGuard], data:{roles:['User']},
   children:[
      {
        path:'',
        component: BodyUserComponent
      },{
        path:'addclaim',component:AddclaimComponent, canActivate:[AuthGuard], data:{roles:['User']}
      },{
        path:'updatepassword',component:UpdateuserComponent, canActivate:[AuthGuard], data:{roles:['User']}
      },{
        path:'claims',component:ClaimsuserComponent, canActivate:[AuthGuard], data:{roles:['User']}
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
