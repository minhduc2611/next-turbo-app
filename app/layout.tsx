import './globals.css'

export const metadata = {
  title: 'Next Turbo App',
  description: 'Supermomo turbo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
