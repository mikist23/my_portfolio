/* eslint-disable react/no-unescaped-entities */
import project1 from '../assets/images/proj1.jpg';
import project2 from '../assets/images/proj2.jpg';

export default function About() {
  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-emerald-300">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Background */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="text-white/50 mb-6">
            I am a passionate backend developer specializing in the Django framework. My journey in tech began with an interest in solving real-world problems through efficient server-side solutions. Over time, I have honed my skills to design scalable and secure systems for web applications.
          </p>
          <div className="rounded-lg p-4 mb-4 border border-white/20">
            <code className="text-emerald-200/50">
              const skills = [
              <br />
              &nbsp;&nbsp;'Python',<br />
              &nbsp;&nbsp;'Django',<br />
              &nbsp;&nbsp;'REST APIs',<br />
              &nbsp;&nbsp;'SQL/NoSQL',<br />
              &nbsp;&nbsp;'Docker',<br />
              &nbsp;&nbsp;'AWS'
              <br />
              ];
            </code>
          </div>
        </div>

        {/* Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50">
            My expertise lies in backend development with Django, creating RESTful APIs, and integrating databases like PostgreSQL. I specialize in building reliable, secure, and high-performing web applications while adhering to best practices in software development.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <img
              src={project1}
              alt="Project 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I have a strong foundation in backend technologies and frameworks. Below are some of the key skills I bring to the table:
          </p>
          <div className="grid grid-cols-1 text-center gap-4">
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-emerald-300 font-medium mb-2">Core Backend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Django/DRF</li>
                <li>Python</li>
                <li>NoSQL/SQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-emerald-300 font-medium mb-2">DevOps</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Docker</li>
                <li>GitHub</li>
                <li>AWS</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Backend Development</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">REST APIs</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Database Design</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-300 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
          <p className="text-white/50">
            My approach to backend development revolves around creating clean, maintainable code and ensuring scalability. I emphasize understanding project requirements thoroughly to deliver efficient solutions.
          </p>
        </div>

        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">05. Goals</h3>
            <p className="text-white/50">
              My goal is to excel as a backend developer, tackle challenging projects, and contribute to impactful solutions. I strive to stay updated with the latest backend technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
