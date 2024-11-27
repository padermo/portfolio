import PageLayout from "@/components/PageLayout"
import { Header, About, Projects } from "@/components/Banners"

export default function Page() {
  return (
    <PageLayout>
      <Header />
      <About />
      <Projects />
    </PageLayout>
  )
}
