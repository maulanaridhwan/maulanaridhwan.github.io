import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const slidesRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slides = slidesRef.current;
    if (!section || !slides) return;

    const ctx = gsap.context(() => {
      const tl = gsap.to(slides, {
        x: "-200vw",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: [0, 0.5, 1],
            duration: 0.3,
            delay: 0.1,
            ease: "power2.inOut",
          },
          anticipatePin: 1,
          end: "+=300%",
        },
      });

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    }, section);

    // cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <div
        ref={slidesRef}
        style={{ display: "flex", flexDirection: "row", width: "300vw", height: "100%" }}
      >
        {/* Slide 1 */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            flex: "0 0 100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ECFDF5",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <div style={{ maxWidth: 960 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#065f46", marginBottom: 16 }}>
              About Me
            </h2>
            <p style={{ color: "#065f46", marginBottom: 12 }}>
              Electrical and AI Engineer with expertise in machine learning, embedded systems, and fullstack
              development.
            </p>
            <p style={{ color: "rgba(6,95,70,0.9)" }}>
              Certified in Python, Gen AI, and computer vision, with an award-winning weather forecasting tourism
              web app. Strong collaborator and adaptive leader passionate about integrating AI with engineering to
              deliver scalable, technology-driven solutions.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <section className="slide slide-2 w-screen h-screen bg-[#F2FEF9] pt-[120px] md:pt-[140px] flex items-start justify-center overflow-y-auto" style={{ flex: '0 0 100vw' }}>
          <div className="w-4/5 max-w-6xl mx-auto py-8 pb-16">
            {/* YEAR 2025 group */}
            <div className="mb-12">
              {/* YEAR ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-[30%_10%_60%] gap-8 md:gap-6 items-start mb-8">
                {/* LEFT: Year */}
                <div className="md:pr-4 block md:hidden">
                  <div className="text-[#1E293B] font-extrabold text-4xl md:text-[4rem] leading-none">2025</div>
                </div>
                <div className="hidden md:block md:pr-4 md:sticky md:top-32">
                  <div className="text-[#1E293B] font-extrabold text-5xl md:text-[4rem] leading-none">2025</div>
                </div>

                {/* MIDDLE: timeline vertical line (one per year group on desktop, hidden on mobile) */}
                <div className="hidden md:flex md:flex-col md:relative md:items-center md:w-full">
                  <div className="absolute inset-y-0 left-1/2 w-[3px] bg-[#2DD4BF] -translate-x-1/2" />
                  {/* Markers positioned in rows */}
                  <div className="relative z-10 flex items-center justify-center h-[120px]">
                    <div className="w-4 h-4 rounded-full border-[3px] border-[#FB923C] bg-white shadow-sm" />
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-[120px]">
                    <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-[120px]">
                    <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                  </div>
                </div>

                {/* RIGHT: company, type, description */}
                <div className="space-y-0 md:space-y-0">
                  {/* Job 1 */}
                  <div className="min-h-[120px] flex items-start md:items-start py-4 md:py-0 border-b md:border-b-0 md:border-l-2 md:border-transparent group">
                    <div className="block md:hidden mr-4 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full border-[3px] border-[#FB923C] bg-white shadow-sm" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#1E293B] font-bold text-lg md:text-2xl">5-Day AI Agents Google</div>
                      <div className="text-[#334155] text-sm font-medium mb-2">Intensive Course</div>
                      <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                        Completed learning core agent architecture, tool integration (MCP), context engineering (sessions &amp; memory),
                        agent evaluation (logs, traces, metrics), multi-agent systems (A2A Protocol), and deploying production-ready
                        agents using Gemini and ADK.
                      </p>
                    </div>
                  </div>

                  {/* Job 2 */}
                  <div className="min-h-[120px] flex items-start md:items-start py-4 md:py-0 border-b md:border-b-0">
                    <div className="block md:hidden mr-4 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#1E293B] font-bold text-lg md:text-2xl">Korea-ASEAN Digital Academy by Elice inc</div>
                      <div className="text-[#334155] text-sm font-medium mb-2">Fullstack Web Developer - Intensive Course</div>
                      <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                        Expanded knowledge in fullstack development React, Node.js, Cloud, DevOps, UI/UX. Led the AI/NLP component of
                        the capstone project, developing an LLM-based agentic chatbot capable of autonomous reasoning and adaptive interactions.
                      </p>
                    </div>
                  </div>

                  {/* Job 3 */}
                  <div className="min-h-[120px] flex items-start md:items-start py-4 md:py-0">
                    <div className="block md:hidden mr-4 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#1E293B] font-bold text-lg md:text-2xl">Coding Camp by DBS Foundation</div>
                      <div className="text-[#334155] text-sm font-medium mb-2">Machine Learning Engineer - Intensive Course Scholarship</div>
                      <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                        Conducted end-to-end machine learning and deep learning workflows - from data preprocessing to model deployment
                        achieving over 90% accuracy across various projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* YEAR 2024 group */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-[30%_10%_60%] gap-8 md:gap-6 items-start">
                {/* LEFT: Year */}
                <div className="md:pr-4 block md:hidden">
                  <div className="text-[#1E293B] font-extrabold text-3xl md:text-[3.5rem] leading-none">2024</div>
                </div>
                <div className="hidden md:block md:pr-4 md:sticky md:top-32">
                  <div className="text-[#1E293B] font-extrabold text-4xl md:text-[3.5rem] leading-none">2024</div>
                </div>

                {/* MIDDLE: timeline vertical line */}
                <div className="hidden md:flex md:flex-col md:relative md:items-center md:w-full">
                  <div className="absolute inset-y-0 left-1/2 w-[3px] bg-[#2DD4BF] -translate-x-1/2" />
                  <div className="relative z-10 flex items-center justify-center h-[120px]">
                    <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                  </div>
                </div>

                {/* RIGHT: company, type, description */}
                <div className="space-y-0">
                  <div className="min-h-[120px] flex items-start md:items-start py-4 md:py-0">
                    <div className="block md:hidden mr-4 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#1E293B] font-bold text-lg md:text-2xl">Badan Riset dan Inovasi Nasional (BRIN)</div>
                      <div className="text-[#334155] text-sm font-medium mb-2">Nuclear Energy Facilities Internship</div>
                      <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                        Performed routine inspection and maintenance of machinery at the Radioactive Waste Processing Facility, ensuring operational safety
                        and equipment reliability. Project – Achieved 96% accuracy and 93% F1-score in predictive modeling of capacitor module activation in critical
                        power systems at the Radioactive Waste Management Installation, using Random Forest and SMOTE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* YEAR 2023 group */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-[30%_10%_60%] gap-8 md:gap-6 items-start">
                {/* LEFT: Year */}
                <div className="md:pr-4 block md:hidden">
                  <div className="text-[#1E293B] font-extrabold text-3xl md:text-[3.5rem] leading-none">2023</div>
                </div>
                <div className="hidden md:block md:pr-4 md:sticky md:top-32">
                  <div className="text-[#1E293B] font-extrabold text-4xl md:text-[3.5rem] leading-none">2023</div>
                </div>

                {/* MIDDLE: timeline vertical line */}
                <div className="hidden md:flex md:flex-col md:relative md:items-center md:w-full">
                  <div className="absolute inset-y-0 left-1/2 w-[3px] bg-[#2DD4BF] -translate-x-1/2" />
                  <div className="relative z-10 flex items-center justify-center h-[120px]">
                    <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                  </div>
                </div>

                {/* RIGHT: company, type, description */}
                <div className="space-y-0">
                  <div className="min-h-[120px] flex items-start md:items-start py-4 md:py-0">
                    <div className="block md:hidden mr-4 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full border-2 border-[#2DD4BF] bg-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#1E293B] font-bold text-lg md:text-2xl">Hacktiv8</div>
                      <div className="text-[#334155] text-sm font-medium mb-2">Data Scientist - MSIB Awardee</div>
                      <p className="text-[#334155] text-sm md:text-base leading-relaxed">
                        Conducted Exploratory Data Analysis (EDA) using Python, developed machine learning models, and created basic to advanced visualizations
                        and web app prototypes using Streamlit and Flask for compelling data representation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile behavior: collapse into single column with preserved order */}
          <style>{`
            @media (max-width: 767px) {
              .slide-2 .md\:grid-cols-\[30%_10%_60%\] { grid-template-columns: 1fr; }
              .slide-2 .hidden.md\:block { display: none !important; }
              .slide-2 .md\:sticky { position: static !important; top: auto !important; }
            }
          `}</style>
        </section>

        {/* Slide 3 */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            flex: "0 0 100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F9FFFD",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <div style={{ maxWidth: 900, textAlign: "center" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#065f46", marginBottom: 16 }}>Current Focus</h2>
            <p style={{ color: "#065f46", marginBottom: 32 }}>
              I am currently focusing on building intelligent agents, autonomous systems, and scalable
              AI-powered tools.
            </p>
            
            <a
              href="/src/assets/resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                color: "#065f46",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(6, 95, 70, 0.15)";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "scale(1)";
              }}
            >
              View Resume
              <span style={{ fontSize: "16px", fontWeight: "400" }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
