import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowUp,
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaGitAlt,
  FaGraduationCap,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedinIn,
  FaReact,
} from 'react-icons/fa'
import { FiArrowRight, FiDownload, FiExternalLink, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { RiCodeSSlashLine, RiGithubFill, RiLayoutGridFill, RiTeamLine } from 'react-icons/ri'
import { SiPostman } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

const roles = ['Web Developer', 'Frontend Developer', 'MERN Stack Developer', 'React.js Developer']

const profile = {
  name: 'Mithu Mohan',
  title: 'Web Developer & CSE Student',
  email: 'mithumohan00@gmail.com',
  phone: '+91 80 5011 3237',
  location: 'Bengaluru, India 560057',
  linkedin: 'https://www.linkedin.com/in/mithu-mohan-88973a320?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  github: 'https://github.com/mithumohan00-ship-it',
  instagram: 'https://www.instagram.com/_mithu_mohan_?igsh=eWI4a3Z2Z2gyemxr',
  resume: '/resume_Mohan.png',
  image: '/profile.jpeg',
}

const stats = [
  { label: 'Internship Experience', value: '01+', note: 'Frontend internship at Skillcraft Technology' },
  { label: 'Projects Completed', value: '06+', note: 'Hands-on work across web, AI, cloud, and IoT' },
  { label: 'Technologies Learned', value: '10+', note: 'HTML, CSS, JavaScript, React, Git, APIs, and more' },
  { label: 'Problem Solving Skills', value: 'Strong', note: 'Mentoring, teamwork, and practical execution mindset' },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', level: 96, icon: FaHtml5 },
      { name: 'CSS3', level: 92, icon: FaCss3Alt },
      { name: 'JavaScript', level: 90, icon: FaJs },
      { name: 'React.js', level: 88, icon: FaReact },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', level: 85, icon: FaGitAlt },
      { name: 'GitHub', level: 88, icon: RiGithubFill },
      { name: 'VS Code', level: 93, icon: VscCode },
      { name: 'Postman', level: 80, icon: SiPostman },
    ],
  },
  {
    title: 'Product Skills',
    items: [
      { name: 'REST API Integration', level: 86, icon: FiExternalLink },
      { name: 'Responsive Design', level: 94, icon: RiLayoutGridFill },
      { name: 'Performance Optimization', level: 82, icon: RiCodeSSlashLine },
      { name: 'Teamwork', level: 90, icon: RiTeamLine },
      { name: 'Time Management', level: 87, icon: FiSend },
    ],
  },
]

const experiences = [
  {
    role: 'Web Developer Intern',
    org: 'Skillcraft Technology',
    meta: 'Remote | Mar 2026 - May 2026',
    bullets: [
      'Developed responsive web pages using HTML, CSS, and JavaScript.',
      'Built React.js applications with reusable UI components.',
      'Integrated REST APIs and improved website performance.',
      'Collaborated using Git and GitHub in a remote workflow.',
    ],
  },
  {
    role: 'Tutor',
    org: "Bhadri's Academy",
    meta: 'Bengaluru',
    bullets: [
      'Provided homework support and curriculum guidance.',
      'Helped students develop study habits and exam strategies.',
      'Motivated students to build academic confidence.',
    ],
  },
  {
    role: 'Coach',
    org: 'Murarji Desai Residential School',
    meta: 'Chikkballapur',
    bullets: [
      'Mentored students in Chess and Badminton.',
    ],
  },
]

