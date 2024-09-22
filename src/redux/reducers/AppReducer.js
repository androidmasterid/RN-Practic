import {AppStrings} from '../../constants/AppStrings';
import {ACTION_TYPES} from '../ActionTypes';

const initialState = {
  loginRes: '',
  available: false,
  pricing: 50,
  distance: 50,
  more: {
    charger_type: [],
    connector_type: [],
    amenities: [],
    rating: ['All'],
    charger_status: ['All'],
  },
  evCharging: false,
  amenities: false,
  directions: true,
  start: false,
  share: false,
  ratingModal: {
    status: false,
    isVisible: false,
  },
  cms_status: AppStrings.Pleasepluginandswipe,
  latlng: {latitude: '', longitude: ''},
  accountDetails: {},
  placeName: '',
  currentLocationName: 'Your Location',
  chargeHistory: [],
  chargeHistoryMonth: {},
  header__Message: [],
  dashboard_data: [],
  chargerList: [],
  addVehicle_: {},
  modal: [],
  make: [],
  year: [],
  chargerListItem: {},
  updateAccountDetails: [],
  invoiceData: {},
  driverInfo: {},
  vehicleDetail: [],
  favList: [],
  markFav: '',
  walletBalance: {},
  ProfilePic: {},
  profileImage: {},
  transactionStatus: {},
  selectedDashboardData: {},
  deleleAccount: {},
  updateVehicle: {},
  makePrimary: {},
  energyGraphData: [],
  emmisionGraphData: [],
  graph2Data: [],
  searchlatlng: {latitude: '', longitude: ''},
  coords: [],
  recommendedchargerlist: [],
  getReservationId: {},
  reserveSlotData: {},
  clickedReserveSlotData: {},
  walletHistory: [],
  reservedList: {},
  currentSession: {},
  mapResponse: [],
  CreateUser: {},
  privateChargers: [],
  chargingScheduledList: [],
  chargingScheduledHistory: [],
  chargingInfo: {},
  notificationData: [],
  notificationStatus: {},
  user_type_is_guest: false,
  paymentHistoryData: [],
  notificationcount: 0,
  corporateDDL: [],
  role: '',
  amount: 0,
  stateList: [],
  reportList: [],
  initialResereveSlot: {},
  map_selected_item: {},
  filter_list: {},
  webview_modal: false,
  webview_source_code: '',
  reviewRating: [],
  All_Report_History: [],
  isRefreshingList: false,
  phone_Location_Is: false,
  app_Location_Is: false,
  faq_list: {},
  subscriptionList: [],
  prepaid_Modal: false,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_RES:
      return {...state, loginRes: action.payload};
    default:
      return state;
  }
};
