import { ToggleArrowRightIcon } from '@sanity/icons'
import { Box } from '@sanity/ui'

import { getAllContacts } from '@/hooks/api'

async function ContactToolUi() {
  const contacts = await getAllContacts()
  if (!contacts) return null

  return (
    <div className="h-full dot-matrix max-h-[95vh] grid grid-cols-12 w-full">
      <div className="h-full w-full col-span-3 border-r-[0.5px] border-white/30">
        <Box padding={4} className="w-full border-b-[0.5px] border-white/30">
          <h2 className="opacity-90 text-xl">Contact Form Submissionn List.</h2>
        </Box>
        <Box padding={4} className="overflow-y-auto h-[75vh]">
          {contacts?.map(({ email, subject }, index) => {
            return (
              <li className="mb-2 p-3 flex flex-row justify-between relative    col-span-4 hover:bg-primary hover:dark:bg-primary/30  bg-white/50 dark:bg-black/50  border-[0.5px] border-white/30 rounded-sm dark:text-white/50 text-black/50 ">
                <div className="h-10 w-10 border-t-[0.5px] absolute top-1 left-1 border-l-[0.5px] opacity-30" />
                <div className="h-10 w-10 border-b-[0.5px] absolute bottom-1 right-1 border-r-[0.5px] opacity-30" />

                <div className=" flex justify-center items-center">
                  <p className="inline slashed-zero text-4xl px-2 text-primary font-mono">
                    <p> 0{index + 1}</p>
                  </p>
                </div>
                <div className=" h-full w-full ">
                  <h3 className="text-base font-semibold text-white">
                    {subject}
                  </h3>
                  <h4 className="text-sm font-semibold text-white">
                    by {email}
                    <br />
                  </h4>
                </div>
                <div className="flex justify-center hover:text-primary items-center">
                  <ToggleArrowRightIcon className="h-10 w-10" />
                </div>
              </li>
            )
          })}
        </Box>
      </div>
      <div className="h-full w-full col-span-9 border-l-[0.5px] border-white/30" />
    </div>
  )
}

export default ContactToolUi
