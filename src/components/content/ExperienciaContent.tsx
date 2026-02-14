import { EditorContent, Keyword, Str, Func, Variable, Comment, Property, Punct, Line, BlankLine, Type, Num } from "../vscode/EditorContent";

interface Trabajo {
  empresa: string;
  rol: string;
  periodo: string;
  tecnologias: string[];
  descripcion: string;
}

const trabajos: Trabajo[] = [
  {
    empresa: "Tech Company",
    rol: "Senior Frontend Developer",
    periodo: "2022 - Presente",
    tecnologias: ["React", "TypeScript", "Next.js", "Tailwind"],
    descripcion: "Lideré el desarrollo del dashboard principal",
  },
  {
    empresa: "Startup Digital",
    rol: "Full Stack Developer",
    periodo: "2020 - 2022",
    tecnologias: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    descripcion: "Desarrollé la plataforma de e-commerce desde cero",
  },
  {
    empresa: "Agencia Web",
    rol: "Frontend Developer",
    periodo: "2018 - 2020",
    tecnologias: ["React", "SASS", "JavaScript", "Firebase"],
    descripcion: "Creé interfaces para +20 clientes",
  },
];

export function ExperienciaContent() {
  return (
    <EditorContent lineCount={50}>
      <Line><Comment>{"// experiencia/trayectoria.ts"}</Comment></Line>
      <BlankLine />
      <Line><Keyword>interface</Keyword> <Type>Trabajo</Type> <Punct>{"{"}</Punct></Line>
      <Line>{"  "}<Property>empresa</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>rol</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>periodo</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>tecnologias</Property><Punct>:</Punct> <Type>string</Type><Punct>[];</Punct></Line>
      <Line><Punct>{"}"}</Punct></Line>
      <BlankLine />
      <Line><Keyword>const</Keyword> <Variable>experiencia</Variable><Punct>:</Punct> <Type>Trabajo</Type><Punct>[]</Punct> <Punct>=</Punct> <Punct>[</Punct></Line>
      {trabajos.map((t, i) => (
        <div key={i}>
          <Line>{"  "}<Punct>{"{"}</Punct></Line>
          <Line>{"    "}<Property>empresa</Property><Punct>:</Punct> <Str>"{t.empresa}"</Str><Punct>,</Punct></Line>
          <Line>{"    "}<Property>rol</Property><Punct>:</Punct> <Str>"{t.rol}"</Str><Punct>,</Punct></Line>
          <Line>{"    "}<Property>periodo</Property><Punct>:</Punct> <Str>"{t.periodo}"</Str><Punct>,</Punct></Line>
          <Line>{"    "}<Property>tecnologias</Property><Punct>:</Punct> <Punct>[</Punct>{t.tecnologias.map((tech, j) => (
            <span key={j}><Str>"{tech}"</Str>{j < t.tecnologias.length - 1 ? <Punct>, </Punct> : null}</span>
          ))}<Punct>]</Punct><Punct>,</Punct></Line>
          <Line>{"    "}<Property>descripcion</Property><Punct>:</Punct> <Str>"{t.descripcion}"</Str></Line>
          <Line>{"  "}<Punct>{"}"}</Punct>{i < trabajos.length - 1 ? <Punct>,</Punct> : null}</Line>
        </div>
      ))}
      <Line><Punct>];</Punct></Line>
      <BlankLine />
      <Line><Keyword>export</Keyword> <Keyword>default</Keyword> <Variable>experiencia</Variable><Punct>;</Punct></Line>
    </EditorContent>
  );
}
