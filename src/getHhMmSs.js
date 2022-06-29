import moment from 'moment';
import ru from 'moment/locale/ru';

function getHhMmSs(offsetString) {
  return moment().utcOffset(offsetString)
    .locale('ru')
    .format('LTS');
}

export default getHhMmSs;
