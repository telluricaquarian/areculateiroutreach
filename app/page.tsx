import AreculateirOutreach from "@/components/areculateir-outreach"
import { MobileHeader } from "@/components/MobileHeader"
import { FooterMeta } from "@/components/footer-meta"
import { DesktopOutreach } from "@/components/DesktopOutreach"

export default function Home() {
  return (
    <>
      {/* Desktop — sidebar shell, hidden on mobile */}
      <DesktopOutreach />

      {/* Mobile — full-page scroll, hidden on desktop */}
      <MobileHeader />
      <div className="md:hidden pt-10">
        <AreculateirOutreach />
      </div>
      <FooterMeta />
    </>
  )
}
