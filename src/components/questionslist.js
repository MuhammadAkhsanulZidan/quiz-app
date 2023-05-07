import React from "react";

const questionslist = ({handleAnswer,showAnswers, data:{question, correct_answer, answers}}) => {
    return (
        <>
            <div className="question-text">
                <h1 dangerouslySetInnerHTML={{__html:question}}></h1>
            </div>
            <div className="answers">
                {answers.map((answer,idx)=>{
                    const specificClassName = showAnswers?(
                        answer === correct_answer? "green-btn": "red-btn"
                    ) : "";
                    return(
                        <button className={`answer-btn ${specificClassName}`} 
                        onClick={()=>handleAnswer(answer)}
                        dangerouslySetInnerHTML={{__html:answer}}></button>
                    )
                })}
            </div>
        </>
    )
}

export default questionslist;
