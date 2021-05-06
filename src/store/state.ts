export type Identity = {
  id: string;
  type: string;
  attribute: object;
};

export type Network = {
  title: string;
  wsProvider: string;
  connected: boolean;
  url: string;
  api: object;
};

export type Notification = {
  message: string;
  show: boolean;
  type: string;
};

export type Pagination = {
  page: number;
  sizePerPage: number;
  state: string;
};
export type State = {
  identity: Identity | null;
  identityList: Identity[] | [];
  network: Network | null;
  networkList: Network[] | [];
  notification: Notification;
  pagination: Pagination;
};

export const state: State = {
  identity: null,
  identityList: [],
  network: null,
  networkList: [
    {
      title: "Polkadot",
      wsProvider: "wss://rpc.polkadot.io",
      connected: false,
      url: "",
      api: {}
    },
    {
      title: "Kusama",
      wsProvider: "wss://kusama-rpc.polkadot.io",
      connected: false,
      url: "",
      api: {}
    }
  ],
  notification: {
    message: "",
    show: false,
    type: "success"
  },
  pagination: {
    page: 1,
    sizePerPage: 10,
    state: "1-10"
  }
};