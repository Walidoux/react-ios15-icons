import type { CSSProperties, FC, ReactNode } from 'react'

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type RangeIt<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>
interface DefaultProps {
  filled?: boolean
  children?: ReactNode
  className?: string
  styles?: CSSProperties
  height?: number
  width?: number
}

export type IconProps<P = unknown, WithFillProperty = false> = FC<
  WithFillProperty extends true
    ? DefaultProps & P
    : Omit<DefaultProps, 'filled'> & P
>

export interface DisableProp {
  disabled?: boolean
}

export interface BatteryProps {
  progression: RangeIt<0, 101>
}

export interface CellularProps {
  network: 'noNetwork' | 'verySlow' | 'slow' | 'normal' | 'fast'
}

export interface WifiProps {
  internet: 'noWifi' | 'fast' | 'normal' | 'slow'
}

export interface PhoneProps {
  isPutDown: boolean
}

export interface SpeakerProps extends DisableProp {
  pitch: 'high' | 'normal' | 'low' | 'idle'
}

export interface ChevronProps {
  direction: 'up' | 'down' | 'left' | 'right'
}

export interface EyedropperProps {
  fillLevel: 'half' | 'full' | 'empty'
}

export interface FlashLightProps {
  isOn: boolean
}

export type FolderPropType = 'add' | 'remove' | 'question' | 'user' | 'settings'
export interface FolderProps {
  type?: FolderPropType
}

export interface GearProps {
  hasDouble?: boolean
}

export interface BellProps extends DisableProp {
  hasNotification?: boolean
}
