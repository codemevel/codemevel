import Logo from '@/app/_layout/Logo'

function Loading() {
  return (
    <div className="h-screen w-full flex justify-center bg-black animate-pulse items-center">
      <Logo />
    </div>
  )
}

export default Loading
