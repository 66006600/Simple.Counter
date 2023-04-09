return (

    <div className="botones">
        <div>
            <button onClick={() => setTimeOn(true)}>Start</button>
            <button onClick={() => setTimeOn(false)}>Stop</button>
            <button onClick={() => setTimeOn(true)}>Resume</button>
            <button onClick={() => setTimeOn(0)}>Reset</button>
        </div>


    </div>
)