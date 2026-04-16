import AreculateirOutreach from "@/components/areculateir-outreach"
import { MobileHeader } from "@/components/MobileHeader"
import { FooterMeta } from "@/components/footer-meta"

export default function Home() {
  return (
    <>
      <MobileHeader />
      <div className="pt-10">
        <AreculateirOutreach />
      </div>
      <FooterMeta />
    </>
  )
}
