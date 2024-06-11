import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'myRecipes',
        loadChildren: () => import('../myRecipes/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/tab2.module').then(m => m.Tab2PageModule)
      },

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
