import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

import { ProfileArticlesComponent } from './profile-articles.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';

const routes: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    children: [
        {
          path: '',
          component: ProfileArticlesComponent
        },
        {
          path: 'favorites',
          component: ProfileFavoritesComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
