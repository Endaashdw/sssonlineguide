import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Circle } from "lucide-react";
import { guides } from "./GuideData";

interface GuidePageProps {
  guideId: string;
  onBack: () => void;
}

export function GuidePage({ guideId, onBack }: GuidePageProps) {
  const guide = guides.find((g) => g.id === guideId);
  const [currentStep, setCurrentStep] = useState(0);

  if (!guide) return null;

  const isFirst = currentStep === 0;
  const isLast = currentStep === guide.steps.length - 1;
  const step = guide.steps[currentStep];
  const progress = ((currentStep + 1) / guide.steps.length) * 100;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0F4FF" }}>
      {/* Hero header with image */}
      <header className="relative overflow-hidden" style={{ minHeight: 220 }}>
        <img
          src={guide.image}
          alt={guide.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(50,79,225,0.90) 0%, rgba(50,79,225,0.60) 60%, rgba(20,40,120,0.75) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-4 pb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Guides</span>
          </button>
          <h1 className="text-white text-3xl" style={{ fontWeight: 1000, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>{guide.title}</h1>
          <p className="text-blue-100 text-sm mt-2">{guide.description}</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Steps Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h3 className="text-sm uppercase tracking-wider mb-4" style={{ color: "#324FE1", fontWeight: 600 }}>
                All Steps
              </h3>
              <div className="space-y-2">
                {guide.steps.map((s, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all"
                    style={{
                      backgroundColor: index === currentStep ? "#EEF2FF" : "transparent",
                      color: index === currentStep ? "#324FE1" : index < currentStep ? "#6B7280" : "#374151",
                    }}
                  >
                    <span className="flex-shrink-0">
                      {index < currentStep ? (
                        <CheckCircle size={18} style={{ color: "#324FE1" }} />
                      ) : index === currentStep ? (
                        <div
                          className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: "#324FE1", fontSize: "10px", fontWeight: 700 }}
                        >
                          {index + 1}
                        </div>
                      ) : (
                        <Circle size={18} style={{ color: "#D1D5DB" }} />
                      )}
                    </span>
                    <span className="text-sm truncate" style={{ fontWeight: index === currentStep ? 600 : 400 }}>
                      {s.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-2" style={{ color: "#6B7280" }}>
                  <span>Step {currentStep + 1} of {guide.steps.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#E5E7EB" }}>
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, backgroundColor: "#324FE1" }}
                  />
                </div>
              </div>

              {/* Step number badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4"
                style={{ backgroundColor: "#EEF2FF", color: "#324FE1", fontWeight: 600 }}
              >
                <span>Step {currentStep + 1}</span>
              </div>

              {/* Step content */}
              <h3 className="text-2xl mb-4" style={{ color: "#111827", fontWeight: 700 }}>
                {step.title}
              </h3>

              {/* Step illustration image */}
              <div className="rounded-xl overflow-hidden mb-5" style={{ height: 200 }}>
                <img
                  src={step.image || guide.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  style={{ filter: `hue-rotate(${currentStep * 15}deg) brightness(0.97)` }}
                />
              </div>

              <p className="text-base leading-relaxed" style={{ color: "#4B5563" }}>
                {step.description}
              </p>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-10 pt-6" style={{ borderTop: "1px solid #E5E7EB" }}>
                <button
                  onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
                  disabled={isFirst}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all"
                  style={{
                    backgroundColor: isFirst ? "#F3F4F6" : "#EEF2FF",
                    color: isFirst ? "#9CA3AF" : "#324FE1",
                    cursor: isFirst ? "not-allowed" : "pointer",
                    fontWeight: 500,
                  }}
                >
                  <ArrowLeft size={16} />
                  Previous
                </button>

                {isLast ? (
                  <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#324FE1", fontWeight: 600 }}
                  >
                    <CheckCircle size={16} />
                    Finish Guide
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStep((p) => Math.min(guide.steps.length - 1, p + 1))}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#324FE1", fontWeight: 600 }}
                  >
                    Next Step
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Completion message */}
            {isLast && (
              <div
                className="mt-4 rounded-2xl p-5 flex items-center gap-4"
                style={{ backgroundColor: "#ECFDF5", border: "1px solid #6EE7B7" }}
              >
                <CheckCircle size={24} style={{ color: "#059669", flexShrink: 0 }} />
                <div>
                  <p style={{ color: "#065F46", fontWeight: 600 }} className="text-sm">
                    You've reached the last step!
                  </p>
                  <p style={{ color: "#047857" }} className="text-xs mt-0.5">
                    Click "Finish Guide" to return to the home page.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
