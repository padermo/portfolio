export default function Main({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="px-4 pt-20 lg:pt-40">{children}</main>
  )
}
