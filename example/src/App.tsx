import {
  Battery,
  Flashlight,
  Play,
  Wifi,
  Heart
} from '@walidoux/react-ios15-icons'

const App: React.FC = () => (
  <main className='flex min-h-screen w-screen items-center justify-center'>
    <Battery progression={75} />
    <Wifi internet='slow' />
    <Flashlight />
    <Play />
    <Heart />
  </main>
)

export default App
