import { EditorContent, Keyword, Str, Func, Variable, Comment, Property, Punct, Line, BlankLine, Type, Num } from "../vscode/EditorContent";

const habilidades = {
  frontend: [
    { nombre: "React / Next.js", nivel: 95 },
    { nombre: "TypeScript", nivel: 90 },
    { nombre: "Tailwind CSS", nivel: 92 },
    { nombre: "Vue.js", nivel: 75 },
    { nombre: "HTML / CSS", nivel: 98 },
  ],
  backend: [
    { nombre: "Node.js", nivel: 85 },
    { nombre: "Python", nivel: 70 },
    { nombre: "PostgreSQL", nivel: 80 },
    { nombre: "MongoDB", nivel: 75 },
  ],
  herramientas: [
    { nombre: "Git / GitHub", nivel: 90 },
    { nombre: "Docker", nivel: 72 },
    { nombre: "Figma", nivel: 80 },
    { nombre: "VS Code", nivel: 99 },
  ],
};

function SkillBar({ nivel }: { nivel: number }) {
  const filled = Math.round(nivel / 5);
  const empty = 20 - filled;
  return (
    <span>
      <Str>"</Str>
      <span className="text-syntax-variable">{"█".repeat(filled)}</span>
      <span className="text-muted-foreground">{"░".repeat(empty)}</span>
      <Str>"</Str>
      <Comment>{` // ${nivel}%`}</Comment>
    </span>
  );
}

export function HabilidadesContent() {
  return (
    <EditorContent lineCount={55}>
      <Line><Comment>{"// habilidades/skills.json"}</Comment></Line>
      <BlankLine />
      <Line><Punct>{"{"}</Punct></Line>
      
      <Line>{"  "}<Property>"frontend"</Property><Punct>:</Punct> <Punct>{"{"}</Punct></Line>
      {habilidades.frontend.map((h, i) => (
        <Line key={i}>{"    "}<Property>"{h.nombre}"</Property><Punct>:</Punct> <SkillBar nivel={h.nivel} /></Line>
      ))}
      <Line>{"  "}<Punct>{"}"}</Punct><Punct>,</Punct></Line>
      <BlankLine />

      <Line>{"  "}<Property>"backend"</Property><Punct>:</Punct> <Punct>{"{"}</Punct></Line>
      {habilidades.backend.map((h, i) => (
        <Line key={i}>{"    "}<Property>"{h.nombre}"</Property><Punct>:</Punct> <SkillBar nivel={h.nivel} /></Line>
      ))}
      <Line>{"  "}<Punct>{"}"}</Punct><Punct>,</Punct></Line>
      <BlankLine />

      <Line>{"  "}<Property>"herramientas"</Property><Punct>:</Punct> <Punct>{"{"}</Punct></Line>
      {habilidades.herramientas.map((h, i) => (
        <Line key={i}>{"    "}<Property>"{h.nombre}"</Property><Punct>:</Punct> <SkillBar nivel={h.nivel} /></Line>
      ))}
      <Line>{"  "}<Punct>{"}"}</Punct></Line>

      <Line><Punct>{"}"}</Punct></Line>
    </EditorContent>
  );
}
