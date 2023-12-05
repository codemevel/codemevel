
import Logo from './Logo'

function StudioLogo() {
  return (
    <button
      type="button"
      aria-label="Header logo"
      id="headerlogo"
      className="flex flex-row active:scale-[.99]   items-end justify-center"
    >
      <Logo />
      <p className="text-2xl pr-5 text-white font-semibold">Codemevel</p>
    </button>
  )
}

export default StudioLogo
