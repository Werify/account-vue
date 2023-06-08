// import { IMarkets, IBroker } from "../market/index";

interface TradingAcoounts {
  broker_id: string;
  platform_id: string;
  server_id: string;
  identity: string;
  secret?: string;
  read_only_secret?: string;
}
interface ITradingAccounts {
  uuid: string;
  name: string;
  company: string;
  identity: string;
  trade_mode: number;
  margin_type: number;
  order_limit: number;
  trade_allowed: boolean;
  hedge: boolean;
  capital_road: boolean;
  server: null | string;
  link: null | string;
  currency: null | string;
  leverage: null | string;
  stopout_level: null | string;
  report: number;
  status: number;
  balance: null | string;
  credit: null | string;
  margin: null | string;
  free_margin: null | string;
  margin_level: null | string;
  broker: IBroker[];
  market: IMarkets[];
  platforms: IPlatforms[];
  tags: ITag[];
}

interface ITag {
  uuid: string;
  title: string;
  slug: string;
}

// "results": {
//   "uuid": "993e0108-bcc8-4013-8cb9-d30d8b49220f",
//   "name": "Ned Jaskolski DVM",
//   "company": "Yost-Rodriguez",
//   "identity": "c72f28c7f7a6326dd7a90e7e029d04c7f4516bef4067f57efc7b8f01dd699681",
//   "trade_mode": 15202,
//   "margin_type": 15301,
//   "order_limit": 200,
//   "trade_allowed": true,
//   "hedge": true,
//   "capital_road": false,
//   "server": null,
//   "link": null,
//   "currency": null,
//   "leverage": null,
//   "stopout_level": null,
//   "report": 0,
//   "status": 15001,
//   "balance": null,
//   "credit": null,
//   "equity": null,
//   "margin": null,
//   "free_margin": null,
//   "margin_level": null,
//   "broker": {
//       "uuid": "993e0107-e60f-4079-a532-c98625bdb31c",
//       "name": "velit",
//       "logo": null
//   },
//   "market": {
//       "uuid": "993e0107-79b8-41c5-aaef-cf040d2e89cc",
//       "name": "Capital Markets",
//       "slug": "capital-markets",
//       "icon": null
//   },
//   "platforms": [
//       {
//           "uuid": "993e0107-b661-49b7-b865-256bfdfdf2e7",
//           "title": "CQG Trader4",
//           "slug": null,
//           "icon": null
//       },
//       {
//           "uuid": "993e0107-a311-43ec-8345-9ffa593552c5",
//           "title": "FXTrade/FXGame",
//           "slug": null,
//           "icon": null
//       }
//   ],
//   "tags": [
//       {
//           "uuid": "993e011b-b25e-4a65-8a21-7748a3bb17d9",
//           "title": "et",
//           "slug": "non-consequatur-beatae-id-enim-et-eligendi"
//       }
//   ]
// },
