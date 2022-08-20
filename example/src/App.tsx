import { Battery, Flashlight, Play, Wifi, Heart } from '../../src/index'

const App: React.FC = () => (
  <main className='flex min-h-screen w-screen items-center justify-center gap-4'>
    <Battery progression={75} />
    <Wifi internet='slow' />
    <Flashlight isOn={true} />
    <Play />
    <Heart />
  </main>
)

export default App
