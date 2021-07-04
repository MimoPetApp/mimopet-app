import Button, { ButtonColors } from './Button.vue'

export default {
  title: 'Components/Button',
  parameters: {},
  component: Button,
  argTypes: {
    color: { control: { type: 'select', options: ButtonColors } },
    label: { control: { type: 'text' } },
    class: { control: { type: 'text' } },
    icon: { control: { type: 'text' } },
    'icon-right': { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    round: { control: { type: 'boolean' } },
    rounded: { control: { type: 'boolean' } },
    stack: { control: { type: 'boolean' } },
    glossy: { control: { type: 'boolean' } },
    unelevated: { control: { type: 'boolean' } },
    push: { control: { type: 'boolean' } }
  }
}

const Template = args => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />'
})

export const Basic = Template.bind({})
Basic.args = {
  label: 'Default',
  color: ButtonColors[0]
}

export const LargeLateralBorders = Template.bind({})
LargeLateralBorders.args = {
  label: 'Large Borders',
  color: ButtonColors[0],
  class: 'pl-7 pr-7'
}
