import type { FC } from 'react'
import type {
  BatteryProps,
  CellularProps,
  IconProps,
  WifiProps
} from './IconProps'

export type Icon<T = unknown> = FC<IconProps & T>

/// @GENERATORS: COMPONENT EXPORTS
export const Share: Icon
export const Play: Icon
export const Wifi: Icon<WifiProps>
export const Cellular: Icon<CellularProps>
export const Battery: Icon<BatteryProps>
export const Loop: Icon
export const Bookmark: Icon
export const Star: Icon
