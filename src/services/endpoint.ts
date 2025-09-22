export const endpoints = {
  home: {
    slider: "/public/slider",
    news: "/news",
    ads: "/public/ads",
  },
  auth: {
    send_otp: "/user/send-token",
    verify: "/user/check-token",
  },
  flightIn: {
    cities: "/public/city-flights",
    tickets:"/public/flights",
    dateTicket:"/public/preview-flights",
    getCaptcha:"/public/captcha",
    reserve:"/public/reserve",
    downloadTicketData:"/public/get-data",
  },
  flightOut: {
    cities: "/public/city-flights",
  },
  train: {
    // cities: "/public/tran-station",
  },
  reserve: {
    uploadFile: "/public/file-upload",
    sendForm: "/public/save-train",
    verify: "/public/check-token",
    trainStation: "/public/tran-station",
    flightStation: "/public/flight-station"
  },
  refund: {
    uploadFile: "/public/file-upload",
    sendForm: "/public/save-train",
    verify: "/public/check-token"
  },
  faq: "/faq",
  ticket: "/reserve/confirm",
  payInfo: {
    pay: "/reserve/pay",
    discounted: "",
    cancel: "/reserve/set-failed",
  },
  dashboard: {
    tickets: "/reserve/index",
    ticketOne: "/reserve/view",
    upladImage: "/user/file-upload",
    profile: "/user/profile",
    update: "/user/update",
    chargingWallet: "/private-user/charge",
    withdrawal: "/comeback-money/create",
    cancel: "/reserve/cancel",
    transaction: "/private-user/transactions",
  },
  page: "/public/page",
  search: "/public/search",
};
