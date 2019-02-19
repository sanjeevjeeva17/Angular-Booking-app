import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HotelsComponent} from './components/hotels/hotels.component';
import {HotelDetailsComponent} from './components/hotel-details/hotel-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/Hotels', pathMatch: 'full'},
  {path: 'Hotels', component: HotelsComponent},
  {path: 'HotelDetails', component: HotelDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HotelsComponent, HotelDetailsComponent];
