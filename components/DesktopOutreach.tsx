import Image from "next/image"
import { SparklesCore } from "@/components/ui/sparkles"
import ComplianceModal from "@/components/ComplianceModal"
import AreculateirHoverPreview from "@/components/AreculateirHoverPreview"
import AreculateirOutreach from "@/components/areculateir-outreach"

export function DesktopOutreach() {
  return (
    <div className="hidden md:flex h-screen overflow-hidden">

      {/* === LEFT RAIL === */}
      <div className="relative flex flex-col justify-between w-[270px] flex-shrink-0 py-10 px-8 border-r border-primary/20 shadow-[1px_0_6px_rgba(255,122,0,0.06)]">

        {/* Sidebar atmosphere — overflow-hidden scoped to this layer only so popup can escape */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Base: dark charcoal gradient, slightly lighter at top */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#080808] to-[#050505]" />
          {/* Warm orange radial — bottom-left anchor, very faint */}
          <div className="absolute bottom-0 left-0 w-full h-[55%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,122,0,0.07)_0%,transparent_70%)]" />
          {/* Subtle upper warm whisper */}
          <div className="absolute top-0 right-0 w-[80%] h-[30%] bg-[radial-gradient(ellipse_at_top_right,rgba(255,122,0,0.04)_0%,transparent_70%)]" />
          {/* Low-density particles — very sparse, atmospheric only */}
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={0.6}
            particleDensity={60}
            className="w-full h-full opacity-50"
            particleColor="#f97316"
          />
        </div>

        {/* Top: logo + nav */}
        <div className="relative z-10 flex flex-col gap-6">
          {/* Outreach logo — constrained to sidebar slot */}
          <Image
            src="/areculateiroutreachlogo.png"
            alt="Areculateir Outreach"
            width={48}
            height={48}
            className="rounded-[12px]"
          />

          <div className="flex flex-col gap-2">
            <p className="text-foreground/25 text-[9px] uppercase tracking-widest mb-0.5">S.O.P / Reminder</p>

            {/* Single pill — always active, no tab switching needed for outreach */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#FF7900]/55 w-fit">
                <span className="w-1 h-1 rounded-full bg-[#FF7900] flex-shrink-0" />
                <span className="text-[10px] leading-none whitespace-nowrap text-foreground/80">
                  Outreach
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: compliance footer */}
        <div className="relative z-10 flex flex-col gap-1.5 text-[10px] leading-tight">
          <ComplianceModal />
          <p className="text-foreground/30 whitespace-nowrap">
            Brought to you by{" "}
            <AreculateirHoverPreview popupPosition="right" />
          </p>
          <span className="text-foreground/20">©2026</span>
        </div>
      </div>

      {/* === MAIN CONTENT — scrolls independently === */}
      <div className="flex-1 overflow-y-auto">
        <AreculateirOutreach />
      </div>

    </div>
  )
}
