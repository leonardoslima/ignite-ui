import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CHeckboxContainer, CHeckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CHeckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CHeckboxContainer {...props}>
      <CHeckboxIndicator asChild>
        <Check weight="bold" />
      </CHeckboxIndicator>
    </CHeckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
