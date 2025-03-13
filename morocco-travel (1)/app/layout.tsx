import BottomNavigation from "@/components/bottom-navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen pb-16 md:pb-0">
          {children}
          <BottomNavigation />
        </main>
      </body>
    </html>
  )
} 