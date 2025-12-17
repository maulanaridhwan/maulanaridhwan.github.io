import useScrollReveal from "../hooks/useScrollReveal";
import ProjectSlider from "./ProjectSlider";

export default function Projects() {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      id="projects"
      className="opacity-0 translate-y-6 transition-all duration-700 max-w-5xl mx-auto px-6 py-16 bg-emerald-100 rounded-lg my-8"
    >
      <h2 className="text-center text-4xl font-extrabold text-emerald-600 mb-8">Projects</h2>

      {/* Project 1 */}
      <div className="bg-emerald-100 rounded-lg p-6 mb-6 hover:scale-[1.02] transition transform">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-80">
              <ProjectSlider images={["/img/SwappyAI-1.png", "/img/SwappyAI-2.png"]} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-emerald-700">CarbonSwap's Agentic Chatbot</h3>
            <p className="text-emerald-700/90 mt-3">
              Agentic chatbot and NLP location recommendations for CarbonSwap, a carbon-offset e-commerce platform.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full" href="https://github.com/maulanaridhwan/carbonswap-ai" target="_blank" rel="noreferrer">View</a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-emerald-100 rounded-lg p-6 mb-6 hover:scale-[1.02] transition transform">
        <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
          <div className="w-full lg:w-80">
              <ProjectSlider images={["/img/sandtara-1.png", "/img/sandtara-2.png"]} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-emerald-700">Sandtara Trip's Weather Forecasting</h3>
            <p className="text-emerald-700/90 mt-3">
                Personalized recommendations and Weather forecasting feature for Sandtara Trip's Denpasar tourism web app to enhance travel planning.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full" href="https://sandtara-trip.vercel.app/" target="_blank" rel="noreferrer">View</a>

              <a className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full" href="https://github.com/Sandtara-Trip" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-emerald-100 rounded-lg p-6 mb-6 hover:scale-[1.02] transition transform">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-80">
              <ProjectSlider images={["/img/ai-vacation-planner-1.png", "/img/ai-vacation-planner-2.png"]} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-emerald-700">AI Vacation Planner</h3>
            <p className="text-emerald-700/90 mt-3">
              Using Gemini 2.5 Flash Lite that generates personalized travel itineraries and schedules based on user preferences, trip duration, and budget constraints.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full" href="https://ai-vacation-planner-frontend.netlify.app/" target="_blank" rel="noreferrer">View</a>
              
              <a className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full" href="https://github.com/ai-vacation-planner-backend" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="bg-emerald-100 rounded-lg p-6 mb-6 hover:scale-[1.02] transition transform">
        <div className="flex flex-col lg:flex-row-reverse gap-6 items-center">
          <div className="w-full lg:w-80">
              <ProjectSlider images={["/img/ai-web-scraper.png"]} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-emerald-700">AI Web Scraper</h3>
            <p className="text-emerald-700/90 mt-3">
                Built with Llama 3.1 and Streamlit that intelligently extracts, analyzes, and summarizes web data, providing users with interface to collect structured insights from web content.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full" href="https://sandtara-trip.vercel.app/" target="_blank" rel="noreferrer">View</a>
            </div>
          </div>
        </div>
      </div>
        {/* Placeholder for additional projects */}
      {/* <div className="card-3d bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold dark:text-white">Project Title</h3>
        <p className="dark:text-gray-300 mt-2">Short description...</p>
      </div> */}
    </section>
  );
}
