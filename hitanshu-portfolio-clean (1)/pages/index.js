
import Head from 'next/head';

export default function Home() {
  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <Head>
        <title>Hitanshu Sekhar Das | Portfolio</title>
      </Head>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I'm <span className="text-blue-600">Hitanshu Sekhar Das</span></h1>
        <p className="text-lg">MCA Student | Aspiring Data Analyst</p>
        <p>Passionate about data analysis, problem-solving, and crafting visually meaningful insights</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Download Resume (PDF)</button>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">Data-Driven | Analyzing Trends | Making Sense of Numbers</div>
          <div className="p-4 border rounded">Technical Enthusiast | Python | SQL | Tableau</div>
          <div className="p-4 border rounded">Team Player | Continuous Learner | Growth Mindset</div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded">
            <h3 className="font-bold">MCA Student</h3>
            <p>Fakir Mohan University, Balasore | 2023 - Present</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold">BCA Degree</h3>
            <p>Khallikote University, Berhampur | 2020 - 2023</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-bold">Sales Analysis Dashboard</h3>
            <p>Tools: Excel, Tableau</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold">Student Attendance System</h3>
            <p>Tools: Python, SQLite</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">GenAI Powered Data Analytics - Forage</div>
          <div className="p-4 border rounded">SQL for Data Science - Coursera</div>
          <div className="p-4 border rounded">Data Analytics with Excel - Great Learning</div>
          <div className="p-4 border rounded">Job Simulation - Accenture, Forage</div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded">
            <h3 className="font-bold">My Journey into Analytics</h3>
            <p>A story of transition into the world of data and insights.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold">MCA Life: Balancing Studies and Skill Development</h3>
            <p>Sharing experiences of building knowledge while managing projects.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-bold">Building My First Python Project</h3>
            <p>A personal journey of coding, debugging, and learning.</p>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center">
        <h2 className="text-xl font-semibold">Get In Touch</h2>
        <p className="text-gray-600">Let’s connect and collaborate on something great.</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Contact Me</button>
      </footer>
    </div>
  );
}
