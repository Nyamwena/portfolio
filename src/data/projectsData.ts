import hwevaImg from '../images/hweva.png';
import rfidImg from '../images/rfid.png';
import iotImg from '../images/iot.png';
import studentpotImg from '../images/studentportal.png';
import onlineImg from '../images/onlie.png';
export const projectsData = [
  {
    title: 'University ERP System',
    role: 'Lead Developer & Architect',
    shortDescription: 'Comprehensive ERP platform for end-to-end student lifecycle management',
    description: 'Designed and built a modular ERP solution used by over 5000 students and staff, featuring admission, registration, grading, ' +
        'billing, exam management, fees management, reporting and alumni modules. Leveraged Laravel  for backend services, React for a responsive SPA front-end, and Tailwind CSS for consistent UI components.',
    impact: 'Streamlined administrative workflows, reducing manual paperwork by 80% and improving data accuracy across departments.',
    image: hwevaImg,
    highlights: [
      '🔒 Implemented granular role-based access control with Laravel Nova, securing sensitive data and cutting unauthorized access incidents by 95%.',
      '⚡ Built real-time notifications and in-app chat using Pusher, slashing response times by 50% and boosting user engagement.',
      '📄 Automated PDF transcript & invoice generation via DomPDF, saving over 10 hours of manual work per week.',
      '💳 Seamlessly integrated Ecocash &  Bank payment gateways, supporting 1,000+ digital transactions monthly with zero downtime.',
      '📊 Developed interactive audit-logging dashboards, improving compliance reporting speed by 70% and enabling on-demand analytics.',
      '🌐 Enabled real-time data synchronization across modules with WebSockets and Redis, ensuring consistency university-wide.',
      '🚀 Optimized database indexing and query performance, achieving sub-second page load times under peak traffic.',
      '⚙️ Containerized microservices with Docker and implemented zero-downtime rolling updates via Kubernetes.',
      '🎓 Embedded interactive user guides and in-app tutorials, reducing staff onboarding time by 40%.',
      '🔄 Automated nightly backups, health checks, and disaster-recovery drills, achieving 99.9% system uptime.'
    ],
    technologies: [
      'Laravel 9', 'PHP 8', 'MySQL', 'Vue.js', 'Tailwind CSS',
      'Pusher', 'DomPDF', 'Ecocash API', 'Redis', 'Docker', 'GitHub Actions'
    ],
    githubLink: 'https://github.com/Nyamwena',
    liveLink: 'https://hweva.rcu.ac.zw:8443/'
  }
,
  {
    title: 'RFID Patient Management System',
    shortDescription: 'Streamlined patient check-in/-out using RFID cards',
    description: 'A modern solution for healthcare facilities that streamlines patient check-in and check-out processes using RFID technology. Connects hardware components with a Laravel backend for seamless data flow and reporting.',
    image: rfidImg,
    highlights: [
      '📶 Integrated NodeMCU with RFID reader to capture patient card UIDs and send real-time data to Laravel 8 REST API for logging and verification.',
      '📊 Developed interactive dashboards using Chart.js and DataTables, providing staff with live insights on patient flow and departmental load.',
      '📱 Automated SMS appointment confirmations and reminders via Twilio API, reducing no-show rates and improving patient communication.',
      '⏱️ Implemented intelligent queuing and waiting-time prediction algorithms based on check-in timestamps and service duration patterns.',
      '🗃️ Enabled secure patient record lookup by UID, minimizing manual search delays and ensuring privacy.',
      '📥 Designed an admin panel for access logs, system diagnostics, and real-time RFID read statistics.',
      '🔐 Enforced token-based authentication and encrypted data transfers between the IoT device and backend API.'
    ]
    ,
    technologies: ['Laravel 8', 'NodeMCU', 'RFID', 'Chart.js', 'Twilio API', 'MQTT'],
    githubLink: '#'
  },
  {
    title: 'IoT-Enabled Door Access',
    shortDescription: 'Secure hotel room access system powered by IoT and web-based controls',
    description: 'A smart access control system tailored for hotel environments, integrating ESP32-based hardware with a web application for real-time monitoring and remote door management. The system provides secure, scalable access logs, and administrative control over user permissions and access schedules.',
    image: iotImg,
    highlights: [
      '🔐 Built backend APIs using Spring Boot for secure and efficient door access handling',
      '📡 Real-time door status updates and notifications via WebSockets',
      '🧠 Access log caching with Redis, then persisted to MySQL for analytics and compliance reporting',
      '📱 Designed a responsive admin dashboard (Vue.js + Tailwind CSS) for room management and user control',
      '📲 Integrated RFID authentication and mobile QR pass capabilities for flexible access options',
      '🛡️ Implemented token-based access using JWT and AES encryption for hardware-server communication',
      '📈 System supports audit trails, guest check-in history, and live activity heatmaps for security analysis'
    ],
    technologies: [
      'ESP32', 'Spring Boot', 'WebSockets', 'Redis', 'MySQL',
      'Vue.js', 'Tailwind CSS', 'JWT', 'AES Encryption'
    ],
    liveLink: '#'
  }
,
  {
    title: 'Student Portal',
    shortDescription: 'Centralized platform for registered students to manage academic and personal records',
    description: 'A secure and user-centric student portal that enables enrolled students to manage their profiles, access academic transcripts, view course materials, register for modules, and receive institutional announcements in real time. Designed with a mobile-first responsive UI and role-based access controls for students, lecturers, and administrators.',
    image: studentpotImg,
    highlights: [
      '📄 Module registration with credit validation and semester checks',
      '📥 Real-time transcript view and downloadable academic documents (DomPDF)',
      '📢 Announcements and notifications delivered via Pusher & in-app feed',
      '🧩 Fully responsive SPA using React + Tailwind CSS',
      '🔐 Role-based dashboards with scoped data access for students and faculty',
      '📊 GPA calculator and progress tracking for degree audits'
    ],
    technologies: ['Laravel', 'React', 'Tailwind CSS', 'Pusher', 'DomPDF', 'MySQL', 'Redis'],
    liveLink: 'https://portal.rcu.ac.zw:8446/login'
  },
  {
    title: 'Online Application System',
    shortDescription: 'Streamlined application process for prospective students with real-time status tracking',
    description: 'A robust online application platform designed for prospective students to submit multi-step applications, upload documents, receive decision updates, and get notifications on application progress. Integrates automated email workflows and admin dashboards for application review and filtering.',
    image: onlineImg,
    highlights: [
      '📂 Multi-step application wizard with autosave and validation using Vue 3 + VeeValidate',
      '🗂️ Secure file uploads with AWS S3 integration and ClamAV virus scanning',
      '📧 Email notifications triggered via Laravel Queues and Mailables',
      '🕵️‍♂️ Application tracking and status updates (e.g., Under Review, Accepted, Rejected)',
      '📱 Fully optimized for mobile devices and low-bandwidth networks',
      '📊 Admin backend with filtering, search, and export tools for reviewing applications'
    ],
    technologies: ['Laravel', 'React', 'AWS S3', 'VeeValidate', 'Redis Queues', 'Laravel Mail', 'Responsive Design'],
    liveLink: 'https://portal.rcu.ac.zw:8450/login'
  }


];