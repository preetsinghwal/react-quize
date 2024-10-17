import Option from './Option'

function Question({question, answer, dispatch}) {
    return (
        <div>
            <h4>{question.question}</h4>
            <Option question={question} answer={answer} dispatch={dispatch}></Option>
        </div>
    )
}

export default Question;