'use client'

function Button({ title, onClick }: { title: string; onClick?: () => void }) {
  return (
    <button
      onClick={() => onClick}
      type="button"
      className="border-[0.5px] border-white/30 font-semibold text-2xl active:scale-[.99] px-5 py-2 rounded-sm backdrop-blur-sm hover:bg-white/10"
    >
      {title}
    </button>
  )
}

export default Button
