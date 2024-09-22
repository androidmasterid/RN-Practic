import {ACTION_TYPES} from './ActionTypes';

export const ReduxActionCreators = {
  company: payload => ({type: ACTION_TYPES.NAME, payload}),
  showScanner: payload => ({type: ACTION_TYPES.SHOW_SCANNER, payload}),
  loginRes: payload => ({type: ACTION_TYPES.LOGIN_RES, payload}),
  available: payload => ({type: ACTION_TYPES.AVAILABLE, payload}),
  pricing: payload => ({type: ACTION_TYPES.PRICING, payload}),
  distance: payload => ({type: ACTION_TYPES.DISTANCE, payload}),
  more: payload => ({type: ACTION_TYPES.MORE, payload}),
  evCharging: payload => ({type: ACTION_TYPES.EVCHARGING, payload}),
  amenities: payload => ({type: ACTION_TYPES.AMENITIES, payload}),
  directions: payload => ({type: ACTION_TYPES.DIRECTIONS, payload}),
  start: payload => ({type: ACTION_TYPES.START, payload}),
  share: payload => ({type: ACTION_TYPES.SHARE, payload}),
  faq_list: payload => ({type: ACTION_TYPES.FAQ_LIST, payload}),
  reviewRating: payload => ({type: ACTION_TYPES.REVIEW_RATING, payload}),
  accountDetails: payload => ({
    type: ACTION_TYPES.ACCOUNT_DETAILS,
    payload,
  }),
  latlng: payload => ({type: ACTION_TYPES.LAT_LNG, payload}),
  placeName: payload => ({type: ACTION_TYPES.PLACE_NAME, payload}),
  chargeHistory: payload => ({type: ACTION_TYPES.CHARGE_HISTORY, payload}),
  chargeHistoryMonth: payload => ({
    type: ACTION_TYPES.CHARGE_HISTORY_MONTH,
    payload,
  }),
  header__Message: payload => ({
    type: ACTION_TYPES.HEADER__MESSAGE,
    payload,
  }),
  dashboard_data: payload => ({type: ACTION_TYPES.DASHBOARD_DATA, payload}),
  isRefreshingList: payload => ({
    type: ACTION_TYPES.IS_REFRESHING_LIST,
    payload,
  }),

  phone_Location_Is: payload => ({
    type: ACTION_TYPES.PHONE_LOCATION_IS,
    payload,
  }),
  app_Location_Is: payload => ({
    type: ACTION_TYPES.APP_LOCATION_IS,
    payload,
  }),

  chargerList: payload => ({type: ACTION_TYPES.CHARGER_LIST, payload}),
  walletData: payload => ({type: ACTION_TYPES.WALLET_DATA, payload}),
  addVehicle_: payload => ({type: ACTION_TYPES.Add_VEHICLE, payload}),
  modal: payload => ({type: ACTION_TYPES.MODAL, payload}),
  make: payload => ({type: ACTION_TYPES.MAKE, payload}),
  year: payload => ({type: ACTION_TYPES.YEAR, payload}),
  chargerListItem: payload => ({
    type: ACTION_TYPES.CHARGERLISTITEM,
    payload,
  }),
  invoiceData: payload => ({type: ACTION_TYPES.INVOICE_DATA, payload}),
  updateAccountDetails: payload => ({
    type: ACTION_TYPES.UPDATE_DRIVER,
    payload,
  }),
  // invoiceData: payload => ({type: ACTION_TYPES.INVOICE_DATA, payload}),
  driverInfo: payload => ({type: ACTION_TYPES.DRIVER_INFO, payload}),
  vehicleDetail: payload => ({type: ACTION_TYPES.VEHICLE_DETAIL, payload}),
  favList: payload => ({type: ACTION_TYPES.FAV_LIST, payload}),
  markFav: payload => ({type: ACTION_TYPES.MARK_FAV, payload}),
  ProfilePic: payload => ({type: ACTION_TYPES.PROFILE_PIC, payload}),
  logout: payload => ({type: ACTION_TYPES.LOG_OUT, payload}),
  multipleData: payload => ({type: ACTION_TYPES.MULTIPLE_DATA, payload}),
  selectedDashboardData: payload => ({
    type: ACTION_TYPES.SELECTEDDASHBOARDDATA,
    payload,
  }),
  deleteAccount: payload => ({type: ACTION_TYPES.DELETE_ACCOUNT, payload}),
  cms_status: payload => ({type: ACTION_TYPES.CMS_STATUS, payload}),
  transactionStatus: payload => ({
    type: ACTION_TYPES.TRANSACTIONSTATUS,
    payload,
  }),
  updateVehicle: payload => ({type: ACTION_TYPES.UPDATE_VEHICLE, payload}),
  makePrimary: payload => ({type: ACTION_TYPES.MAKE_PRIMARY, payload}),
  energyGraphData: payload => ({
    type: ACTION_TYPES.ENERGY_GRAPH_DATA,
    payload,
  }),
  graph2Data: payload => ({type: ACTION_TYPES.GRAPH_2_DATA, payload}),
  walletHistoryData: payload => ({
    type: ACTION_TYPES.WALLET_HISTOTRY,
    payload,
  }),
  emmisionGraphData: payload => ({
    type: ACTION_TYPES.EMISSION_GRAPH_DATA,
    payload,
  }),
  searchlatlng: payload => ({type: ACTION_TYPES.SEARCHLATLNG, payload}),
  coords: payload => ({type: ACTION_TYPES.COORDS, payload}),
  recommendedchargerlist: payload => ({
    type: ACTION_TYPES.RECOMMENDEDCHARGERLIST,
    payload,
  }),
  privateChargers: payload => ({
    type: ACTION_TYPES.PRIVATE_CHARGERS,
    payload,
  }),
  getReservationId: payload => ({
    type: ACTION_TYPES.GET_RESERVATION_ID,
    payload,
  }),
  reserveSlotData: payload => ({
    type: ACTION_TYPES.RESERVE_SLOT_DATA,
    payload,
  }),
  clickedReserveSlotData: payload => ({
    type: ACTION_TYPES.CLICKED_RESERVE_SLOT_DATA,
    payload,
  }),

  reservedList: payload => ({type: ACTION_TYPES.RESERVED_LIST, payload}),
  mapResponse: payload => ({type: ACTION_TYPES.MAPRESPONSE, payload}),
  currentLocationName: payload => ({
    type: ACTION_TYPES.CURRENTLOCATIONNAME,
    payload,
  }),
  currentSession: payload => ({
    type: ACTION_TYPES.CURRENT_SESSION,
    payload,
  }),
  CreateUserDetail: payload => ({type: ACTION_TYPES.CREATE_USER, payload}),
  chargingScheduledList: payload => ({
    type: ACTION_TYPES.CHARGINGSCHEDULEDLIST,
    payload,
  }),
  chargingScheduledHistory: payload => ({
    type: ACTION_TYPES.CHARGINGSCHEDULEDHISTORY,
    payload,
  }),
  getChargerInfo: payload => ({
    type: ACTION_TYPES.GET_CHARGING_INFO,
    payload,
  }),
  notificationData: payload => ({
    type: ACTION_TYPES.NOTIFICATION_DATA,
    payload,
  }),
  updateNotificationStatus: payload => ({
    type: ACTION_TYPES.UPDATE_NOTIFICATION_STATUS,
    payload,
  }),
  user_type_is_guest: payload => ({
    type: ACTION_TYPES.USERTYPE_IS_GUEST,
    payload,
  }),
  paymentHistoryData: payload => ({
    type: ACTION_TYPES.PAYMENT_HISTORY_DATA,
    payload,
  }),
  subscriptionList: payload => ({
    type: ACTION_TYPES.SUBSCRIPTION_LIST,
    payload,
  }),
  notificationcount: payload => ({
    type: ACTION_TYPES.NOTIFICATIONCOUNT,
    payload,
  }),
  role: payload => ({
    type: ACTION_TYPES.ROLE,
    payload,
  }),
  amount: payload => ({
    type: ACTION_TYPES.AMOUNT,
    payload,
  }),
  confirm_signup: payload => ({
    type: ACTION_TYPES.CONFIRM_SIGNUP,
    payload,
  }),
  resend_confirmation_code: payload => ({
    type: ACTION_TYPES.RESEND_CONFIRMATION_CODE,
    payload,
  }),
  corporateDDL: payload => ({
    type: ACTION_TYPES.CORPORATE_DDL,
    payload,
  }),
  ratingModal: payload => ({
    type: ACTION_TYPES.RATING_MODAL,
    payload,
  }),
  stateList: payload => ({type: ACTION_TYPES.STATE_LIST, payload}),

  reoprt_issues_list: payload => ({type: ACTION_TYPES.REPORT_LIST, payload}),
  statusbar: payload => ({type: ACTION_TYPES.STATUS_BAR, payload}),

  initialResereveSlot: payload => ({
    type: ACTION_TYPES.INITIATE_RESERVE_SLOT,
    payload,
  }),
  map_selected_item: payload => ({
    type: ACTION_TYPES.MAP_SELECTED_ITEM,
    payload,
  }),
  filter_list: payload => ({
    type: ACTION_TYPES.FILTER_LIST,
    payload,
  }),
  webview_modal: payload => ({
    type: ACTION_TYPES.WEBVIEW_MODAL,
    payload,
  }),
  webview_source_code: payload => ({
    type: ACTION_TYPES.WEBVIEW_SOURCE_CODE,
    payload,
  }),
  All_Report_History: payload => ({
    type: ACTION_TYPES.ALL_REPORT_HISTORY,
    payload,
  }),
  guest_user_login: payload => ({
    type: ACTION_TYPES.GUEST_USER_LOGIN,
    payload,
  }),
  accessToken: payload => ({
    type: ACTION_TYPES.ACCESS_TOKEN,
    payload,
  }),
  prepaid_Modal: payload => ({
    type: ACTION_TYPES.PREPAID_MODAL,
    payload,
  }),
};
