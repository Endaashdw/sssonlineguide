import { useState, type ReactNode } from "react";
import { Image, ChevronRight, Search, Globe, Wifi, Gift, CreditCard } from "lucide-react";
import { guides, sections } from "./components/GuideData";
import { GuidePage } from "./components/GuidePage";

type Guide = (typeof guides)[0];

export default function App() {
  const [activeGuide, setActiveGuide] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  if (activeGuide) {
    return <GuidePage guideId={activeGuide} onBack={() => setActiveGuide(null)} />;
  }

  const filteredGuides = searchQuery.trim()
    ? guides.filter(
        (g) =>
          g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const getSectionGuides = (sectionId: string) =>
    guides.filter((g) => g.section === sectionId);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0F4FF" }}>
      {/* Header with hero image */}
      <header className="relative overflow-hidden" style={{ minHeight: 340 }}>
        {/* Background image */}
        <img
          src="https://visayandailystar.com/wp-content/uploads/2025/08/sss-bacolod.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Blue overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(50,79,225,0.88) 0%, rgba(50,79,225,0.70) 60%, rgba(20,40,120,0.80) 100%)" }}
        />

        {/* Nav bar */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Social_Security_System_%28SSS%29.svg/1280px-Social_Security_System_%28SSS%29.svg.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-white text-lg" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                SSS Online Guides
              </h1>
              <p className="text-blue-200 text-xs">Step-by-step instructions for all SSS online services</p>
            </div>
          </div>
        </div>

        {/* Hero text + search */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12 pt-4 text-center">
          <h2 className="text-white mb-3" style={{ fontSize: "2.2rem", fontWeight: 800, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
            How can we help you?
          </h2>
          <p className="text-blue-100 mb-8 text-sm">
            Browse our guides or search for what you need
          </p>
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none bg-white"
              style={{ color: "#111827", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Search results */}
        {filteredGuides ? (
          <div>
            <h3 className="text-sm mb-4" style={{ color: "#6B7280" }}>
              {filteredGuides.length} result{filteredGuides.length !== 1 ? "s" : ""} for &quot;{searchQuery}&quot;
            </h3>
            {filteredGuides.length === 0 ? (
              <div className="text-center py-16">
                <p style={{ color: "#9CA3AF" }}>No guides found. Try a different search term.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredGuides.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} onSelect={setActiveGuide} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Sections */
          <div className="space-y-12">
            {sections.map((section) => {
              const sectionGuides = getSectionGuides(section.id);
              const sectionIcon = sectionIcons[section.id];
              return (
                <section key={section.id}>
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="flex items-center justify-center rounded-2xl flex-shrink-0"
                      style={{ width: 48, height: 48, backgroundColor: "#324FE1" }}
                    >
                      {sectionIcon}
                    </div>
                    <div>
                      <h2 style={{ color: "#324FE1", fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.01em" }}>
                        {section.title}
                      </h2>
                      <p className="text-xs" style={{ color: "#6B8EF5" }}>
                        {sectionGuides.length} guide{sectionGuides.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                    <div className="ml-2 flex-1 h-0.5 rounded-full" style={{ background: "linear-gradient(to right, #324FE1, transparent)" }} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sectionGuides.map((guide) => (
                      <GuideCard key={guide.id} guide={guide} onSelect={setActiveGuide} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-xs" style={{ color: "#9CA3AF", borderTop: "1px solid #E5E7EB" }}>
        <p>Need more help? Visit your local SSS branch.</p>
      </footer>
    </div>
  );
}

const sectionIcons: Record<string, ReactNode> = {
  "online-portal": <Globe size={22} color="white" />,
  "online-services": <Wifi size={22} color="white" />,
  "online-benefits": <Gift size={22} color="white" />,
  "loan-online": <CreditCard size={22} color="white" />,
};

function GuideCard({ guide, onSelect }: { guide: Guide; onSelect: (id: string) => void }) {
  return (
    <button
      onClick={() => onSelect(guide.id)}
      className="group text-left w-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0 2px 12px rgba(50,79,225,0.08)",
        border: "1px solid rgba(50,79,225,0.12)",
        background: "white",
      }}
    >
      {/* Image with overlay title */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Deep gradient so title is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,20,80,0.82) 0%, rgba(10,20,80,0.35) 55%, transparent 100%)" }}
        />
        {/* Title pinned to bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <h3 className="text-white leading-snug" style={{ fontWeight: 700, fontSize: "1rem", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            {guide.title}
          </h3>
        </div>
        {/* Blue accent top-right corner pill */}
        <div
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: "#324FE1" }}
        >
          <ChevronRight size={14} color="white" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-3 pb-4">
        <p
          className="text-xs"
          style={{
            color: "#6B7280",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.6,
          }}
        >
          {guide.description}
        </p>
        <div
          className="mt-3 pt-3 flex items-center gap-1.5"
          style={{ borderTop: "1px solid rgba(50,79,225,0.10)" }}
        >
          <span
            className="flex items-center gap-1 text-xs transition-gap duration-200"
            style={{ color: "#324FE1", fontWeight: 700, letterSpacing: "0.01em" }}
          >
            View Guide
            <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </button>
  );
}
