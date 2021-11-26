import React from 'react';
//types
import {AnswerObject} from '../App';
//styles
import {ButtonWrapper,Wrapper} from './QuestionCard.styles';
type Props = {
    question:string;
    answers:string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer:AnswerObject | undefined;
    questionNr: number;
    totalQuestions:number;
}

const QuestionCard:React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions})=>{
   return ( 
   <React.Fragment>
       <Wrapper>
        <p className="number">
            Question:{questionNr}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html:question}}></p>
        <div>
            {answers.map((answer)=>{
                return (
                    <ButtonWrapper 
                    userClicked={userAnswer?.answer === answer}
                    correct={userAnswer?.correctAnswer === answer}
                     key={answer}>
                        <button disabled={userAnswer?true:false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html:answer}}></span>
                        </button>
                    </ButtonWrapper>
                )
            })}
        </div>
        </Wrapper>
    </React.Fragment>
   )
}
export default QuestionCard;