const SubTitle = async ({ subTitle }: { subTitle: string }) => {
  return (
    <p className="text-lg font-light md:text-2xl dark:text-white/50  text-black/50  mb-6 max-w-3xl">
      {subTitle}
    </p>
  )
}

export default SubTitle
