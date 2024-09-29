const envelopeStyle = {
    textAlign: "center",
    height: "338px",
    width: "320px",
    background: "url('/images/Envelope.svg')",
}

const textAreaStyle = {
    marginTop: "5px",
    width: "240px",
    height: "170px",
    resize: "none",
    background: "none",
    border: "none",
}

export default function Envelope({form}) {
    return (
        <div
            style={envelopeStyle}

            className="text-sm hover:scale-105 transition duration-300 ease-in-out hover:drop-shadow-xl"
        >
            <textarea
                name="messageText"
                id="messageText"
                form={form}
                style={textAreaStyle}
                placeholder="Declare o seu amor aqui... (Max: 180 caracteres)"
                onFocus={(e) => e.target.style.outline = 'none'}
                maxLength={180}
                required
            ></textarea>
        </div>
    )
}