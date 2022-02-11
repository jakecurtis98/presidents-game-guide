import './styles/App.scss';
import React, {useEffect, useMemo, useState} from "react";

/* Import other components needed */
import VisualArea from "./parts/VisualArea";
import ExplanationArea from "./parts/ExplanationArea";
import SpeechBubble from "./parts/SpeechBubble";
import Buttons from "./parts/Buttons";
import Person from "./parts/Person";
import steps from "./steps/Steps";

/* Main Function for the App - everything is run from here */
function App() {
    // Set const to tell which direction animations should play in
    const [animate, setAnimate] = useState('in');
    // Create memo to store array of all steps to pull from
    const components = useMemo(() => steps, []);

    // Define State for current step
    const [step, setStep] = useState(0);
    // Define State for current step object
    const [stepObject, setStepObject] = useState(components[step]);
    // Define States that tell if there are pages before / after current one
    const [hasNextStep, setHasNextStep] = useState(typeof components[step] !== "undefined" ? 1 : 0);
    const [hasPrevStep, setHasPrevStep] = useState(typeof components[step-1] !== "undefined" ? 1 : 0);
    // Define States to allow child components to trigger next page once animating is done
    const [doNextStep, setDoNextStep] = useState(0);
    // Define States for direction
    const [direction, setDirection] = useState('');

    // When step changes, set step object to current one
    useEffect(() => {
        setStepObject(() => components[step]);
    }, [step, components])

    // function to go to next step
    const nextStep = () => {
        // if there is another step
        if(hasNextStep) {
            setStep((prevStep) => {
                // increase current step by one
                const nextStep = ++prevStep;
                // update if there are pages either side
                setHasNextStep(() => (typeof components[step] !== "undefined" ? 1 : 0));
                setHasPrevStep(() => (typeof components[step-1] !== "undefined" ? 1 : 0));
                return nextStep;
            });
        } else {
            console.log("No More steps");
        }
    };

    // function to go to previous step
    const prevStep = () => {
        // if there is a previous step
        if(hasPrevStep) {
            setStep((prevStep) => {
                // decrease current step by one
                const nextStep = --prevStep;
                // update if there are pages either side
                setHasNextStep(() => (typeof components[nextStep] !== "undefined" ? 1 : 0));
                setHasPrevStep(() => (typeof components[nextStep-1] !== "undefined" ? 1 : 0));
                return nextStep;
            });
        } else {
            console.log("No More steps");
        }
    };

    // placeholder function for the explain differently button
    const handleDifClick = () => {
        //To Add
    }

    // function to handle clicking next step button
    const handleNextStep = async () => {
        if(step === 0) {
            // if intro page - go to next page straight away
            setAnimate('in');
            nextStep();
        } else {
            // else set direction and wait for child to finish animating
            setDirection('next');
            setAnimate('out');
            setDoNextStep(() => 1);
        }
    }

    // Restart on end
    const handleRestart = async () => {
        setStep(0);
    }

    // function to handle clicking previous step button
    const handlePrevStep = async () => {
        // set direction and wait for child to finish animating
        setDirection('prev');
        await setAnimate('out');
        setDoNextStep(() => 1);
    }

    // once animating done, change step
    useEffect(() => {
        if(doNextStep === 2) {
            setAnimate('in');
            if(direction === 'next') {
                nextStep();
            } else {
                prevStep();
            }
            setDoNextStep(() => 0);
        }
    }, [doNextStep]);

    if(step === 0) {
        // If it's the first step, show the enter screen
        return (
            <div className={"container"}>
                <div className={"holder"}>
                    <div className={"welcomeContainer text-center"}>
                        {stepObject.content}
                        <span className={"btn nextBtn"} onClick={handleNextStep}>Start</span>
                    </div>
                </div>
            </div>
        );
    } else if(step === 29) {
        // If it's the last step, show the last screen
        return (
            <div className={"container"}>
                <div className={"holder"}>
                    <div className={"welcomeContainer text-center"}>
                        {stepObject.content}
                        <span className={"btn nextBtn"} onClick={handleRestart}>Restart</span>
                    </div>
                </div>
            </div>
        );
    } else {
        // else show the object visuals
        return (
            <div className={"container"}>
                <div className={"holder"}>
                    <VisualArea DescriptionText={stepObject.DescriptionText} Visuals={stepObject.Visuals} opacity={1} doNextStep={doNextStep} animate={animate} setDoNextStep={setDoNextStep} step={step} direction={direction} />
                    <div className={"BottomArea"}>
                        <ExplanationArea>
                            <SpeechBubble>
                                {stepObject.SpeechBubble}
                            </SpeechBubble>
                            <Buttons backText={"Back"} handleBackClick={handlePrevStep} difText={"Explain differently..."}
                                     handleDifClick={handleDifClick} nextText={"Got it, next!"}
                                     handleNextClick={handleNextStep}/>
                        </ExplanationArea>
                        <Person/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
