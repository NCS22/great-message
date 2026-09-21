import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor del buzón anónimo funcionando 🚀')
})

interface MessagePayload {
  content: string
}

app.post('/api/messages', (req: Request<{}, {}, MessagePayload>, res: Response) => {
    const { content } = req.body

    if (!content || content.trim() === '') {
        return res.status(400).json({ error: "El mensaje no puede estar vacio."})
    }

    console.log(`Mensaje recibido: ${content}`)
    res.status(200).json({ message: "Mensaje recibido correctamente."})
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})