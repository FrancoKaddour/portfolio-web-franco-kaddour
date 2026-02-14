import { EditorContent, Keyword, Str, Func, Variable, Comment, Property, Punct, Line, BlankLine, Type, Num } from "../vscode/EditorContent";

const proyectos = [
  {
    nombre: "E-Commerce Platform",
    descripcion: "Tienda online con carrito, pagos y panel admin",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    url: "github.com/usuario/ecommerce",
    estado: "Producción ✅",
  },
  {
    nombre: "Task Manager Pro",
    descripcion: "App de gestión de tareas con tiempo real",
    tech: ["Next.js", "Supabase", "Tailwind"],
    url: "github.com/usuario/taskmanager",
    estado: "En desarrollo 🚧",
  },
  {
    nombre: "Weather Dashboard",
    descripcion: "Dashboard meteorológico con gráficos interactivos",
    tech: ["Vue.js", "D3.js", "OpenWeather API"],
    url: "github.com/usuario/weather",
    estado: "Producción ✅",
  },
  {
    nombre: "Portfolio VS Code",
    descripcion: "Este mismo portfolio que estás viendo ahora",
    tech: ["React", "TypeScript", "Tailwind"],
    url: "github.com/usuario/portfolio",
    estado: "Producción ✅",
  },
];

export function ProyectosContent() {
  return (
    <EditorContent lineCount={55}>
      <Line><Comment>{"// proyectos/mis-proyectos.tsx"}</Comment></Line>
      <BlankLine />
      <Line><Keyword>const</Keyword> <Variable>proyectos</Variable> <Punct>=</Punct> <Punct>[</Punct></Line>
      {proyectos.map((p, i) => (
        <div key={i}>
          <Line>{"  "}<Punct>{"{"}</Punct></Line>
          <Line>{"    "}<Property>nombre</Property><Punct>:</Punct> <Str>"{p.nombre}"</Str><Punct>,</Punct></Line>
          <Line>{"    "}<Property>descripcion</Property><Punct>:</Punct> <Str>"{p.descripcion}"</Str><Punct>,</Punct></Line>
          <Line>{"    "}<Property>tech</Property><Punct>:</Punct> <Punct>[</Punct>{p.tech.map((t, j) => (
            <span key={j}><Str>"{t}"</Str>{j < p.tech.length - 1 ? <Punct>, </Punct> : null}</span>
          ))}<Punct>]</Punct><Punct>,</Punct></Line>
          <Line>{"    "}<Property>url</Property><Punct>:</Punct> <Str>"{p.url}"</Str><Punct>,</Punct></Line>
          <Line>{"    "}<Property>estado</Property><Punct>:</Punct> <Str>"{p.estado}"</Str></Line>
          <Line>{"  "}<Punct>{"}"}</Punct>{i < proyectos.length - 1 ? <Punct>,</Punct> : null}</Line>
        </div>
      ))}
      <Line><Punct>];</Punct></Line>
      <BlankLine />
      <Line><Comment>{"// Cada proyecto es una historia de aprendizaje 🚀"}</Comment></Line>
      <Line><Keyword>export</Keyword> <Keyword>default</Keyword> <Variable>proyectos</Variable><Punct>;</Punct></Line>
    </EditorContent>
  );
}
