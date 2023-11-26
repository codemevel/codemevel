import { EnvelopeIcon } from '@sanity/icons'
import type { ComponentType } from 'react'
import { type Tool } from 'sanity'

import ContactToolUi from './ContactToolUi'

export interface myContactToolOptions {
  contactString?: string
}

export interface myContactToolProps {
  component: ComponentType<{
    tool: Tool<myContactToolOptions>
  }>
}

const ContactTool = () => {
  return {
    title: 'Contact Us',
    name: 'contact-tool',
    icon: EnvelopeIcon,
    component: ContactToolUi,
  }
}

export default ContactTool
