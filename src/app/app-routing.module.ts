import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full"},
  
  {path:'login',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {path:'',component:LayoutComponent,
    children:[
      // { path: 'common', loadChildren: () => import('./common/common.module').then(m => m.CommonModule) }
      {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}
      ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
