import type { ToasterProps } from 'sonner'
import { Toaster as Sonner } from 'sonner'

import { useTheme } from '@/contexts/theme-context'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'group toast',
          actionButton:
            'group-[.toast]:!bg-transparent group-[.toast]:!text-inherit group-[.toast]:!font-semibold group-[.toast]:!ring group-[.toast]:hover:!ring-2',
        },
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
