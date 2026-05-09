'use client';

import { useState } from 'react';

const officers = [
  {
    name: 'Nitin Kulkarni - IAS',
    designation: '(Principal Secretary)',
    quote: 'UPSC Exams and its preparation was always complex and expensive for many aspirants. Now With time online teachings made it simple, however affordability is again a challenge. During our Times of preparation resources started being available on internet however it\'s a huge ocean With many sources available, selecting the right one was tedious task. Now things have changed With time and have simplified the lives of aspirants. Found the solution for all the above stated issues, It\'s UPSC GUIDE who are tremendously doing a great work at a very minimal cost.',
    image: '/nitin kulkarini.jpeg'
  },
  {
    name: 'Ankur Tiwari - IPoS AIR 543',
    designation: '',
    quote: 'Helping many aspirants with quality education and ensured right guidance is reached to students from every corner of the nation is now turned in to reality through digital platforms. Upsc guide are trying their best to help aspirants make their dreams into reality in all the possible ways. Many aspirants give up their dreams so many challenges one being the financial affordability. Upsc guide is helping many aspirants overcome this hurdle and achieve their milestone. Keep going team & good luck to all the students preparing for upsc! All the very best!',
    image: '/ankul.jpeg'
  },
  {
    name: 'Mudit Jain - IRS AIR 173',
    designation: '',
    quote: 'UPSC GUIDE not just caters to CSE syllabus but also provides Aspirants with best interactive sessions with experienced bureaucrats like Kiran Bedi Ma\'am. The best part of it all is that all modules are in online mode, which is the need of the hour. With team comprising of experienced faculty and modules/notes at affordable prices, UPSC GUIDE is here to stay long!',
    image: '/mudit jain.jpg'
  },
  {
    name: 'Saurabh Sabhlok (IFS)',
    designation: '',
    quote: 'As you sow so shall you reap. The amount of hard work any aspirant so are the fruitful results one get. Hard work and success are directly proportional to each other. With fast moving lifestyle to ease the process of learning smart work is required. To implement smart techniques it is always a right practice to look for ready sources and imbibe into your learning process. Many sources are available on internet where they help with Quiz questions and newspaper important articles to be read, like this website called UPSC GUIDE. Aspirants can check this out.',
    image: '/saurabh.jpeg'
  },
  {
    name: 'Swetha Boddhu (IFOS)',
    designation: '',
    quote: 'UPSC Examination being so dynamic these days, hard work with smart work is the need of the hour. This requires the Right strategy and guidance from UPSC Toppers who have sailed in this journey. This is exactly what UPSC Guide is catering to all the aspirants at a very affordable fee. They are not just providing the quality education, they are also providing the mentoring and interactive sessions with many officers who are already in service which makes them unique. UPSC GUIDE currently is playing a role of umbrella where they are trying to provide solution for all the problems an aspirant faces at time of their preparation.',
    image: '/swetha.jpeg'
  },
  {
    name: 'Anupama Singh (IFS)',
    designation: '',
    quote: 'Lack of proper guidance is a crucial obstacle in Civil Services Preparation especially for underprivileged aspirants and for those living in remote/rural area. UPSC Guide with its unique and free programmes for underprivileged and for those staying in remote areas could be an enabler by making valuable guidance available to all. Also for those who can afford they are providing the courses at very minimal and affordable cost.',
    image: '/anupama.jpeg'
  },
  {
    name: 'Dr. Nagarjun Gowda IAS',
    designation: '',
    quote: 'UPSC Preparation has always been that unmovable mountain for many aspirants who are either juggling between college and upsc or working life and upsc. Different category demands different method and approach. With all these differences and challenges it is utmost important for any aspirant to overcome challenges and sustain in this Upsc Journey. This Platform called Upsc Guide with its unique and practical courses is becoming a very effective catalyst for many aspirants healing all their pain areas and helping aspirants to sustain in their preparation.',
    image: '/nagarjun.jpeg'
  },
  {
    name: 'Srushti Deshmukh (IAS)',
    designation: '',
    quote: 'UPSC Preparation requires tremendous Practise and right strategy to be implemented during preparation. With right guidance one can crack UPSC Civil Service Examination from their own city without the need of travelling to Delhi which is one of the biggest myth hailing in the air. UPSC CSE Preparation is achievable with good results now by utilising the online sources to the best way possible. While there are many platforms online came across UPSC GUIDE who prepare students for UPSC CSE with right mentorship.',
    image: '/shruti.jpeg'
  },
  {
    name: 'Kiran Bedi (First woman IPS)',
    designation: '',
    quote: 'Upsc Examination is a no ordinary Examination it takes the whole of you. I want to thank Upsc Guide team and their work for this great initiative. You saw a problem and you started to search for a solution. You as a team came up with this great initiative. I think you are very young as a team just three years old so I begin with congratulating you.Secondly your attitude is brilliant you saw a problem you came up with solution. Attitude of being a solution provider is appreciated. And idea of providing upsc education to students considering the ordability is a great initiative',
    image: '/kiran bedi.jpeg'
  }
];

export function OfficersTestimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(officers.length / itemsPerPage);
  
  const getCurrentOfficers = () => {
    const startIndex = currentPage * itemsPerPage;
    return officers.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white">
      <div className="max-w-5xl mx-auto px-3 md:px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3">
            What officers say about UPSC GUIDE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {getCurrentOfficers().map((officer, index) => (
            <div key={currentPage * itemsPerPage + index} className="rounded-xl p-4 md:p-6 text-center relative" style={{backgroundColor: '#f3efef'}}>
              
              <div className="mb-4 relative">
                {/* Orange accent line - only for name/designation section */}
                <div className="absolute top-0 right-0 w-1 h-full bg-orange-500 rounded-full"></div>
                
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="font-bold text-sm md:text-base text-primary mb-1">
                  {officer.name}
                </h3>
                {officer.designation && (
                  <p className="text-primary font-medium text-xs md:text-sm">
                    {officer.designation}
                  </p>
                )}
              </div>

              <div className="h-32 overflow-y-auto relative" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                {/* Orange accent line - moves with scroll */}
                <div className="absolute top-0 right-0 w-1 h-full bg-orange-500 rounded-full"></div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed pr-3">
                  {officer.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 gap-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}