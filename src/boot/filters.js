import { boot } from 'quasar/wrappers'
import moment from 'moment'
import 'moment/min/locales'

export default boot(({ app }) => {
  app.config.globalProperties.$filters = {
    formattedDate (value, localidade = 'pt-BR', formato = 'YYYY-MM-DD', saida = 'DD/MM/YYYY') {
      if (new Date(value).toUTCString() !== 'Invalid Date') {
        moment.locale(localidade)
        return moment(value, formato).format(saida)
      }
      return 'Data inválida'
    },
    getDateYear (value, localidade = 'pt-BR', formato = 'YYYY-MM-DD', saida = 'YYYY') {
      if (new Date(value).toUTCString() !== 'Invalid Date') {
        moment.locale(localidade)
        return moment(value, formato).format(saida)
      }
      return 'Data inválida'
    }
  }
})
