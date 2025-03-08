
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  title: string;
  company: string;
  companyLink?: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Google",
    companyLink: "#",
    location: "San Bruno, CA",
    period: "Aug 2022 - Now",
    achievements: [
      "Built and launched dozens of early features for YouTube Shorts, working fullstack (iOS & Android, C++ server).",
      "Contributed to a multi-quarter migration by designing new hybrid fullscreen mode for the Shorts Player.",
      "Wrote metrics framework in Go to analyze user sessions and present results of a major feature launch to VPs.",
      "Distilled 100+ pages of docs into single team launch checklist, significantly reducing onboarding friction."
    ]
  },
  {
    title: "Head Teaching Assistant & SysAdmin",
    company: "Brown",
    companyLink: "#",
    location: "Providence, RI",
    period: "Spring 2019 - Fall 2019",
    achievements: [
      "Trained and managed a staff of 40 for Computer Systems, a class of 350 students, with a focus in scripting.",
      "Responsible for helping students debug 4hrs/wk, and spent over 30hrs grading over 50 project submissions.",
      "Administered departmental system for Brown CS, managing permissions, accounts, file systems, and networks."
    ]
  },
  {
    title: "Intern",
    company: "Twitter",
    companyLink: "#",
    location: "San Francisco, CA",
    period: "Summers 2018 & 2019",
    achievements: [
      "Led team of 12 in a customer-facing redesign to Twitter Developer Portal, revamping dashboard billing flow.",
      "Held inception meeting with 15 engineers, producing 40 tickets, and then wrote 16 page technical design doc.",
      "Proposed and wrote Python script to modularize hundreds of tests, cutting review times from days to minutes."
    ]
  }
];

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-medium">{experience.title} @ {' '}
            <a 
              href={experience.companyLink} 
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              {experience.company}
            </a>
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
        <div className="flex items-center">
          <MapPin size={16} className="mr-1.5 text-gray-400" />
          {experience.location}
        </div>
        <div className="flex items-center">
          <Calendar size={16} className="mr-1.5 text-gray-400" />
          {experience.period}
        </div>
      </div>

      <ul className="space-y-3">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex">
            <span className="text-orange-500 mr-2">○</span>
            <span className="text-muted-foreground">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-gray-100 to-white">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="mb-3 opacity-90">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                Career Path
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight tracking-tight">
            Experience
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key roles that have shaped my skills and expertise.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
