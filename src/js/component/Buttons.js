let controls = ({ pause, takeLap, restart, go }) => (
    <div>
        <button type="button btn btn-warning " onClick={pause}>
            {go ? 'pause' : 'start'}

        </button>
        <button type="button" onClick={takeLap}>
            takeLap
        </button>
        <button type="button btn btn-success" onClick={restart}>
            restart
        </button>

    </div>
);

export default controls 