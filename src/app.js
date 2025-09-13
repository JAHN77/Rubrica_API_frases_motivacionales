const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.json());


// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "..","public")));

let motivational_phrases = [
    {id:1, phrase:"La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento."},
    {id:2, phrase:"El éxito no se mide por lo que logras, sino por los obstáculos que superas."},
    {id:3, phrase:"Nuestra mayor gloria no está en nunca caer, sino en levantarnos cada vez que caemos."},
    {id:4, phrase:"La esperanza es lo único más fuerte que el miedo."},
    {id:5, phrase:"No importa lo duro que golpees, sino lo duro que puedes ser golpeado y seguir avanzando."},
    {id:6, phrase:"Un héroe puede ser cualquiera, incluso un hombre que hace algo tan simple y reconfortante como ponerle un abrigo a un niño en los hombros para hacerle saber que el mundo no ha terminado."},
    {id:7, phrase:"No dejes que nadie te diga que no puedes hacer algo. Si tienes un sueño, protégelo. Si quieres algo, ve por ello. Punto."},
    {id:8, phrase:"Las cicatrices nos recuerdan que el pasado fue real. Pero no significan que el futuro deba ser igual."},
    {id:9, phrase:"Un día despertarás y descubrirás que no tienes más tiempo para hacer lo que soñabas. El momento es ahora."},
    {id:10, phrase:"Lo único imposible es aquello que no intentas."}
];


// Rutas API

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "public", "index.html"));
});


app.get("/random/quotes",( req, res) => {
    
    res.json(motivational_phrases);
});

app.get("/random/quotes/random",( req, res) => {
    
    random_prhase = motivational_phrases[Math.random() * motivational_phrases.length | 0]
    res.json(random_prhase);
});


app.post("/random/quotes", (req, res) => {
    const { phrase } = req.body;

    if (!phrase) {
        return res.status(400).json({ error: "El campo 'phrase' es obligatorio" });
    }

    let newMotivationalPhrase = {
        id: motivational_phrases.length + 1,
        phrase: phrase
    };

    motivational_phrases.push(newMotivationalPhrase);

    res.status(201).json({
        message: "Frase creada exitosamente!",
        data: newMotivationalPhrase
    });
});

app.delete("/random/quotes/:id", (req, res) => {
    const { id } = req.params;
    const index = motivational_phrases.findIndex(phrase => phrase.id === parseInt(id));

    if (index === -1) {

        return res
        .status(404).json({ error: "Frase no encontrada" });

    } else {

        motivational_phrases.splice(index, 1);
        res.json({ message: "Frase eliminada exitosamente" });
    }
});


// Manejo de rutas no encontradas 
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => {

  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
