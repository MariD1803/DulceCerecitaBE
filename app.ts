import express from 'express'

import personaRoutes from './src/routes/persona.routes'
import mensajeRoutes from './src/routes/mensaje.routes'
import ordenRoutes from './src/routes/orden.routes'
import productoRoutes from './src/routes/producto.routes'
import usuarioRoutes from './src/routes/usuario.routes'
import statusRoutes from './src/routes/status.routes'

const app = express()

var allowCrossDomain = function(req, res, next) {
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