import TypewriterComponent from "typewriter-effect"

function Typewriter() {
    return (
        <>
            <div className=" mb-6 text-center">
                <TypewriterComponent options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }} />
            </div>
        </>
    )
}

export default Typewriter