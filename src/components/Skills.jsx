import useScrollReveal from "../hooks/useScrollReveal";

export default function Skills() {
  const ref = useScrollReveal();

  const categories = {
    "Hardware": [
      { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi" },
    ],

    "Frontend": [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
      { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    ],

    "Backend": [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render" },
      { name: "Railway", icon: "https://cdn.simpleicons.org/railway" },
      { name: "Koyeb", icon: "https://cdn.simpleicons.org/koyeb" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],

    "Machine Learning / AI": [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
      { name: "LangGraph", icon: "https://cdn.simpleicons.org/langgraph" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "YOLO", icon: "https://cdn.simpleicons.org/yolo" },
      { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "MLflow", icon: "https://cdn.simpleicons.org/mlflow" },
      { name: "HuggingFace", icon: "https://cdn.simpleicons.org/huggingface/f9dc00" },
      { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/f9ab00" },
      { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
    ],

    "Package Manager": [
      { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "pip", icon: "https://cdn.simpleicons.org/pypi" },
    ],

    "Tools": [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Markdown", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },
    ],
  };

  return (
    <section
        ref={ref}
        id="skills"
        className="
            opacity-0 translate-y-6 transition-all duration-700
            max-w-5xl mx-auto px-6 py-16
            bg-emerald-100 rounded-lg my-8
        "
        >
        <h2 className="text-3xl font-bold text-center mb-12">
            Tech Stacks & Tools worked with
        </h2>

        {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>

            <div className="flex flex-wrap gap-6 items-center">
                {items.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 group">
                    <img
                    src={item.icon}
                    alt={item.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition"
                    />
                    <span className="text-sm opacity-70">{item.name}</span>
                </div>
                ))}
            </div>
            </div>
        ))}
    </section>
  );
}
