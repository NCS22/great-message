function MessageForm() {
    return (
        <form id="message-form" className="message-form">
            <input 
                type="text" 
                className="message-form-text"
                placeholder="Escribe aquí tus pensamientos...">
            </input>
            <button type="submit" className="message-form-submit">Enviar</button>
        </form>
    )
}

export default MessageForm