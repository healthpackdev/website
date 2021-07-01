import dayjs from 'dayjs';
import 'dayjs/locale/tr';

dayjs.extend(require('dayjs/plugin/relativeTime'));
dayjs.extend(require('dayjs/plugin/duration'));
dayjs.extend(require('dayjs/plugin/updateLocale'));
dayjs.locale('tr');
dayjs.updateLocale('tr', {
  relativeTime: {
    future: '%s içinde',
    past: '%s önce',
    s: 'birkaç saniye',
    m: '1 dakika',
    mm: '%d dakika',
    h: '1 saat',
    hh: '%d saat',
    d: '1 gün',
    dd: '%d gün',
    M: '1 ay',
    MM: '%d ay',
    y: '1 yıl',
    yy: '%d yıl',
  },
});
