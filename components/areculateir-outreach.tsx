"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface AreculateirOutreachProps {
  logoSrc?: string
}

const terminalLines = [
  { text: "$ initialising client acquisition protocol...", type: "done" },
  { text: "$ loading ICP: ", label: "local service businesses / AU", type: "done" },
  { text: "$ pricing range: ", label: "$1.5k — $5k", type: "done" },
  { text: "$ target niche: ", label: "trades + med-aesthetics", type: "active" },
]

export default function AreculateirOutreach({
  logoSrc = "/areculateiroutreachlogo.png",
}: AreculateirOutreachProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [typedText, setTypedText] = useState<string>("")
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0)

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return

    const currentLine = terminalLines[currentLineIndex]
    const fullText = currentLine.text + (currentLine.label || "")

    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 25)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
        setTypedText("")
        setCurrentLineIndex((prev) => prev + 1)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [typedText, currentLineIndex])

  const renderTerminalLine = (line: typeof terminalLines[0], index: number) => {
    const isCurrentLine = index === currentLineIndex
    const isVisible = index < visibleLines
    const isLastLine = index === terminalLines.length - 1

    if (!isVisible && !isCurrentLine) return null

    const lineClass =
      line.type === "active"
        ? "text-[#c94a1a]"
        : line.type === "done"
          ? "text-[#4a4a4a]"
          : "text-[#888]"

    if (isCurrentLine) {
      const baseText = line.text
      const labelText = line.label || ""
      const currentTyped = typedText

      let displayBase = ""
      let displayLabel = ""

      if (currentTyped.length <= baseText.length) {
        displayBase = currentTyped
      } else {
        displayBase = baseText
        displayLabel = currentTyped.slice(baseText.length)
      }

      return (
        <div key={index} className={lineClass}>
          {displayBase}
          {displayLabel && <span className="text-[#e0e0e0]">{displayLabel}</span>}
          {isLastLine && currentTyped.length === baseText.length + labelText.length && (
            <span className="inline-block w-[7px] h-[13px] bg-[#c94a1a] animate-blink align-text-bottom ml-0.5" />
          )}
        </div>
      )
    }

    return (
      <div key={index} className={lineClass}>
        {line.text}
        {line.label && <span className="text-[#e0e0e0]">{line.label}</span>}
        {isLastLine && visibleLines > terminalLines.length - 1 && (
          <span className="inline-block w-[7px] h-[13px] bg-[#c94a1a] animate-blink align-text-bottom ml-0.5" />
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-mono text-[#e0e0e0] px-4 py-8 pb-16 box-border">
      {/* Logo Section — mobile only; sidebar carries brand identity on desktop */}
      <div className="md:hidden flex flex-col items-center text-center w-full mb-8">
        <Image
          src={logoSrc}
          alt="Areculateir Outreach"
          width={80}
          height={80}
          className="rounded-[18px] block mx-auto"
        />
        <div
          className="text-[1.1rem] tracking-[0.18em] text-[#c94a1a] uppercase mt-3"
          style={{ fontFamily: "'PPEditorialNew', serif", fontWeight: 200, fontStyle: "italic" }}
        >
          Areculateir Outreach
        </div>
      </div>

      {/* Terminal */}
      <div className="bg-[#111] border border-[#2a2a2a] rounded-lg max-w-[680px] mx-auto mb-10 overflow-hidden">
        <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-1.5 border-b border-[#2a2a2a]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#c94a1a]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="text-[11px] text-[#555] mx-auto tracking-[0.05em]">
            areculateir — outreach/sequence.sh
          </div>
        </div>
        <div className="p-4 px-5 text-xs leading-[1.9] min-h-[100px]">
          {terminalLines.map((line, index) => renderTerminalLine(line, index))}
        </div>
      </div>

      {/* Divider */}
      <hr className="max-w-[680px] mx-auto mb-10 border-0 border-t border-[#1e1e1e]" />

      {/* Step 01 */}
      <Section stepNum="Step 01" title="Define your ICP before touching any tool">
        <Item marker="›">
          <strong className="text-white font-bold">Target:</strong> Service businesses across Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Canberra, Newcastle, Wollongong, Hobart, Darwin, Sunshine Coast, and Geelong — trades, med-aesthetics, law, fitness
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Pain:</strong> Outdated or nonexistent site costing them jobs and credibility
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Budget signal:</strong> Employees 1–20, cash-rich, time-poor, decision maker is the owner
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Presence:</strong> Must be able to find 1000+ contacts fitting this profile
        </Item>
        <Rule>
          Rule: <span className="text-[#c94a1a] not-italic">Your ICP is a theory, not stone.</span> Test, read the signals, pivot if needed.
        </Rule>
      </Section>

      {/* Step 02 */}
      <Section stepNum="Step 02" title="Scrape leads — pick one method, run it daily">
        <Item marker="›">
          <strong className="text-white font-bold">Google Maps Scraper</strong> via Apify <Tag>start here</Tag> — search &quot;plumber Sydney&quot;, &quot;electrician Melbourne&quot; etc. Extracts name, address, phone, website.
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Instant Data Scraper</strong> — free Chrome extension, visit any directory or Maps page, pull all data into a sheet instantly.
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Google Search Operator hack:</strong>{" "}
          <code className="text-[#c94a1a] text-[11px]">site:instagram.com &quot;plumber&quot; &quot;@gmail.com&quot;</code> — pulls emails from bios indexed by Google.
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">LinkedIn + Vayne</strong> — find owner profiles, export with Vayne, enrich with AnyMailFinder.
        </Item>
        <Rule>
          Rule: <span className="text-[#c94a1a] not-italic">Apify Google Maps costs ~$1.50 per 1,000 leads.</span> Start there. Don&apos;t overthink the stack.
        </Rule>
      </Section>

      {/* Step 03 */}
      <Section stepNum="Step 03" title="Enrich and score — only work Tier 1 leads">
        <Item marker="›">
          <strong className="text-white font-bold">AnyMailFinder</strong> — upload scraped list, get verified emails back. Do this before outreach.
        </Item>
        <Item marker="›">
          Score each lead: AU-based? + Owner-operated? + Bad/no website? + Local service? + Under 20 staff? = <strong className="text-white font-bold">4–5 = Tier 1. Work these first.</strong>
        </Item>
        <Item marker="›">
          Discard leads with no contact info, no website at all (cold), or that are clearly corporate/franchise.
        </Item>
        <Rule>
          Rule: <span className="text-[#c94a1a] not-italic">Quality on the front end = quality through the whole campaign.</span> Don&apos;t spam Tier 3 lists.
        </Rule>
      </Section>

      {/* Step 04 */}
      <Section stepNum="Step 04" title="Write the hook — 4-part cold email formula">
        <Item marker="1.">
          <strong className="text-white font-bold">Attention Hook</strong> — call out exactly who it&apos;s for. &quot;Plumbers in Western Sydney...&quot; Only the right people read on.
        </Item>
        <Item marker="2.">
          <strong className="text-white font-bold">Problem + Agitation</strong> — name the pain and twist it. &quot;Your site looks like 2011. Clients are Googling you, clicking off, and calling your competitor.&quot;
        </Item>
        <Item marker="3.">
          <strong className="text-white font-bold">Offer + Proof</strong> — the W.a.a.S pitch with social proof. &quot;I build premium sites for local trades. Here&apos;s one I just launched: [link]&quot;
        </Item>
        <Item marker="4.">
          <strong className="text-white font-bold">CTA</strong> — one clear action, no ambiguity. &quot;Reply YES and I&apos;ll send you a free audit of your current site.&quot;
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Subject line:</strong> &quot;Quick question about [Business Name]&apos;s website&quot;
        </Item>
        <Rule>
          Rule: <span className="text-[#c94a1a] not-italic">Keep it beautifully vague.</span> Create curiosity. Don&apos;t explain everything in the first email.
        </Rule>
      </Section>

      {/* Step 05 */}
      <Section stepNum="Step 05" title="Send and track — the 5-touch follow-up system">
        <Item marker="›">
          Day 1 — cold email. Day 3 — follow up (&quot;just bumping this up&quot;). Day 7 — try a different angle. Day 14 — one last nudge. Day 21 — move to DM.
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Track in a Google Sheet:</strong> Name, email, sent date, last touch, status (Sent / Replied / Demo / Proposal / Won / Lost).
        </Item>
        <Item marker="›">
          Colour code by days since last contact — green (under 3 days), yellow (3–7), red (7+ days, act now).
        </Item>
        <Rule>
          Rule: <span className="text-[#c94a1a] not-italic">50% of people quit after 1 contact. 90% of deals go to those who follow up 5+ times.</span> The profit is in the follow-up.
        </Rule>
      </Section>

      {/* Step 06 */}
      <Section stepNum="Step 06" title="Demo and close — make it impossible to say no">
        <Item marker="›">
          <strong className="text-white font-bold">Audit their site</strong> — screenshot 3 specific problems (slow, ugly, no CTA, not mobile).
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Build a mock</strong> of their business in v0 or Vercel before the call. Show, don&apos;t tell.
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Send a Loom</strong> walking through what you built for them. Personalisation = conversion.
        </Item>
        <Item marker="›">
          Objections: &quot;I have a site&quot; → &quot;I know, here&apos;s exactly why it&apos;s costing you leads.&quot; | &quot;No budget&quot; → &quot;One job covers it.&quot; | &quot;Let me think&quot; → &quot;What would make this a yes today?&quot;
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Pricing:</strong> Starter $1.5k / Standard $2.5k / Premium $5k. Always anchor to Premium first.
        </Item>
        <Rule>
          Rule: <span className="text-[#c94a1a] not-italic">Only 2% buy on first contact.</span> That&apos;s not failure — that&apos;s the game. Keep moving leads through.
        </Rule>
      </Section>

      {/* Step 07 */}
      <Section stepNum="Step 07" title="Build organic leverage in parallel">
        <Item marker="›">
          <strong className="text-white font-bold">Instagram:</strong> Post process, results, before/afters. Find viral hooks in your niche. Use ManyChat to capture leads from comments.
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">LinkedIn:</strong> Comment meaningfully on 20 posts per day in your niche. Siphon their audience. Become the go-to for web design in the trades/local service space.
        </Item>
        <Item marker="›">
          <strong className="text-white font-bold">Specialise publicly:</strong> Don&apos;t say you do everything. Say you build sites for AU trades and local service businesses. Referrals travel within niches.
        </Item>
        <Rule>
          Rule: <span className="text-[#c94a1a] not-italic">Outbound gets you started. Organic builds the moat.</span> Do both simultaneously from day one.
        </Rule>
      </Section>

      {/* Footer */}
      <div className="max-w-[680px] mx-auto text-center pt-4">
        <div className="text-[10px] text-[#333] tracking-[0.2em] uppercase">
          Areculateir / Outreach Protocol v1 — Read daily until memorised
        </div>
      </div>
    </div>
  )
}

function Section({
  stepNum,
  title,
  children,
}: {
  stepNum: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[680px] mx-auto mb-10 border-l-2 border-[#c94a1a] pl-5">
      <div className="text-[10px] text-[#c94a1a] tracking-[0.2em] uppercase mb-1">
        {stepNum}
      </div>
      <div className="font-sans font-[800] text-base text-white mb-3 tracking-[0.04em]">
        {title}
      </div>
      {children}
    </div>
  )
}

function Item({ marker, children }: { marker: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 mb-2 items-start text-xs leading-[1.7] text-[#aaa]">
      <div className="text-[#c94a1a] shrink-0 mt-px">{marker}</div>
      <div className="text-[#ccc]">{children}</div>
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[9px] px-1.5 py-px border border-[#c94a1a44] text-[#c94a1a] rounded-sm tracking-[0.1em] ml-1.5 align-middle uppercase">
      {children}
    </span>
  )
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] text-[#555] border-t border-[#1a1a1a] mt-4 pt-3 italic">
      {children}
    </div>
  )
}
