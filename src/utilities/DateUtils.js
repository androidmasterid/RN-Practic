import moment from 'moment';

export const dateIS = date => moment(date).format('DD MMMM YYYY');
export const localDate = date =>
  moment.utc(date).format('DD MMM YYYY, hh:mm A');
