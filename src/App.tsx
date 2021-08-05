import React, { useState, useRef, useEffect} from 'react';
import { StoryContainer, Wrapper } from './AppStyles';
import Story from './components/Story';
import Lake from './img/lake.jpg'
import Waterfall from './img/waterfall.jpg'
import Scenery from './img/scenery.jpg'
import Cheetah from './img/cheetah.jpg'
import Owl from './img/owl.jpg'
import Panda from './img/panda.jpg'
import Person1 from './img/person1.jpg'
import Person2 from './img/person2.jpg'
import City1 from './img/city1.jpg'
import City2 from './img/city2.jpg'
import City3 from './img/city3.jpg'
import Tree1 from './img/tree1.png'
import Tree2 from './img/tree2.jpg'
import Tree3 from './img/tree3.jpg'
import Food1 from './img/food1.jpg'
import Food2 from './img/food2.jpg'
import Earth from './img/earth.jpg'

const App: React.FC = () => {
  const [stories, setStories] = useState([
    {
      lake: Lake,
      scenery: Scenery,
      waterfall: Waterfall
    },
    {
      person1: Person1,
      person2: Person2,
    },
    {
      cheetah: Cheetah,
      owl: Owl,
      panda: Panda
    },
    {
      city1: City1,
      city2: City2,
      city3: City3,
    },
    {
      tree1: Tree1,
      tree2: Tree2,
      tree3: Tree3,
    },
  ])
  const [prime, setPrime] = useState<number>(2)
  const [primeCoords, setPrimeCoords] = useState<number>(0)
  const [pauseStories, setPauseStories] = useState(false)

  const s = useRef<HTMLDivElement>(null)

  useEffect(() => {
    s.current!.style.transitionProperty = 'all'
    s.current!.style.transitionDuration = '.4s'
    s.current!.style.left = JSON.stringify(primeCoords)

  },[])

  /**
   * nastavenie hlavneho obrazka 
   */
  const handleToPrime = (n: number) : void => {
    let index = prime - n
    if(index > 0) {

     s.current!.style.left = JSON.stringify(parseInt(s.current!.style.left) + index * 14.4) + 'vw'
    } else {
     s.current!.style.left = JSON.stringify(parseInt(s.current!.style.left) + (index * 14.4)) + 'vw'
    }
    setPrime(n)
  }
  
  const handleGoPrev = (): void => {
    
    let currentPos: number | string = s.current!.style.left
    if(s.current!.style.left === '') {
      currentPos = '0rem'
    } 
    s.current!.style.left = parseInt(currentPos) + 14.4 + 'vw'
    currentPos = parseInt(currentPos) + 14.4 + 'vw'
    setPrime(prev => { return prev - 1 })
  }
  
  const handleGoNext = (): void => {
    let currentPos: number | string = s.current!.style.left
    if(s.current!.style.left === '') {
      currentPos = '0rem'
    } 

    s.current!.style.left = parseInt(currentPos) - 14.4 + 'vw'
    currentPos = parseInt(currentPos) - 14.4 + 'vw'
    setPrime(prev => { return prev + 1 })
  }

  
  return (
    <Wrapper ref={s}>
       <StoryContainer>
         {
           stories && stories.map((s, i: number) => 
              <Story paused={pauseStories} 
                      pause={() => setPauseStories(!pauseStories)} 
                      goPrev={() => handleGoPrev()} 
                      goNext={() => handleGoNext()} 
                      primePosition={prime === i } 
                      key={i} id={i} 
                      toPrime={(n: number) => handleToPrime(n)} 
                      setCoords={(coords) => setPrimeCoords(coords)}
                      story={s}
              />
            )
         }
       </StoryContainer>
    </Wrapper>
  );
}

export default App;
