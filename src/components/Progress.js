function Progress({index, points, numQuestion, maxPossiblePoints, answer}) {
    return (
        <header className="progress">
            <progress max={numQuestion} value={index + Number(answer !== null)}></progress>
            <p>Questions <strong>{index + 1}</strong> / {numQuestion}</p>
            <p><strong>{points}</strong> / {maxPossiblePoints}</p>

        </header>
    )
}

export default Progress;