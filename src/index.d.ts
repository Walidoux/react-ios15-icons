import type { FC, SVGAttributes } from 'react'
import type { BatteryProps, CellularProps, WifiProps } from './IconProps'

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string
  size?: string | number
}

export type Icon<T = unknown> = FC<IconProps & T>
export const Wifi: Icon<WifiProps>
export const Cellular: Icon<CellularProps>
export const Battery: Icon<BatteryProps>
