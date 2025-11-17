export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-center text-4xl font-extrabold text-emerald-600 mb-6">Contact</h2>

      <div className="flex gap-6 justify-center">
        <a className="text-center hover:underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maulanarr/">
          Linkedin: <span className="font-bold">Maulana Ridhwan</span>
        </a>
        <a className="text-center hover:underline" target="_blank" rel="noreferrer" href="mailto:maulanaridhwanriziq@gmail.com">
          Email: <span className="font-bold">maulanaridhwanriziq@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
