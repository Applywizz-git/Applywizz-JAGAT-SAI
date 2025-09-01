// Portfolio Data - All content sourced from resume only

export const personalInfo = {
  name: "Bhogapathi Jagat Sai",
  location: "Memphis, TN",
  phone: "+1(678) 779-2047",
  email: "jagatbhogapathi@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhogapathi-jagat-sai/",
  title: "DevOps Engineer",
  subtitle: "Cloud Infrastructure & Automation Specialist"
};

export const heroKeywords = [
  "React",
  "Azure",
  "AWS", 
  "Kubernetes",
  "Terraform",
  "DevOps",
  "Cloud"
];

export const aboutStats = [
  { label: "Projects", value: 10 },
  { label: "Years Experience", value: 2 },
  { label: "Cloud Platforms", value: 3 },
  { label: "Certifications", value: 6 }
];

export const experience = [
  {
    id: 1,
    company: "CloudEnabled Pte Ltd",
    role: "Cloud & DevOps Intern",
    duration: "Mar 2022 - Jul 2022",
    location: "Remote",
    achievements: [
      "Streamlined infrastructure provisioning on Azure by building reusable Terraform and Ansible modules, which cut setup times by 40% and improved developer onboarding efficiency.",
      "Increased deployment reliability by designing CI/CD pipelines in Jenkins and Azure DevOps, lowering release failures by 30% and accelerating feature rollouts to production.",
      "Improved platform resilience by tuning Azure Monitor and AWS CloudWatch alerts, enabling proactive scaling policies that trimmed infrastructure costs by 20% without service disruption.",
      "Delivered containerized solutions on Kubernetes, enhancing application portability and reducing release cycle time by 35% through rolling upgrades and automated recovery.",
      "Boosted deployment confidence by embedding automated testing frameworks into the pipeline, which reduced manual QA checks and shortened release validation cycles by 25%.",
      "Elevated security standards by enforcing role-based access controls (RBAC) and IAM policies, ensuring compliance with enterprise governance and reducing privilege-related risks."
    ],
    technologies: [
      "Azure", "AWS", "Terraform", "Ansible", "Jenkins", "Azure DevOps", 
      "Kubernetes", "Docker", "Azure Monitor", "CloudWatch", "RBAC", "IAM"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Highly Available Azure Web Application",
    description: "Custom HTML web app on Azure App Services with fully automated CI/CD pipelines and Application Insights monitoring.",
    image: "/api/placeholder/400/300",
    technologies: ["Azure App Services", "Azure DevOps", "Application Insights", "CI/CD"],
    highlights: [
      "Automated CI/CD pipelines eliminating downtime",
      "35% faster incident response through Application Insights",
      "99.9% uptime with auto-scaling policies"
    ],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "AWS Two-Tier Architecture",
    description: "VPC-based infrastructure with EC2 web servers and RDS database instances across multiple Availability Zones using Terraform.",
    image: "/api/placeholder/400/300",
    technologies: ["AWS", "Terraform", "EC2", "RDS", "VPC", "Multi-AZ"],
    highlights: [
      "Fault-tolerant multi-AZ deployment",
      "Infrastructure provisioning reduced from hours to minutes",
      "AWS Service Catalog compliance enforcement"
    ],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "CloudFront CDN Optimization",
    description: "Global content delivery network with caching at edge locations and multi-origin configuration for optimal performance.",
    image: "/api/placeholder/400/300",
    technologies: ["Amazon CloudFront", "S3", "EC2", "CDN", "Edge Computing"],
    highlights: [
      "40% latency reduction with global edge locations",
      "Sub-2-second global load times",
      "Multi-origin setup for static and dynamic content"
    ],
    demoUrl: "#",
    codeUrl: "#"
  }
];

export const skills = {
  "Cloud Platforms": [
    { name: "AWS", level: 90, icon: "☁️" },
    { name: "Azure", level: 95, icon: "⚡" },
    { name: "GCP", level: 80, icon: "🌐" }
  ],
  "DevOps & Automation": [
    { name: "Jenkins", level: 90, icon: "🔧" },
    { name: "Azure DevOps", level: 95, icon: "🚀" },
    { name: "GitHub Actions", level: 85, icon: "⚙️" },
    { name: "ArgoCD", level: 80, icon: "🔄" }
  ],
  "Infrastructure": [
    { name: "Terraform", level: 90, icon: "🏗️" },
    { name: "Ansible", level: 85, icon: "📋" },
    { name: "CloudFormation", level: 80, icon: "☁️" },
    { name: "Kubernetes", level: 88, icon: "🎯" }
  ],
  "Monitoring": [
    { name: "Prometheus", level: 85, icon: "📊" },
    { name: "Grafana", level: 85, icon: "📈" },
    { name: "CloudWatch", level: 90, icon: "👁️" },
    { name: "Azure Monitor", level: 90, icon: "🔍" }
  ]
};

export const certifications = [
  {
    id: 1,
    name: "Azure Developer",
    code: "AZ-204",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "",
    verifyUrl: "#"
  },
  {
    id: 2,
    name: "Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "",
    verifyUrl: "#"
  },
  {
    id: 3,
    name: "Google Cloud DevOps Engineer Professional",
    code: "",
    issuer: "Google Cloud (Coursera)",
    date: "2023",
    credentialId: "",
    verifyUrl: "#"
  },
  {
    id: 4,
    name: "AWS Cloud Practitioner Essentials",
    code: "",
    issuer: "AWS (Coursera)",
    date: "2023",
    credentialId: "",
    verifyUrl: "#"
  },
  {
    id: 5,
    name: "PrivacyOps Certification",
    code: "",
    issuer: "Industry Standard",
    date: "2023",
    credentialId: "",
    verifyUrl: "#"
  },
  {
    id: 6,
    name: "AI Security Certification",
    code: "",
    issuer: "Industry Standard",
    date: "2023",
    credentialId: "",
    verifyUrl: "#"
  }
];

export const education = [
  {
    id: 1,
    degree: "Masters in Information Technology",
    school: "University of Memphis",
    location: "Memphis, TN",
    duration: "Aug 2023 - May 2025",
    status: "In Progress"
  },
  {
    id: 2,
    degree: "Bachelor of Science, Cloud Computing and Big Data",
    school: "REVA University",
    location: "Bangalore, India",
    duration: "Jun 2019 - May 2023",
    status: "Completed"
  }
];

export const aboutText = `
Motivated DevOps Engineer with hands-on experience in Azure, AWS, and GCP, specializing in CI/CD pipelines, Infrastructure as Code (Terraform, Ansible, CloudFormation), and Kubernetes orchestration. Skilled in deploying and optimizing cloud-native applications, automating releases with Jenkins, Azure DevOps, GitHub Actions, and enhancing reliability through monitoring (Prometheus, Grafana, CloudWatch, Azure Monitor).

Recognized for delivering scalable, cost-efficient, and resilient cloud environments that enable faster deployments, improved uptime, and enterprise-grade system reliability. Adept at implementing DevSecOps practices, IAM, RBAC, and secrets management to strengthen compliance and security.
`.trim();