const projects = [
  {
    title: 'Blue Bus',
    description:
      'A Java-based Bus Ticket Booking System with a clean GUI that allows users to book tickets, select seats, generate QR codes, and manage bookings efficiently.',
    features: ['Seat booking system', 'QR code generation', 'Ticket management', 'Interactive Java GUI', 'User-friendly interface'],
    stack: ['Java', 'Java Swing', 'MySQL'],
    github: 'https://github.com/mithumohan00-ship-it/BlueBus.git',
    icon: '🚌',
  },
  {
    title: 'CivicEye',
    description:
      'An intelligent urban monitoring framework that enhances public safety using computer vision and real-time data processing.',
    features: ['Hazard detection', 'Infrastructure monitoring', 'Smart analytics dashboard', 'Real-time alerts', 'AI-powered monitoring'],
    stack: ['Computer Vision', 'AI', 'Real-Time Processing'],
    github: 'https://github.com/mithumohan00-ship-it/CivicEye.git',
    icon: '👁️',
  },
  {
    title: 'ParkWare',
    description:
      'A cloud-based Parking Management & Intelligence System designed to monitor parking occupancy, rental agreements, and financial operations across multiple parking zones.',
    features: ['Occupancy monitoring', 'Smart parking analytics', 'Rental management', 'Financial dashboard', 'Multi-zone support'],
    stack: ['Cloud Systems', 'Dashboard UI', 'Database Management'],
    github: 'https://github.com/mithumohan00-ship-it/Parware.git',
    icon: '🅿️',
  },
  {
    title: 'RFID Attendance System',
    description:
      'An IoT-based attendance management system using ESP32 and RFID technology for automated and contactless attendance tracking.',
    features: ['RFID card scanning', 'Real-time attendance updates', 'Wi-Fi database sync', 'Automated check-in', 'Contactless system'],
    stack: ['ESP32', 'RFID RC522', 'IoT', 'Database'],
    github: 'https://github.com/mithumohan00-ship-it/RFID-based-attendence-system.git',
    icon: '📶',
  },
  {
    title: 'EDUCA',
    description:
      'A dual-portal educational ecosystem designed for tutors and parents to streamline student management and academic tracking.',
    features: ['Parent-tutor communication', 'Student progress tracking', 'Enrollment management', 'Academic analytics', 'Multi-user dashboard'],
    stack: ['Web Technologies', 'Database', 'Dashboard UI'],
    github: 'https://github.com/mithumohan00-ship-it/educa.git',
    icon: '🎓',
  },
  {
    title: 'Bot or Not - Bomb Squad',
    description:
      'A cyber-themed gamified authentication system that transforms traditional CAPTCHA into an interactive bomb-defusal challenge.',
    features: ['Gamified CAPTCHA', 'Timer-based challenges', 'Interactive UI', 'Human verification logic', 'Responsive design'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mithumohan00-ship-it/bot-or-not1.git',
    icon: '💣',
  },
]

const languages = [
  ['Kannada', 'C2'],
  ['English', 'C1'],
  ['Hindi', 'B2'],
  ['Telugu', 'B1'],
]

const socialLinks = [
  ['GitHub', profile.github, FaGithub],
  ['LinkedIn', profile.linkedin, FaLinkedinIn],
  ['Instagram', profile.instagram, FaInstagram],
  ['Email', `mailto:${profile.email}`, FaEnvelope],
]

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
    </motion.div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        size: 4 + (index % 4) * 3,
        left: `${(index * 13) % 100}%`,
        top: `${(index * 17) % 100}%`,
        delay: index * 0.4,
        duration: 8 + (index % 5),
      })),
    [],
  )

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    const sections = navItems.map((item) => document.getElementById(item.toLowerCase()))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1))
            setMenuOpen(false)
          }
        })
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0.1 },
    )

    sections.forEach((section) => section && observer.observe(section))

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
      document.documentElement.style.setProperty('--cursor-x', `${window.innerWidth / 2}px`)
      document.documentElement.style.setProperty('--cursor-y', `${Math.max(160, window.innerHeight * 0.25)}px`)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeoutId

    if (typedRole.length < currentRole.length) {
      timeoutId = window.setTimeout(() => {
        setTypedRole(currentRole.slice(0, typedRole.length + 1))
      }, 75)
    } else {
      timeoutId = window.setTimeout(() => {
        setTypedRole('')
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 1800)
    }

    return () => window.clearTimeout(timeoutId)
  }, [typedRole, roleIndex])

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.1),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#020617_100%)]" />
        <div className="cursor-glow absolute inset-0" />
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-cyan-300/60 blur-[1px]"
            style={{ width: particle.size, height: particle.size, left: particle.left, top: particle.top }}
            animate={{ y: [0, -24, 0], opacity: [0.15, 0.8, 0.15], scale: [1, 1.25, 1] }}
            transition={{ duration: particle.duration, repeat: Number.POSITIVE_INFINITY, delay: particle.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/45 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-white">
            MITHU<span className="text-cyan-300">.DEV</span>
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                  activeSection === item
                    ? 'bg-cyan-400/15 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)]'
                    : 'text-slate-300 hover:bg-white/6 hover:text-cyan-200'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-300/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_30px_rgba(0,245,255,0.16)] transition hover:-translate-y-0.5 hover:bg-cyan-400/20 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? '×' : '≡'}</span>
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/8 bg-slate-950/90 px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/6 hover:text-cyan-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-white/4 px-6 py-12 shadow-[0_30px_90px_rgba(0,245,255,0.08)] backdrop-blur-2xl sm:px-8 lg:rounded-[2.5rem] lg:px-12 lg:py-16">
            <div className="grid min-h-[calc(100vh-10rem)] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_#00f5ff]" />
              {profile.title}
            </div>
            <p className="text-lg text-slate-300">Hello, It&apos;s Me</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Mithu <span className="text-cyan-300">Mohan</span>
            </h1>
            <div className="mt-5 flex min-h-12 items-center gap-3 text-xl text-slate-300 sm:text-2xl">
              <span>And I&apos;m a</span>
              <span className="font-semibold text-cyan-300">
                {typedRole}
                <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-300 align-middle" />
              </span>
            </div>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Dynamic web developer with internship experience at Skillcraft Technology. Skilled in building responsive web
              applications using React.js, HTML, CSS, and JavaScript, with hands-on strength in REST API integration,
              performance optimization, and scalable frontend solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
              <a href={`mailto:${profile.email}`} className="hover:text-cyan-200">
                {profile.email}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={profile.resume}
                download
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-6 py-3 font-medium text-slate-950 shadow-[0_0_35px_rgba(0,245,255,0.35)] transition hover:-translate-y-1"
              >
                <FiDownload />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 font-medium text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-200"
              >
                Contact Me
                <FiArrowRight />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {socialLinks.map(([label, href, Icon]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/5 text-cyan-200 shadow-[0_0_20px_rgba(0,245,255,0.08)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-[0_0_28px_rgba(0,245,255,0.22)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-lg items-center justify-center"
          >
            <motion.div
              className="absolute inset-8 rounded-[2.5rem] bg-cyan-300/25 blur-3xl"
              animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.03, 0.96] }}
              transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#1b202b] p-6 shadow-[0_0_90px_rgba(0,245,255,0.14)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_34%,rgba(56,189,248,0.08))]" />
              <div className="absolute left-0 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/18 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between rounded-[1.7rem] border border-white/6 bg-[#202531]/90 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                    Portfolio
                  </span>
                  <span className="text-sm text-slate-400">Frontend UI</span>
                </div>
                <div className="relative mx-auto flex h-72 w-72 items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-cyan-300/18 blur-3xl" />
                  <div
                    className="absolute inset-0 bg-cyan-300 shadow-[0_0_50px_rgba(0,245,255,0.65)]"
                    style={{ clipPath: 'polygon(25% 6%, 75% 6%, 100% 30%, 100% 70%, 75% 94%, 25% 94%, 0% 70%, 0% 30%)' }}
                  />
                  <motion.div
                    className="relative h-[16.8rem] w-[16.8rem] overflow-hidden bg-[linear-gradient(145deg,#0f172a,#030712)]"
                    style={{ clipPath: 'polygon(25% 6%, 75% 6%, 100% 30%, 100% 70%, 75% 94%, 25% 94%, 0% 70%, 0% 30%)' }}
                    animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                  >
                    <div className="absolute inset-2 z-10 border border-cyan-200/25" style={{ clipPath: 'polygon(25% 6%, 75% 6%, 100% 30%, 100% 70%, 75% 94%, 25% 94%, 0% 70%, 0% 30%)' }} />
                    <img
                      src={profile.image}
                      alt="Mithu Mohan portrait"
                      className="h-full w-full object-cover object-center saturate-[1.05] contrast-110 brightness-95"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                  </motion.div>
                </div>
                <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <p className="text-slate-500">Primary Focus</p>
                    <p className="mt-2 font-medium text-white">Responsive Web Apps</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <p className="text-slate-500">Stack</p>
                    <p className="mt-2 font-medium text-white">React.js • JS • APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="About Me"
            title="Building sharp interfaces with a product mindset."
            description="I am a Computer Science Engineering student at Sapthagiri NPS University with experience in frontend web development and React.js applications. I enjoy creating responsive user interfaces, optimizing performance, and solving real-world problems through technology."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl"
            >
              <p className="text-lg leading-8 text-slate-300">
                Dynamic web developer with internship experience at Skillcraft Technology, skilled in building responsive web
                applications using React.js, HTML, CSS, and JavaScript. Adept at REST API integration, performance
                optimization, and scalable solutions, with strong problem-solving ability backed by mentoring and teamwork
                experience.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Responsive interface systems',
                  'Performance-aware frontend decisions',
                  'Clean component structure',
                  'Strong collaboration habits',
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-cyan-300/15 bg-slate-900/70 p-4 text-slate-300">
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_0_30px_rgba(0,245,255,0.04)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(0,245,255,0.16)]"
                >
                  <p className="text-4xl font-semibold text-cyan-300">{stat.value}</p>
                  <h3 className="mt-4 text-lg font-medium text-white">{stat.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{stat.note}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="My Skills"
            title="Execution across UI engineering, tools, and delivery discipline."
            description="A balanced skill set built around modern frontend development, practical product workflows, and maintainable execution."
          />
          <div className="grid gap-6 xl:grid-cols-3">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: groupIndex * 0.1 }}
                className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl"
              >
                <h3 className="mb-6 text-xl font-semibold text-white">{group.title}</h3>
                <div className="space-y-5">
                  {group.items.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        animate={{ y: [0, skillIndex % 2 === 0 ? -3 : 3, 0] }}
                        transition={{ duration: 4 + skillIndex, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                        className="rounded-2xl border border-cyan-300/10 bg-slate-900/70 p-4 transition hover:border-cyan-300/35 hover:shadow-[0_0_35px_rgba(0,245,255,0.12)]"
                      >
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                              <Icon />
                            </div>
                            <span className="font-medium text-white">{skill.name}</span>
                          </div>
                          <span className="text-sm text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/6">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 shadow-[0_0_20px_rgba(0,245,255,0.45)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.08 }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Hands-on work, mentoring, and student leadership."
            description="A growing track record across frontend development, tutoring, and coaching with a practical focus on communication and outcomes."
          />
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-300 via-cyan-500/50 to-transparent sm:left-1/2" />
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.article
                  key={item.role}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65 }}
                  className={`relative sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}
                >
                  <span className="absolute left-4 top-8 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_#00f5ff] sm:left-auto sm:right-[-6px]" />
                  <div className="ml-10 rounded-[1.8rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl sm:ml-0">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">{item.meta}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-2 text-slate-300">{item.org}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
          </div>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Futuristic product cards designed to catch recruiter attention."
            description="A project showcase with premium glow treatment, glassmorphism cards, tilt interaction, animated borders, and a responsive SaaS-style presentation."
          />
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotateX: 5, rotateY: index % 2 === 0 ? -5 : 5, y: -8 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/7 p-[1px] shadow-[0_0_35px_rgba(0,245,255,0.08)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,245,255,0.35),transparent_28%,transparent_72%,rgba(56,189,248,0.22))] opacity-80 transition duration-500 group-hover:opacity-100" />
                <div className="relative h-full rounded-[calc(2rem-1px)] border border-white/8 bg-slate-950/88 p-6 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,transparent,rgba(15,23,42,0.75))]" />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg shadow-[0_0_18px_rgba(0,245,255,0.08)]">
                        {project.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-medium text-slate-200">Features</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition group-hover:border-cyan-300/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.06 }}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mt-8 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:border-cyan-300/30"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation aligned with software engineering growth."
            description="A focused computer science path with room to expand into product engineering, scalable systems, and modern web development."
          />
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto max-w-3xl rounded-[2rem] border border-cyan-300/20 bg-white/6 p-8 shadow-[0_0_40px_rgba(0,245,255,0.08)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-2xl text-cyan-200 shadow-[0_0_25px_rgba(0,245,255,0.15)]">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">B.Tech in Computer Science Engineering</h3>
                  <p className="mt-2 text-slate-300">Sapthagiri NPS University, Bengaluru</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm text-slate-300">
                <p className="text-slate-500">Expected Graduation</p>
                <p className="mt-2 text-lg font-medium text-cyan-200">October 2028</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Languages"
              title="Communication across multiple contexts."
              description="Language proficiency presented in a clear recruiter-friendly format."
            />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {languages.map(([name, level], index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 p-6 text-center backdrop-blur-xl"
                >
                  <p className="text-lg font-medium text-white">{name}</p>
                  <p className="mt-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-sm text-cyan-200">{level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="absolute inset-x-0 bottom-8 top-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,_rgba(0,245,255,0.12),_transparent_45%)]" />
          <SectionHeading
            eyebrow="Contact Me"
            title="Let&apos;s build something modern, useful, and memorable."
            description="Open to collaborations, internships, and meaningful product conversations."
          />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl"
            >
              <p className="text-lg leading-8 text-slate-300">
                Based in Bengaluru, I&apos;m interested in web development opportunities, collaborative products, and design-conscious frontend work.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  [FiMapPin, profile.location],
                  [FiMail, profile.email],
                  [FaLinkedinIn, 'linkedin.com/in/mithu-mohan-88973a320'],
                  [FaGithub, 'github.com/mithumohan00-ship-it'],
                ].map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-slate-900/70 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                      <Icon />
                    </div>
                    <span className="text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 min-h-48 rounded-[1.8rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_30%_30%,rgba(0,245,255,0.18),transparent_18%),linear-gradient(135deg,rgba(15,23,42,0.8),rgba(30,41,59,0.95))] p-5">
                <div className="relative flex h-full items-end overflow-hidden rounded-[1.4rem] border border-dashed border-cyan-300/20 p-5">
                  <div className="absolute left-[18%] top-[24%] h-12 w-12 rounded-full border border-cyan-300/20 bg-cyan-300/10 blur-sm" />
                  <div className="absolute right-[22%] top-[18%] h-16 w-16 rounded-full border border-cyan-300/10 bg-sky-400/10 blur-md" />
                  <div className="absolute bottom-[26%] left-[34%] h-20 w-20 rounded-full border border-cyan-300/10 bg-cyan-300/8 blur-md" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Location</p>
                    <div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-cyan-300/45 bg-slate-950/70 px-4 py-3 shadow-[0_0_28px_rgba(0,245,255,0.18)]">
                      <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(0,245,255,0.9)]" />
                      <span className="text-lg font-semibold text-white">Bengalore</span>
                    </div>
                    <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
                      Ambient map-inspired backdrop for the contact area, with the city called out like a highlighted map marker.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-sm text-slate-300">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(0,245,255,0.08)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-3 block text-sm text-slate-300">Email</span>
                  <input
                    type="email"
                    placeholder="mithu@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(0,245,255,0.08)]"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-3 block text-sm text-slate-300">Message</span>
                <textarea
                  rows="7"
                  placeholder="Tell me about your project, role, or idea..."
                  className="w-full rounded-[1.6rem] border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(0,245,255,0.08)]"
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-6 py-3 font-medium text-slate-950 shadow-[0_0_35px_rgba(0,245,255,0.3)] transition hover:-translate-y-1"
              >
                <FiSend />
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>Designed & Developed by Mithu Mohan</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default App
