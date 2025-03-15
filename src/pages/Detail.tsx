import { ScratchToReveal } from '../components/magicui/scratch-to-reveal'
import HeroVideoDialog from '../components/magicui/hero-video-dialog'
import ScrollTriggered from '../components/ScrollTriggered'
import { ConfettiFireworks } from '../components/FireWorks'
import { MorphingText } from '../components/magicui/morphing-text'
import { TextReveal } from '../components/magicui/text-reveal'
import { ChevronDown } from 'lucide-react'
import { Particles } from '../components/magicui/particles'
import LovingDraw from '../components/lottieFiles/LovingDraw'
import { SparklesText } from '../components/magicui/sparkles-text'
import { SpinningText } from '../components/magicui/spinning-text'
import { useState } from 'react'
const texts = [
    "Khoảnh khắc",
    "của",
    "chúng ta",
  ];

const Detail = () => {
    const [isDisplaySpinner, setisDisplaySpinner] = useState<boolean>(true);
  return (
 <div className="py-16 bg-[#C7D9DD] overflow-x-visible" >
    <Particles
        className="fixed inset-0 z-50"
        quantity={100}
        ease={80}
        color={"blue"}
        refresh
      />
  <div className='flex flex-col items-center space-y-6 md:space-y-10'>
  <MorphingText className='text-[#495F88]' texts={texts} />
    <ConfettiFireworks/>
    <ChevronDown className="w-10 h-10 text-gray-600 animate-bounce-custom" />
  <LovingDraw/>
  </div>

  <TextReveal className='text-center '>
  Chúng ta đã trân trọng nhau, mọi khoảnh khắc đều đáng để nhớ. Love
  </TextReveal>
    <ScrollTriggered/>
      <div className="flex justify-center top-0">
   <HeroVideoDialog
     animationStyle="from-center"
     videoSrc="/assets/huyen-hero.mp4"
     thumbnailSrc="/assets/huyen3.jpg"
     thumbnailAlt="I Love U"
   />
 </div>
 <div className='relative overflow-x-hidden'>
{isDisplaySpinner && <SpinningText className='absolute top-32 right-8 z-50 block sm:hidden'>learn more • earn more • grow more •</SpinningText>}
 <SparklesText className='my-3 mt-5 text-center text-[#495F88]' text="Chà để hiển thị" />;
     <div className="flex items-center justify-center">
     <ScratchToReveal
     onComplete={() => setisDisplaySpinner(false)}
     width={400}
     height={420}
      minScratchPercentage={70}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100 w-auto h-auto"
      gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
    >
      <p className="text-sm leading-8 p-1">Chúng ta chỉ có 1 cuộc đời nếu có thể, đừng lãng phí nhau
</p>
    </ScratchToReveal>
  </div>
 </div>
 
 </div>
  )
}

export default Detail
