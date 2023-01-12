import "./App.css"; // Se importa el archivo de estilos App.css
import testimonios from "./components/testimonios"; // Se importa el archivo testimonios.js que contiene un arreglo de objetos con información de testimonios
import Testimonio from "./components/Testimonio"; // Se importa el componente Testimonio.js

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      {/* Se utiliza el método map() para recorrer el arreglo de testimonios
          y generar un componente Testimonio para cada elemento del arreglo */}
      {testimonios.map((testimonio) => (
        <Testimonio
          key={testimonio.nombre} // Se utiliza la propiedad key para ayudar a React a identificar de forma unica cada componente generado
          nombre={testimonio.nombre} // Se pasa como propiedad nombre el valor de la propiedad nombre del objeto testimonio
          pais={testimonio.pais} // Se pasa como propiedad pais el valor de la propiedad pais del objeto testimonio
          imagen={testimonio.imagen} // Se pasa como propiedad imagen el valor de la propiedad imagen del objeto testimonio
          cargo={testimonio.cargo} // Se pasa como propiedad cargo el valor de la propiedad cargo del objeto testimonio
          empresa={testimonio.empresa} // Se pasa como propiedad empresa el valor de la propiedad empresa del objeto testimonio
          testimonio={testimonio.testimonio} // Se pasa como propiedad testimonio el valor de la propiedad testimonio del objeto testimonio
          spanShawn={testimonio.spanShawn} // Se pasa como propiedad spanShawn el valor de la propiedad spanShawn del objeto testimonio
          alt={testimonio.alt} // Se pasa como propiedad alt el valor de la propiedad alt del objeto testimonio
        />
      ))}
      {/* <Testimonio
        nombre="Shawn Wang"
        pais="Singapur"
        imagen="shawn"
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software."
        spanShawn=" freeCodeCamp cambió mi vida."
        alt="Foto de Shawn Wang"
      />
      <Testimonio
        nombre="Sarah Chima"
        pais="Nigeria"
        imagen="sarah"
        cargo="Ingeniera de Software"
        empresa="ChatDesk"
        testimonio=" como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        spanSarah="freeCodeCamp fue la puerta de entrada a mi carrera "
        alt="Foto de Sarah Chima"
      />

      <Testimonio
        nombre="Emma Bostian"
        pais="Suecia"
        imagen="emma"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en"
        spanEmma=" freeCodeCamp me dio las habilidades"
        testimonioContinue=" y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        alt="Foto de Emma Bostian"
      /> */}
    </div>
  );
}

export default App;
