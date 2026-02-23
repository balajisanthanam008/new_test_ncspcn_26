import {
  Radio, Network, Activity, Cpu, Antenna, Layers, Share2, Wifi, ShieldAlert, Image as ImageIcon, BrainCircuit,
} from "lucide-react";
import { TopicCard } from "@/components/TopicCard";
import FadeSection from "@/components/FadeSection";

export default function TopicsSection() {
  const topics = [
    { title: "Ad hoc & Sensor Networks", icon: <Network className="h-10 w-10" /> },
    { title: "Bio-Medical Signal Processing", icon: <Activity className="h-10 w-10" /> },
    { title: "DSP Algorithms & Applications", icon: <Cpu className="h-10 w-10" /> },
    { title: "Electronic Systems", icon: <Cpu className="h-10 w-10" /> },
    { title: "Microwave (Antenna/Measurements/EMI/EMC)", icon: <Antenna className="h-10 w-10" /> },
    { title: "MIMO Systems", icon: <Layers className="h-10 w-10" /> },
    { title: "Networking & Communication Engineering", icon: <Share2 className="h-10 w-10" /> },
    { title: "Cognitive Radio & Dynamic Spectrum Management", icon: <Radio className="h-10 w-10" /> },
    { title: "Optical Network Protocols", icon: <Wifi className="h-10 w-10" /> },
    { title: "Security in Communication & Networking", icon: <ShieldAlert className="h-10 w-10" /> },
    { title: "Signal, Image Processing & Machine Learning", icon: <ImageIcon className="h-10 w-10" /> },
    { title: "Soft Computing", icon: <BrainCircuit className="h-10 w-10" /> },
  ];

  return (
    <section id="topics" className="py-20 section-alt relative overflow-hidden">
      <div className="container relative z-10">
        <FadeSection>
          <h2 className="text-4xl font-bold mb-4 text-center gradient-text">Topics</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore the cutting-edge research areas covered in our conference
          </p>
        </FadeSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <FadeSection key={index} delay={index * 50} direction={index % 2 === 0 ? "left" : "right"}>
              <TopicCard title={topic.title} icon={topic.icon} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
