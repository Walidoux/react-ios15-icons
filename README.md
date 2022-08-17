# Getting started

![Preview background library](https://images-ext-1.discordapp.net/external/5FmI3faZKSbqTgCAbZyMCBkV7HqecTtWENJZxE7xC5w/https/repository-images.githubusercontent.com/524621830/67536f3d-3efe-4c39-95f5-74a8cba31af0?width=1178&height=662)

## Overview

- [Installation](#installation)
- [Current version.](#current-version)
- [Contribution.](#contribution)
- [Credits](#credits)

## Installation

### Importing the library into your project

> NPM : `npm i @walidoux/react-ios15-icons` \
> YARN : `yarn add @walidoux/react-ios15-icons`

### Importing an icon

```tsx
impport { Battery } from "@walidoux/react-ios15-icons"

// Shows only 4/5 of battery filling
export const Component: React.FC = () => (
    <React.Fragment>
        <Battery progression={75} />
    </React.Fragment>
)
```

## Current version

Icons are imported straight from SF Symbols 3 apple developers platform with its features being developed over time.
We're looking forward for a migration to it's 4th version which has been released recently by the WWDC22 but definitely not on the top of our priorities.

[More details about SF Symbols 4 here.](https://developer.apple.com/videos/play/wwdc2022/10157/)

These are the supported icon versions beside extra details to get familiar with if you want.

| SF Symbols Version | iOS Version | macOS Version | tvOS Version | watchOS Version |
| ------------------ | ----------- | ------------- | ------------ | --------------- |
| 3.0                | 15.0        | 12.0          | 15.0         | 8.0             |
| 3.1                | 15.1        | 12.0          | 15.1         | 8.1             |
| 3.2                | 15.2        | 12.1          | 15.2         | 8.3             |
| 3.3                | 15.4        | 12.3          | 15.4         | 8.5             |

## Contribution

In order to contribute and improve our icon library, we've set certain rules to maintain...
everything will be mentioned in the [CHANGELOG](./CHANGELOG.md) file.

## Credits

Thanks to
