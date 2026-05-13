import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Section components and their background alternation
  const sections = [
    { Component: Hero, bg: "bg-white" },
    { Component: Skills, bg: "bg-gray-100/50" },
    { Component: Experience, bg: "bg-white" },
    { Component: Projects, bg: "bg-gray-100/50" },
    { Component: Certifications, bg: "bg-white" },
    { Component: Education, bg: "bg-gray-100/50" },
    { Component: SoftSkills, bg: "bg-gray-100/50" },
    { Component: Contact, bg: "bg-white" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen md:ml-72">
        <main className="flex-1 w-full">
          {sections.map(({ Component, bg }, idx) => (
            <section
              key={idx}
              className={`${bg} py-16 flex items-center`}
            >
              <div className="w-full max-w-5xl mx-auto px-6">
                <Component />
              </div>
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}