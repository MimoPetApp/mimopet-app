import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/animate/fadeInUp.css'
import '@quasar/extras/animate/fadeOutDown.css'
import '@quasar/extras/animate/fadeInRight.css'
import '@quasar/extras/animate/fadeOutRight.css'

import 'quasar/dist/quasar.css'
//import '@/assets/styles/css/app.scss'
import '@/assets/styles/css/themes/colors.css'
import '@/assets/styles/css/themes/font.css'
import '@/assets/styles/css/themes/spacing.css'

import { app } from '@storybook/vue3'
import { Quasar } from 'quasar'

app.use(Quasar, {})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'light-2',
    values: [
      {
        name: 'light',
        value: '#F6F9FC'
      },
      {
        name: 'light-2',
        value: '#efefed'
      },
      {
        name: 'dark',
        value: '#333333'
      },
      {
        name: 'dark-2',
        value: '#4b4a40'
      }
    ]
  }
}
