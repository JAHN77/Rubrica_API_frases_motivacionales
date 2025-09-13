# Rubrica_API_Frases (💡 API de Frases Motivacionales)

**Descripción**

Este proyecto es una **API de frases motivacionales** construida con **Node.js y Express**.  
Permite obtener frases motivacionales mediante peticiones **GET** y también agregar nuevas frases mediante peticiones **POST**.  

El proyecto está diseñado como una práctica de desarrollo backend, donde se manejan rutas REST y se gestionan respuestas en formato JSON.

---

# 📦 Tecnologías utilizadas

**Backend:** Node.js, Express  
**Cliente de pruebas:** Postman / Thunder Client  

---

## 📂 Estructura del proyecto

```bash
api_frases_motivacionales
├── public
│   ├── index.html
├── src
│   └── app.js
├── package.json
├── package-lock.json
└── README.md
```
## ⚙️ Instalación

1. Clonar el repositorio:
```bash
   git clone https://github.com/JAHN77/Rubrica_API_frases_motivacionales.git
   cd Rubrica_API_frases_motivacionales
```
2. Instalar dependencias:
``` bash
npm install
```

3. Iniciar el servidor:
```bash 
node src/app.js
```

# 🚀 Uso
1. Obtener todas las frases
```bash
GET http://localhost:3001/random/quotes
```
2. Agreagr una nueva frase:
```bash
POST http://localhost:3001/random/quotes
```
* Body:
```bash
{
  "phrase": "El éxito es la suma de pequeños esfuerzos repetidos día tras día."
}
```

* Respuesta:
```bash
"frase creada exitosamente!"
```
3. Eliminar frase por ID:
```bash
DELETE http://localhost:3001/random/quotes/:id
```
* Respuesta:
```bash
"Frase no encontrada" 
O
"Frase eliminada exitosamente"

```



## Author
* **Name:**  Juan Andres Henriquez Novoa
