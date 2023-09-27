import express from 'express'

import personaRoutes from './routes/persona.routes'
import mensajeRoutes from './routes/mensaje.routes'
import ordenRoutes from './routes/orden.routes'
import productoRoutes from './routes/producto.routes'
import usuarioRoutes from './routes/usuario.routes'
import statusRoutes from './routes/status.routes'

const app = express()

var allowCrossDomain = function(req :any, res:any, next:any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(express.json())

app.use(allowCrossDomain);

app.use('/api',personaRoutes)
app.use('/api',mensajeRoutes)
app.use('/api',ordenRoutes)
app.use('/api',productoRoutes)
app.use('/api',usuarioRoutes)
app.use('/api',statusRoutes)

app.listen(3000)
console.log("Server on port", 3000)