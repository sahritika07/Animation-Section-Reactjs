import { useState } from 'react';
import {
  CodeBracketIcon,
  ServerStackIcon,
  CloudIcon,
  UserGroupIcon,
  PaintBrushIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/solid';
import Marquee from 'react-fast-marquee';

const teamData = [
  {
    title: 'Frontend Developer',
    icon: <CodeBracketIcon className="h-12 w-12" />,
    phone: '+1 (555) 345-6789',
    description: 'Build responsive and interactive interfaces',
  },
  {
    title: 'Backend Developer',
    icon: <ServerStackIcon className="h-12 w-12" />,
    phone: '+1 (555) 123-4567',
    description: 'Manage databases, APIs, and server logic',
  },
  {
    title: 'DevOps Engineer',
    icon: <CloudIcon className="h-12 w-12" />,
    phone: '+1 (555) 987-6543',
    description: 'Ensure CI/CD, deployment, and infrastructure',
  },
  {
    title: 'Team Leader',
    icon: <UserGroupIcon className="h-12 w-12" />,
    phone: '+1 (555) 222-3333',
    description: 'Lead and coordinate the entire team',
  },
  {
    title: 'UI/UX Designer',
    icon: <PaintBrushIcon className="h-12 w-12" />,
    phone: '+1 (555) 777-8888',
    description: 'Design visually appealing and user-friendly layouts',
  },
  {
    title: 'Product Manager',
    icon: <BriefcaseIcon className="h-12 w-12" />,
    phone: '+1 (555) 666-5555',
    description: 'Oversee product vision, planning, and delivery',
  },
];

export default function TeamCard() {
  const [selectedMember, setSelectedMember] = useState(teamData[0]);

  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] relative overflow-hidden">
      {/* Purple shining background */}
      <div className="absolute inset-0 bg-[radial-gradient(#A78BFA_5%,transparent_80%)] opacity-20 animate-pulse z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-primary mb-10 underline decoration-primary/70">Connect with your team</h1>

        {/* Scrolling Cards Section */}
        <div className="w-full bg-[#1E293B]/30 py-6">
          <Marquee gradient={false} speed={40} pauseOnHover className="gap-6">
            {teamData.concat(teamData).map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(member)}
                className="relative min-w-[300px] h-[200px] bg-[#1E293B] rounded-xl border border-primary/30 overflow-hidden cursor-pointer mx-3 group flex flex-col items-center justify-center transition-all duration-300"
              >
                {/* Sliding Transparent Overlay */}
                <div className="absolute inset-0 bg-[#A78BFA]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 rounded-xl"></div>

                {/* Glowy Border on Hover (Top + Bottom + Left + Right) */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#A78BFA] group-hover:shadow-[0_0_20px_5px_#A78BFA,inset_0_0_10px_#A78BFA] pointer-events-none transition-all duration-300 z-20" />

                {/* Content */}
                <div className="z-30 text-primary mb-2">{member.icon}</div>
                <h2 className="z-30 text-xl font-semibold">{member.title}</h2>
              </div>

            ))}
          </Marquee>
        </div>

        {/* Calling Section */}
        <div className="bg-[#1E293B] mt-10 p-10  rounded-2xl border border-primary/30 text-center w-[70%] max-w-3xl shadow-[0_0_20px_5px_#A78BFA]">
          <h2 className="text-2xl font-bold text-primary mb-4">Connect with {selectedMember.title}</h2>
          <div className="flex items-center justify-center gap-3 text-lg font-semibold mb-2">
            {/* Glowing telephone icon */}
            <div className="w-10 h-10 rounded-full bg-[#A78BFA]/20 flex items-center justify-center animate-glow-ring shadow-[0_0_10px_4px_#A78BFA]">
              <span className="text-primary text-xl">📞</span>
            </div>
            <span>{selectedMember.phone}</span>
          </div>
          <p className="text-base text-gray-300 mb-6">{selectedMember.description}</p>
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">Get in touch</button>
        </div>
      </div>
    </div>
  );
}
