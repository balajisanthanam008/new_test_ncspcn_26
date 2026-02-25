import { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube, Calendar, Menu, X, FileText, Presentation } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { CommitteeCard } from "@/components/CommitteeCard";
import FadeSection from "@/components/FadeSection";
import ParallaxSection from "@/components/ParallaxSection";
import TopicsSection from "@/components/TopicsSection";
import TimelineSection from "@/components/TimelineSection";
import ParticleBackground from "@/components/ParticleBackground";
import { ModernButton } from "@/components/ModernButton";
import { GlassCard } from "@/components/GlassCard";
import ThemeToggle from "@/components/ThemeToggle";

import HeroImage from "@/assets/home.webp";
import CampusImage from "@/assets/college_about.png";
import DeptImage from "@/assets/ece-department.jpg";
import ConferenceImage from "@/assets/About-ncspcn.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#topics", label: "Topics" },
  { href: "#schedule", label: "Schedule" },
  { href: "#committee", label: "Committee" },
  { href: "#contact", label: "Contact" },
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-conference-nav-bg/80 border-b border-conference-nav-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-primary">NCSPCN '26</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <ModernButton variant="outline" className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </ModernButton>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border">
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 hero-gradient opacity-10"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <FadeSection direction="right">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-primary uppercase tracking-widest">Sri Venkateswara College of Engineering</p>
                  <p className="text-xs text-muted-foreground">(An Autonomous Institution Affiliated to Anna University, Chennai)</p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                    <span className="gradient-text">NCSPCN</span>{" "}
                    <span className="text-primary">'26</span>
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                    National Conference on Signal Processing, Communication & Networking
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="text-lg font-semibold">8 April, 2026</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <ModernButton
                      size="lg"
                      onClick={() => window.open("https://forms.gle/JvYLsCFwE5Dns8D57", "_blank")}
                    >
                      Register Now
                    </ModernButton>
                    <div className="flex items-center gap-4">
                      <a href="https://www.svce.ac.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                      </a>
                      <a href="https://instagram.com/svceofficial" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="https://www.linkedin.com/school/sri-venkateswara-college-of-engineering/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="https://www.youtube.com/@svcesriperumbudur3334" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Youtube className="h-5 w-5" />
                      </a>
                      <a href="mailto:ncspcn@svce.ac.in" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeSection>

              <FadeSection direction="left">
                <ParallaxSection speed={0.1}>
                  <div className="relative h-[280px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl border border-border">
                    <img src={HeroImage} alt="NCSPCN 2026 Conference" className="object-cover w-full h-full" />
                  </div>
                </ParallaxSection>
              </FadeSection>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <FadeSection>
          <section className="py-16 section-alt relative overflow-hidden">
            <div className="container relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2 gradient-text">NCSPCN '26</h2>
                <p className="text-muted-foreground">Mark your calendars for the conference</p>
              </div>
              <CountdownTimer targetDate="2026-04-08T00:00:00" />
            </div>
          </section>
        </FadeSection>

        {/* About Section */}
        <FadeSection>
          <section id="about" className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About</h2>

              {/* About College */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <FadeSection direction="right">
                  <ParallaxSection speed={0.15}>
                    <div className="relative h-[280px] rounded-xl overflow-hidden shadow-2xl border border-border">
                      <img src={CampusImage} alt="SVCE Campus" className="object-cover w-full h-full" />
                    </div>
                  </ParallaxSection>
                </FadeSection>
                <FadeSection direction="left">
                  <GlassCard>
                    <h3 className="text-2xl font-bold mb-4 text-primary">About the College</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sri Venkateswara College of Engineering (Autonomous), a premier self-financing engineering college
                      was established in the year 1985 and is managed by Sri Venkateswara Educational and Health Trust.
                      The college offers 12 undergraduate and 8 postgraduate programs in Engineering and Technology.
                      These programs are approved by AICTE and affiliated with Anna University, Chennai. The college
                      attained autonomous status in the year 2016. The college is accredited by NAAC with A+ grades in
                      2022. The college is an ISO 21001:2018 certified institution, situated about 37 km from Chennai on
                      Chennai–Bangalore National Highway (NH4) at Pennalur, Sriperumbudur in Kancheepuram district.
                    </p>
                  </GlassCard>
                </FadeSection>
              </div>

              {/* About Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <FadeSection direction="right" className="order-2 md:order-1">
                  <GlassCard>
                    <h3 className="text-2xl font-bold mb-4 text-primary">About the Department</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The Department of ECE was started in 1985 and is presently accredited by the NBA. The postgraduate
                      program (M.E) in Communication Systems was started in 2002 and Applied Electronics in 2012. There
                      are about 38 faculty members in the department and 19 of them are doctorates. The department is
                      well equipped with lab facilities and software tools like IE3D, ADS, CST Studio, Lab View, Tanner
                      Tools, Cadence, MATLAB, and PCB Prototype Machine.
                    </p>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-2 text-primary">Vision</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        To excel in offering value based quality education in the field of Electronics and Communication Engineering,
                        keeping in pace with the latest developments in technology through exemplary research, to raise the intellectual
                        competence to match global standards and to make significant contributions to the society.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-primary">Mission</h4>
                      <ul className="text-muted-foreground leading-relaxed text-sm space-y-2">
                        <li>• To provide the best pedagogical atmosphere of highest quality through modern infrastructure, latest knowledge and cutting edge skills.</li>
                        <li>• To fulfill the research interests of faculty and students by promoting and sustaining in house research facilities.</li>
                        <li>• To educate students in ethical and moral values, integrity, leadership and other quality aspects.</li>
                      </ul>
                    </div>
                  </GlassCard>
                </FadeSection>
                <FadeSection direction="left" className="order-1 md:order-2">
                  <ParallaxSection speed={0.15}>
                    <div className="relative h-[280px] rounded-xl overflow-hidden shadow-2xl border border-border">
                      <img src={DeptImage} alt="ECE Department" className="object-cover w-full h-full" />
                    </div>
                  </ParallaxSection>
                </FadeSection>
              </div>

              {/* About IETE & Conference */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <FadeSection direction="right">
                  <ParallaxSection speed={0.15}>
                    <div className="relative h-[280px] rounded-xl overflow-hidden shadow-2xl border border-border">
                      <img src={ConferenceImage} alt="Conference" className="object-cover w-full h-full" />
                    </div>
                  </ParallaxSection>
                </FadeSection>
                <FadeSection direction="left">
                  <GlassCard>
                    <h3 className="text-2xl font-bold mb-4 text-primary">About IETE</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      IETE Chennai Centre being the head of all ISF's surrounding the demography of Chennai, has been a
                      keen supporter towards the welfare of student community, through its Student Forums. IETE Student
                      Forum of SVCE has been devoted to the enlightenment of students through various technical events.
                    </p>
                    <h3 className="text-2xl font-bold mb-4 text-primary">About the Conference</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      NCSPCN - 2026 aims to serve as a forum for experts from industries and institutions to share their
                      knowledge and experience, leading to synergy of technologies in Electronics, Communication Systems,
                      Networks and Signal Processing. The technical program includes two keynote addresses by eminent
                      personalities, Paper Presentation sessions, and Poster Presentation sessions.
                    </p>
                  </GlassCard>
                </FadeSection>
              </div>
            </div>
          </section>
        </FadeSection>

        {/* Topics */}
        <FadeSection>
          <TopicsSection />
        </FadeSection>

        {/* Schedule */}
        <FadeSection>
          <TimelineSection />
        </FadeSection>

        {/* Registration */}
        <FadeSection>
          <section id="register" className="py-20 section-alt relative overflow-hidden">
            <div className="container relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Registration</h2>
              <div className="max-w-4xl mx-auto">
                <GlassCard>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                        <FileText className="h-5 w-5" /> Paper & Poster Presentation
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Researchers, Academicians, UG/PG students and personnel from industries are invited to submit
                        their research work for oral presentation, in IEEE format not exceeding six pages.
                        Submitted research work must be original and should not have been presented or published anywhere else.
                      </p>
                      <div className="flex flex-col gap-2 mb-6">
                        <div className="flex items-center gap-2">
                          <Presentation className="h-4 w-4 text-primary" />
                          <span className="text-foreground text-sm">1. Paper Presentation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Presentation className="h-4 w-4 text-primary" />
                          <span className="text-foreground text-sm">2. Poster Presentation</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-primary">Registration Fee</h3>
                      <div className="glass-card rounded-lg p-4 mb-4 text-center">
                        <span className="text-3xl font-bold text-primary">₹750/-</span>
                        <p className="text-sm text-muted-foreground mt-1">Per participant</p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        Interested participants can submit the paper through the Google Form link provided below.
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        Best Paper will be awarded for each session based on the article quality.
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        For paper submission G-Form Link:{" "}
                        <a href="https://forms.gle/JvYLcFwE5Dns8D57" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">https://forms.gle/JvYLcFwE5Dns8D57</a>
                      </p>
                      <ModernButton
                        className="w-full"
                        onClick={() => window.open("https://forms.gle/JvYLsCFwE5Dns8D57", "_blank")}
                      >
                        Register Here!
                      </ModernButton>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </section>
        </FadeSection>

        {/* Publishing Details */}
        <FadeSection>
          <section className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Publishing Details</h2>
              <div className="max-w-3xl mx-auto">
                <GlassCard>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All papers will be peer reviewed and accepted papers will be published in our conference
                    proceedings NCSPCN '26.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conference Website:{" "}
                    <a href="https://ncspcn26.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ncspcn26.vercel.app/</a>
                  </p>
                </GlassCard>
              </div>
            </div>
          </section>
        </FadeSection>

        {/* Committee Section */}
        <FadeSection>
          <section id="committee" className="py-20 section-alt relative overflow-hidden">
            <div className="container relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Committee</h2>

              <div className="space-y-12 max-w-5xl mx-auto">
                {/* Chief Patron */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Chief Patron</h3>
                  <div className="flex justify-center">
                    <FadeSection>
                      <CommitteeCard name="Dr. M. Sivanandham" position="Secretary" company="SVEHT" profileUrl="https://www.svce.ac.in/profile-info/?id=4314" />
                    </FadeSection>
                  </div>
                </div>

                {/* Patron */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Patron</h3>
                  <div className="flex justify-center">
                    <FadeSection>
                      <CommitteeCard name="Dr. E.N Ganesh" position="Principal" company="SVCE" />
                    </FadeSection>
                  </div>
                </div>

                {/* Convenor */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Convenor</h3>
                  <div className="flex justify-center">
                    <FadeSection>
                      <CommitteeCard name="Dr. N. Kumaratharan" position="Professor & HOD" company="ECE" />
                    </FadeSection>
                  </div>
                </div>

                {/* Coordinators */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Coordinators</h3>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                      <FadeSection delay={100}>
                        <CommitteeCard name="Dr. R. Gayathri" position="Professor / ECE" company="ECE" />
                      </FadeSection>
                      <FadeSection delay={200}>
                        <CommitteeCard name="Ms. S. M. Mehzabeen" position="AP / ECE" company="ECE" />
                      </FadeSection>
                      <FadeSection delay={300}>
                        <CommitteeCard name="Dr. K. Bhuvaneswari" position="AP / ECE" company="ECE" />
                      </FadeSection>
                      <FadeSection delay={400}>
                        <CommitteeCard name="Dr. N. Varnikha" position="AP / ECE" company="ECE" />
                      </FadeSection>
                    </div>
                  </div>
                </div>

                {/* Organizing Committee */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Organizing Committee</h3>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
                      {[
                        "Dr. S Vijayanand, Associate Professor/ECE",
                        "Mrs.K S Subhashini, Assistant Professor/ECE",
                        "Mr.S Senthil Rajan, Assistant Professor/ECE",
                        "Mr.S P Sivagnana Subramanian, Assistant Professor/ECE",
                        "Mrs.S Kalyani, Assistant Professor/ECE",
                        "Mrs.R Kousalya, Assistant Professor/ECE",
                        "Mrs.L Anju, Assistant Professor/ECE",
                        "Mrs.B Sarala, Assistant Professor/ECE",
                        "Mr.P Muthukumaran, Assistant Professor/ECE",
                        "Mr.M K Varadarajan, Assistant Professor/ECE",
                        "Mrs.C Gomatheeswari Preethika, Assistant Professor/ECE",
                        "Dr. N. Sathish, Assistant Professor/ECE",
                        "Mr. Kanagaluru Venkatesh, Assistant Professor/ECE",
                        "Mrs. S. Mary Cynthia, Assistant Professor/ECE",
                        "Mrs. B. Elakkiya, Assistant Professor/ECE",
                        "Mr.S.Elangovan, Assistant Professor/ECE",
                        "Mr.L.K.Balaji Vignesh, Assistant Professor/ECE",
                        "Mr. D. Silambarasan, Assistant Professor/ECE",
                        "Mr. A. Mahadevan, Assistant Professor/ECE",
                        "Mrs. Stella Mercy, Assistant Professor/ECE",
                        "Dr. G. Ayappan, Assistant Professor/ECE",
                      ].map((member, index) => {
                        const [name, position] = member.split(", ");
                        return (
                          <FadeSection key={name} delay={(index + 1) * 80}>
                            <CommitteeCard name={name} position={position || ""} company="ECE" />
                          </FadeSection>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Advisory Committee */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">Advisory Committee</h3>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
                      {[
                        "Dr.S.R.Malathi, Professor/ECE",
                        "Dr. T. J. Jeyaprabha, Associate Professor/ECE",
                        "Dr.D.Menaka, Associate Professor/ECE",
                        "Dr.M.Athappan, Associate Professor/ECE",
                        "Dr.M.Bindhu, Associate Professor/ECE",
                        "Dr. P. Pattunnarajam, Associate Professor/ECE",
                        "Dr.K.Srividhya, Assistant Professor/ECE",
                        "Dr. S. Radhika, Assistant Professor/ECE",
                        "Dr. A.Ramya, Assistant Professor/ECE",
                        "Dr. Vidhyashree, Assistant Professor/ECE",
                        "Dr. A.G. Murali Krishna, Assistant Professor/ECE",
                      ].map((member, index) => {
                        const parts = member.split(", ");
                        return (
                          <FadeSection key={parts[0]} delay={(index + 1) * 60}>
                            <CommitteeCard name={parts[0]} position={parts.slice(1).join(", ")} company="ECE" />
                          </FadeSection>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeSection>

        {/* Contact */}
        <FadeSection>
          <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <FadeSection direction="right">
                  <GlassCard>
                    <h3 className="text-xl font-bold mb-4 text-primary">Get in Touch</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The Coordinators, NCSPCN - 2026,<br />
                      Department of ECE,<br />
                      Sri Venkateswara College of Engineering,<br />
                      Pennalur, Sriperumbudur - 602117
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">044-27152000, Extn-201, 225</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:ncspcn@svce.ac.in" className="text-muted-foreground hover:text-primary transition-colors">ncspcn@svce.ac.in</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">Pennalur, Sriperumbudur - 602117</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div className="text-muted-foreground text-sm">
                          <p>Mr.D.Silambarasan, AP/ECE: 9629851371</p>
                          <p>Mr.L.K.Balaji Vignesh, AP/ECE: 8807501389</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-muted-foreground text-sm">
                        Website: <a href="https://www.svce.ac.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.svce.ac.in</a>
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Conference Website: <a href="https://ncspcn-26.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ncspcn-26.vercel.app/</a>
                      </p>
                    </div>
                  </GlassCard>
                </FadeSection>

                <FadeSection direction="left">
                  <div className="h-[400px] rounded-xl overflow-hidden shadow-2xl border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995267.4272305506!2d79.972039!3d12.986980000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering%20(SVCE)!5e0!3m2!1sen!2sin!4v1742111061758!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SVCE Location"
                    ></iframe>
                  </div>
                </FadeSection>
              </div>
            </div>
          </section>
        </FadeSection>
      </main>

      {/* Footer */}
      <footer className="bg-conference-footer-bg py-12 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-foreground">NCSPCN 2026</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-conference-footer-fg hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#register" className="text-conference-footer-fg hover:text-primary transition-colors text-sm">Register</a></li>
                <li><a href="#topics" className="text-conference-footer-fg hover:text-primary transition-colors text-sm">Topics</a></li>
                <li><a href="#schedule" className="text-conference-footer-fg hover:text-primary transition-colors text-sm">Schedule</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-primary-foreground">Sri Venkateswara College of Engineering</h3>
              <p className="text-conference-footer-fg mb-4 text-sm">
                A premier self-financing engineering college established in 1985, managed by Sri Venkateswara Educational and Health Trust.
                An Autonomous Institution affiliated to Anna University, Chennai.
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:04427152000" className="text-conference-footer-fg hover:text-primary transition-colors"><Phone className="h-5 w-5" /></a>
                <a href="mailto:ncspcn@svce.ac.in" className="text-conference-footer-fg hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
                <a href="https://instagram.com/svceofficial" target="_blank" rel="noopener noreferrer" className="text-conference-footer-fg hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="https://maps.app.goo.gl/bKduYW2BEEDp48mp9" target="_blank" rel="noopener noreferrer" className="text-conference-footer-fg hover:text-primary transition-colors"><MapPin className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-conference-footer-fg text-sm">
            <p>&copy; {new Date().getFullYear()} NCSPCN 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
