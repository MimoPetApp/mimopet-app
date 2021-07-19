import Button, { ButtonColors } from './Button.vue'

export default {
  title: 'Components/Button',
  parameters: {},
  component: Button,
  argTypes: {
    /** Color of component. */
    color: { control: { type: 'select', options: ButtonColors }, table: { category: 'Main' } },
    label: { control: { type: 'text' }, table: { category: 'Main' } },
    disabled: { control: { type: 'boolean' }, table: { category: 'Main' } },
    icon: { control: { type: 'text' }, table: { category: 'Icons' } },
    'icon-right': { control: { type: 'text' }, table: { category: 'Icons' } },
    flat: { control: { type: 'boolean' }, table: { category: 'Pre Defined Styles' } },
    round: { control: { type: 'boolean' }, table: { category: 'Pre Defined Styles' } },
    outline: { control: { type: 'boolean' }, table: { category: 'Pre Defined Styles' } },
    rounded: { control: { type: 'boolean' }, table: { category: 'Pre Defined Styles' } },
    unelevated: { control: { type: 'boolean' }, table: { category: 'Pre Defined Styles' } },
    class: { control: { type: 'text' }, table: { category: 'Others' } },
    stack: { control: { type: 'boolean' }, table: { category: 'Others' } },
    glossy: { control: { type: 'boolean' }, table: { category: 'Others' } },
    push: { control: { type: 'boolean' }, table: { category: 'Others' } }
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
Basic.parameters = {
  docs: { source: { code: '<Button label="Default" color="primary-filled" />' } }
}
Basic.args = {
  label: 'Default',
  color: ButtonColors[0]
}

export const BasicUnelevated = Template.bind({})
BasicUnelevated.parameters = {
  docs: { source: { code: '<Button label="Default" color="primary-filled" :unelevated="true" />' } }
}
BasicUnelevated.args = {
  label: 'Default',
  unelevated: true,
  color: ButtonColors[0]
}

export const BasicRounded = Template.bind({})
BasicRounded.parameters = {
  docs: { source: { code: '<Button label="Default" color="primary-filled" :rounded="true" />' } }
}
BasicRounded.args = {
  label: 'Default',
  rounded: true,
  color: ButtonColors[0]
}

export const LargeLateralBorders = Template.bind({})
LargeLateralBorders.parameters = {
  docs: {
    source: { code: '<Button label="Large Borders" color="primary-filled" class="pl-7 pr-7" />' }
  }
}
LargeLateralBorders.args = {
  label: 'Large Borders',
  color: ButtonColors[0],
  class: 'pl-7 pr-7'
}

export const FullWidth = Template.bind({})
FullWidth.parameters = {
  docs: {
    source: { code: '<Button label="Full Width" color="primary-filled" class="full-width" />' }
  }
}
FullWidth.args = {
  label: 'Full Width',
  color: ButtonColors[0],
  class: 'full-width'
}

export const IconOnLeft = Template.bind({})
IconOnLeft.parameters = {
  docs: { source: { code: '<Button label="Icon On Left" color="primary-filled" icon="mail" />' } }
}
IconOnLeft.args = {
  label: 'Icon On Left',
  icon: 'mail',
  color: ButtonColors[0]
}

export const IconOnRight = Template.bind({})
IconOnRight.parameters = {
  docs: {
    source: { code: '<Button label="Icon On Left" color="primary-filled" iconRight="mail" />' }
  }
}
IconOnRight.args = {
  label: 'Icon On Right',
  iconRight: 'mail',
  color: ButtonColors[0]
}

export const RoundWithIcon = Template.bind({})
RoundWithIcon.parameters = {
  docs: { source: { code: '<Button color="primary-filled" icon="mail" :round="true" />' } }
}
RoundWithIcon.args = {
  icon: 'mail',
  color: ButtonColors[0],
  round: true
}
