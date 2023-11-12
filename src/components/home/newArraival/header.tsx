'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';

type SelectType = 'All' | 'Bag' | 'Cardigan' | 'Dress' | 'Coat';

const topicList: SelectType[] = ['All', 'Bag', 'Cardigan', 'Dress', 'Coat'];

export function ArrivalHeaderComponent() {
  const searchParms = useSearchParams()
  const controls = useAnimation();
  const [topic, setTopic] = useState<SelectType>('All');

  const handleTopicChange = (newTopic: SelectType) => {
    setTopic(newTopic);
    controls.start({ x: topicList.indexOf(newTopic) * 75 });
  };



  return (
    <div>
      <h2 className="h-[3.1rem] text-[1.1rem] w-full text-center mt-[2rem] leading-[2.5rem] tracking-[0.25rem] text-custom-gray-reg ">
        NEW ARRIVAL
      </h2>
      <div className="mt-[2rem] flex justify-center items-center gap-x-[1.6rem] relative w-fit mx-auto ">
        {topicList.map((item) => (
          <p
            className={`${item === topic ? 'text-custom-orange' : "text-custom-gray-reg"} hover:cursor-pointer duration-700 w-[3.125rem] flex justify-center items-center`}
            key={item}
            onClick={() => handleTopicChange(item)}
          >    
            {item}
          </p>
        ))}
        <motion.div
          className="bg-custom-orange h-[0.5rem] w-[0.5rem] rounded-full absolute top-6 left-[1.363rem]"
          animate={controls}
        />
      </div>
    </div>
  );
}