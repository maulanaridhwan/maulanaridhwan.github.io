import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
    const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      id="about"
      className="opacity-0 translate-y-6 transition-all duration-700 max-w-5xl mx-auto px-6 py-16 bg-emerald-100 rounded-lg my-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-extrabold text-emerald-600 mb-4">About Me :)</h2>
          <p className="text-emerald-700 mb-3">
            Electrical and AI Engineer with expertise in machine learning, embedded systems, and fullstack development.
          </p>
          <p className="text-emerald-700/90">
            Certified in Python, Gen AI, and computer vision, with an award-winning weather forecasting tourism web app. Strong collaborator and adaptive leader passionate 
about integrating AI with engineering to deliver scalable, technology-driven solutions.
          </p>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
            alt="about illustration"
            className="w-72 h-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
