import type { SVGAttributes } from 'react'

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

type StrictSVGTypes = Omit<SVGAttributes<SVGElement>, 'children'>

export type IconProps<P = unknown> = StrictSVGTypes & P

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

export interface SpeakerProps {
  pitch: 'high' | 'normal' | 'low' | 'idle'
}
