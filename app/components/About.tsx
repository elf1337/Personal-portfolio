'use client';
import { useState } from 'react';
import DevImg from "./DevImg";
import { User2, MailIcon, PhoneCall, HomeIcon, Calendar, GraduationCap, Briefcase, CircleUserRound } from 'lucide-react';

export const About = () => {
  const [activeTab, setActiveTab] = useState<'personalInfo' | 'qualification' | 'skills'>('personalInfo');

  const handleTabClick = (tab: 'personalInfo' | 'qualification' | 'skills') => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'personalInfo', label: 'Personal Info' },
    { id: 'qualification', label: 'Qualification' },
    { id: 'skills', label: 'Skills' },
  ];

  const PersonalInfo = [
    {
      icon: <User2 color={'#ea580c'} size={20}/>,
      text: 'Akhil S'
    },
    {
      icon: <PhoneCall color={'#ea580c'} size={20}/>,
      text: '8075008287'
    },
    {
      icon: <MailIcon color={'#ea580c'} size={20}/>,
      text: 'akhil.1337s@gmail.com'
    },
    {
      icon: <Calendar color={'#ea580c'} size={20}/>,
      text: 'Born on 6 Dec, 1999'
    },
    {
      icon: <GraduationCap color={'#ea580c'} size={20}/>,
      text: 'On going'
    },
    {
      icon: <HomeIcon color={'#ea580c'} size={20}/>,
      text: 'TVPM, Kerala IN'
    },


  ]


  const tabContent: { [key in 'personalInfo' | 'qualification' | 'skills']: JSX.Element } ={
    personalInfo: (
      <div className='flex flex-col'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Aspiring Front-End Developer</h2>
        <p className='mb-8   text-justify'>Self-taught enthusiast diving into the world of web development while leveraging former experience in Python scripting. 
          Excited to turn ideas into reality through code.</p>
        <div className='flex flex-col items-center justify-center gap-y-4 md:grid md:grid-cols-3 md:gap-y-4'>
          {PersonalInfo.map((info, index) => (
            <div key={index} className='flex gap-x-2 items-center'>
              <div>{info.icon}</div>
              <div>{info.text}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    qualification: (
      <div>
        <p>Updating soon!</p>
      </div>
    ),
    skills: (
      <div>
        <p>Crafting Skill</p>
      </div>
    ),
  };
  

  return (
    <section className="h-[860px] pb-12">
      <div className="container mx-auto">

        <div className='flex gap-x-3 items-center justify-center font-bold text-4xl mt-20 mb-20'>
          <div> <CircleUserRound size={30} color={'#ea580c'} /></div>
          <div> About me</div>
        </div>

        <div className="flex">

          <div className="hidden md:block flex-1 relative">
            <DevImg ContainerStyle="bg-shapelight w-[510px] h-[510px] bg-no-repeat absolute" ImgSrc="/dev-image-2.png" />
          </div>


          <div className="flex-1">
            <div className="flex flex-col items-center justify-center gap-y-2 px-16">
              <div className="inline-flex items-center justify-center py-1.5 px-3 gap-x-8 border border-gray-300 rounded-full">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id as 'personalInfo' | 'qualification' | 'skills')}
                    className={`tab-button ${activeTab === tab.id ? ' bg-orange-600 px-3 py-1.5 rounded-full text-white font-medium text-sm transition-all duration-300' :''}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                {tabContent[activeTab]}
              </div>
            </div>
          </div>



        </div>


      </div>
    </section>
  );
};
