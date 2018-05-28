/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { TenderAssetComponent } from './TenderAsset/TenderAsset.component';
import { OfferAssetComponent } from './OfferAsset/OfferAsset.component';

import { AnnouncerParticipantComponent } from './AnnouncerParticipant/AnnouncerParticipant.component';
import { BidderParticipantComponent } from './BidderParticipant/BidderParticipant.component';

import { OfferTransactionComponent } from './OfferTransaction/OfferTransaction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'TenderAsset', component: TenderAssetComponent },
  { path: 'OfferAsset', component: OfferAssetComponent },
  { path: 'AnnouncerParticipant', component: AnnouncerParticipantComponent },
  { path: 'BidderParticipant', component: BidderParticipantComponent },
  { path: 'OfferTransaction', component: OfferTransactionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
