import { forwardRef, ReactElement } from 'react'

export const Label = ({ children, ...props }) => (
  <label className="mb-2 block opacity-50" {...props}>
    {children}
  </label>
)

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (props: any, ref): ReactElement => (
    <>
      <Label htmlFor={props.name || props.id}>{props.label}</Label>
      <input className="w-full rounded-md border-0 bg-gray-200" ref={ref} {...props} />
    </>
  ),
)

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(
  (props: any, ref): ReactElement => (
    <>
      <Label htmlFor={props.name || props.id}>{props.label}</Label>
      <textarea className="w-full rounded-md border-0 bg-gray-200" ref={ref} {...props} />
    </>
  ),
)
