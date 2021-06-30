import dayjs from 'dayjs';
import 'dayjs/locale/tr';

dayjs.extend(require('dayjs/plugin/relativeTime'));
dayjs.extend(require('dayjs/plugin/duration'));
dayjs.locale('tr');
