import FadeSection from "@/components/FadeSection";
import { GlassCard } from "@/components/GlassCard";

export default function TimelineSection() {
  const events = [
    { date: "16th March 2026", event: "Submission of full length paper" },
    { date: "18th March 2026", event: "Notification of acceptance" },
    { date: "25th March 2026", event: "Submission of camera ready paper" },
    { date: "8th April 2026", event: "Conference date" },
  ];

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <FadeSection>
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Schedule</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Mark these important dates in your calendar
          </p>
        </FadeSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 hidden md:block"></div>

            <div className="space-y-12 md:space-y-16">
              {events.map((item, index) => (
                <FadeSection key={index} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <GlassCard>
                      <div className="text-primary font-bold text-lg mb-1">{item.date}</div>
                      <div className="text-foreground text-base">{item.event}</div>
                    </GlassCard>
                  </div>
                  {/* Desktop layout */}
                  <div className={`hidden md:flex relative items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8 order-2"}`}>
                      <GlassCard>
                        <div className="text-primary font-bold text-xl mb-2">{item.date}</div>
                        <div className="text-foreground text-lg">{item.event}</div>
                      </GlassCard>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <div className="h-6 w-6 rounded-full bg-primary border-4 border-background shadow-lg animate-pulse-glow"></div>
                    </div>
                    <div className={`w-5/12 ${index % 2 === 0 ? "order-2" : "order-1"}`}></div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
