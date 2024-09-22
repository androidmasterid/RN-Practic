// import {getDistance} from 'geolib';
// export const calculateDistance = (latlng, dlatitude, dlongitude) =>
//   Math.floor(
//     getDistance(
//       {
//         latitude: latlng?.latitude ?? 28.4488975,
//         longitude: latlng?.longitude ?? 77.4709645,
//       },
//       {
//         latitude: dlatitude ?? 28.4488975,
//         longitude: dlongitude ?? 77.4709645,
//       },
//     ) / 1000,
//   );
// export const secondsToDhms = seconds => {
//   seconds = Number(seconds);
//   if (!seconds) {
//     return '0 min';
//   }
//   let d = Math.floor(seconds / (3600 * 24));
//   let h = Math.floor((seconds % (3600 * 24)) / 3600);
//   let m = Math.floor((seconds % 3600) / 60);

//   let dDisplay = d > 0 ? d + (d == 1 ? ' day ' : ' days ') : '';
//   let hDisplay = h > 0 ? h + (h == 1 ? ' hr ' : ' hrs ') : '';
//   let mDisplay = m > 0 ? m + (m == 1 ? ' min ' : ' mins ') : '0';

//   return dDisplay + hDisplay + mDisplay;
// };
