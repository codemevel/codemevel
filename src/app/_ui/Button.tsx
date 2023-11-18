'use client'

function Button({
  title,
  submit,
  onClick,
}: {
  title: string
  submit?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={() => onClick}
      type={!submit ? 'button' : 'submit'}
      className="border-[0.5px] dark:border-white/30 border-black/30 dark:text-white text-black font-semibold text-2xl active:scale-[.99] px-5 py-2 rounded-sm backdrop-blur-sm hover:bg-white/10"
    >
      {title}
    </button>
  )
}

export default Button
