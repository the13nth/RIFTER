import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          
          { path: 'driverses', loadChildren: () => import('../drivers/drivers.module').then( m => m.DriversPageModule)},
          { path: 'driverses/:id', loadChildren: () => import('../drivers-details/drivers-details.module').then( m => m.DriversDetailsPageModule)},
          { path: 'rifters', loadChildren: () => import('../rifter/rifter.module').then( m => m.RifterPageModule)},
          { path: 'rifters/:id', loadChildren: () => import('../rifter-details/rifter-details.module').then( m => m.RifterDetailsPageModule)},
          { path: 'rifts', loadChildren: () => import('../rift/rift.module').then( m => m.RIFTPageModule)},
          { path: 'rifts/:id', loadChildren: () => import('../rift-details/rift-details.module').then( m => m.RIFTDetailsPageModule)},
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
