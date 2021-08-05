import React, { useEffect, useRef, useState } from 'react'
import { StoryContainer, Btn, Wrapper, IntervalContainer, PauseBtn } from './StoryStyles'
import Interval from './Interval'

interface IProps {
    primePosition: boolean,
    toPrime: (n: number) => void,
    id: number,
    paused: boolean,
    pause: () => void,
    goPrev: () => void,
    goNext: () => void,
    setCoords: (coords: number) => void,
    story: Object
}


const Story: React.FC<IProps> = (props) => {
    const wrapper = useRef<HTMLDivElement>(null)

    /**
     * State
     */
    const [activeInterval, setActiveInterval] = useState<number>(0)
    const [stories, setStories] = useState<any>()
    const [activeStory, setActiveStory] = useState<string>()

    useEffect(() => {
        if(props.primePosition) {
            props.setCoords(wrapper.current!.getBoundingClientRect().left)
        }
    },[])
    useEffect(() => {
        if(props.story) {
            const array = Object.values(props.story)
            setStories(array)
                setActiveStory(array[0])
        }
    }, [props.story])

    useEffect(() => {
        if(stories) {
            setActiveStory(stories[activeInterval])
        }
    },[activeInterval])

    /**
     *  ked skonci interval storky automaticky
     */
    const handleDone = (index: number) : void => {
        if(stories.length - 1> index ) {
            setActiveInterval(index + 1)
        } else { 
            props.goNext()
        }
    }

    /**
     * dalsi interval alebo storka ( po kliknuti na next)
     */
    const handleNextIntervalOrStory = () => {
        if(activeInterval < stories.length - 1) {
            setActiveInterval(activeInterval + 1)
        } else {
            props.goNext()
        }
    }

    /**
     * predchadzajuci interval alebo storka
     */
    const handlePrevIntervalOrStory = () => {
        if(activeInterval === 0) {
            props.goPrev()
        } else {
            setActiveInterval(prev => { return prev - 1})
        }
    }
    let pauseBtn = (
    <svg  x="0px" y="0px"
            width="20" height="20" viewBox="0 0 45.975 45.975" fill="lightgray">
        <g>
            <g>
                <path d="M13.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.763,2.238,5,5,5s5-2.238,5-5V5C18.987,2.238,16.75,0,13.987,0z"/>
                <path d="M31.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.762,2.238,5,5,5s5-2.238,5-5V5C36.987,2.239,34.749,0,31.987,0z"/>
            </g>
        </g>
    </svg>
    )

    let playBtn = (
        <svg version="1.1" id="Layer_1" width="20" height="20"
                viewBox="0 0 494.148 494.148" fill="lightgray" >
            <g>
                <g>
                    <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124
                        c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884
                        C432.632,229.572,422.964,213.288,405.284,201.188z"/>
                </g>
            </g>
        </svg>

    )


    let next = (
        <svg 
	        viewBox="0 0 55.752 55.752" width="20" height="20" fill="lightgray">
            <g>
                <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001
                    c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58
                    s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912
                    C44.605,26.413,44.086,24.993,43.006,23.916z"/>
            </g>
            </svg>

    )

    let prev = (
        <svg
            viewBox="0 0 492 492" width="20" height="20" fill="lightgray">
        <g>
            <g>
                <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
                    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
                    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
                    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
            </g>
        </g>
        </svg>

    )
    return (
        <Wrapper ref={wrapper}>
            <StoryContainer prime={props.primePosition} onClick={() => props.toPrime(props.id)}>
                <img src={activeStory} style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', borderRadius: '.5rem'}} />
            {
                props.primePosition && (
                    <IntervalContainer>
                        {
                           stories && stories.map((s: string, index: number) => (
                                <Interval key={index} 
                                        index={index} 
                                        active={activeInterval === index} 
                                        done={(index: number) => handleDone(index)} 
                                        completed={activeInterval > index}
                                        completedPrevious={activeInterval < index}
                                        paused={props.paused}
                                        activeIndex={activeInterval}
                                    />
                            ))
                        }
                    </IntervalContainer>
                )
            }
            { props.primePosition && <PauseBtn onClick={() => props.pause()}>
                { props.paused ? 
                playBtn : 
                pauseBtn 
                
                }</PauseBtn> }
            </StoryContainer>
            {
                props.primePosition && <Btn className="previous" onClick={handlePrevIntervalOrStory}>{ prev }</Btn>
            }
            {
                props.primePosition && <Btn className="next" onClick={handleNextIntervalOrStory}>{ next }</Btn>
            }
        </Wrapper>

    )
}

export default Story
