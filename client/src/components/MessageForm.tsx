import { useState } from "react"
import type { ChangeEvent } from "react"
import type { SubmitEvent } from "react"

// 1. Define the interface for the form data
interface MessageFormData {
    content: string
}

function MessageForm() {
    // 2. useState<MessageFormData> defines the type of the state variable formData
    const [formData, setFormData] = useState<MessageFormData>({ content: ""})

    // 3. Handle form change of input field
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, content: e.target.value})
    }

    // 4. Handle form submission
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        // 4.1 Send the form data to the server
        fetch("http://localhost:3001/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).catch( error => {
            console.error("Error al enviar el mensaje:", error)
        })

        // 4.1 Reset the form data after submission
        setFormData({ content: ""}) 
        console.log(formData)
    }

    return (
        <form id="message-form" className="message-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="message-form-text"
                placeholder="Escribe aquí tus pensamientos..."
                value={formData.content}
                onChange={handleChange}
            />
            <button type="submit" className="message-form-submit">Enviar</button>
        </form>
    )
}

export default MessageForm