import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace net.michaelbaer.tenderingnetwork{
   export class AnnouncerParticipant extends Participant {
      participantKey: string;
      name: string;
   }
   export class BidderParticipant extends Participant {
      participantId: string;
      name: string;
   }
   export class TenderAsset extends Asset {
      tenderId: string;
      owner: AnnouncerParticipant;
   }
   export class OfferAsset extends Asset {
      offerId: string;
      owner: BidderParticipant;
      tender: TenderAsset;
      amount: number;
   }
   export class OfferTransaction extends Transaction {
      offer: OfferAsset;
      newAmount: number;
   }
// }
