import { GlassCard } from "./GlassCard";

interface CommitteeCardProps {
  name: string;
  position: string;
  company: string;
  profileUrl?: string;
}

export function CommitteeCard({ name, position, company, profileUrl }: CommitteeCardProps) {
  return (
    <GlassCard className="flex flex-col items-center justify-center text-center p-6 h-[200px]">
      <div className="flex flex-col items-center space-y-2 mb-4">
        <h4 className="text-lg font-bold text-foreground">{name}</h4>
        <p className="text-muted-foreground text-sm">{position}</p>
        <p className="text-muted-foreground/70 text-sm">{company}</p>
      </div>
      {profileUrl && (
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-primary/50 text-primary px-3 py-1.5 hover:bg-primary/10 transition-all duration-300"
        >
          View Profile
        </a>
      )}
    </GlassCard>
  );
}
