
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I'm <span className="text-blue-600">Hitanshu Sekhar Das</span></h1>
        <p className="text-lg">MCA Student | Aspiring Data Analyst</p>
        <p>Passionate about data analysis, problem-solving, and crafting visually meaningful insights</p>
        <Button className="mt-4">Download Resume (PDF)</Button>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card><CardContent>Data-Driven | Analyzing Trends | Making Sense of Numbers</CardContent></Card>
          <Card><CardContent>Technical Enthusiast | Python | SQL | Tableau</CardContent></Card>
          <Card><CardContent>Team Player | Continuous Learner | Growth Mindset</CardContent></Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <div className="space-y-4">
          <Card><CardContent>
            <h3 className="font-bold">MCA Student</h3>
            <p>Fakir Mohan University, Balasore | 2023 - Present</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold">BCA Degree</h3>
            <p>Khallikote University, Berhampur | 2020 - 2023</p>
          </CardContent></Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card><CardContent>
            <h3 className="font-bold">Sales Analysis Dashboard</h3>
            <p>Tools: Excel, Tableau</p>
            <Button variant="link">View Project</Button>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold">Student Attendance System</h3>
            <p>Tools: Python, SQLite</p>
            <Button variant="link">View Project</Button>
          </CardContent></Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card><CardContent>GenAI Powered Data Analytics - Forage</CardContent></Card>
          <Card><CardContent>SQL for Data Science - Coursera</CardContent></Card>
          <Card><CardContent>Data Analytics with Excel - Great Learning</CardContent></Card>
          <Card><CardContent>Job Simulation - Accenture, Forage</CardContent></Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <div className="space-y-4">
          <Card><CardContent>
            <h3 className="font-bold">My Journey into Analytics</h3>
            <p>A story of transition into the world of data and insights.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold">MCA Life: Balancing Studies and Skill Development</h3>
            <p>Sharing experiences of building knowledge while managing projects.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold">Building My First Python Project</h3>
            <p>A personal journey of coding, debugging, and learning.</p>
          </CardContent></Card>
        </div>
      </section>

      <footer className="mt-16 text-center">
        <h2 className="text-xl font-semibold">Get In Touch</h2>
        <p className="text-gray-600">Let’s connect and collaborate on something great.</p>
        <Button className="mt-4">Contact Me</Button>
      </footer>
    </div>
  );
}
