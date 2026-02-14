import { EditorContent, Keyword, Str, Func, Variable, Comment, Property, Punct, Line, BlankLine, Type, Num, Tag } from "../vscode/EditorContent";

export function SobreMiContent() {
  return (
    <EditorContent lineCount={35}>
      <Line><Comment>{"// sobre-mi/perfil.tsx"}</Comment></Line>
      <Line><Comment>{"// Bienvenido a mi portfolio 👋"}</Comment></Line>
      <BlankLine />
      <Line><Keyword>{"import"}</Keyword>{" { "}<Variable>Developer</Variable>{" } "}<Keyword>from</Keyword> <Str>"@/vida-real"</Str><Punct>;</Punct></Line>
      <BlankLine />
      <Line><Keyword>{"interface"}</Keyword> <Type>Perfil</Type> <Punct>{"{"}</Punct></Line>
      <Line>{"  "}<Property>nombre</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>titulo</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>ubicacion</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>pasion</Property><Punct>:</Punct> <Type>string</Type><Punct>[]</Punct><Punct>;</Punct></Line>
      <Line><Punct>{"}"}</Punct></Line>
      <BlankLine />
      <Line><Keyword>const</Keyword> <Variable>yo</Variable><Punct>:</Punct> <Type>Perfil</Type> <Punct>=</Punct> <Punct>{"{"}</Punct></Line>
      <Line>{"  "}<Property>nombre</Property><Punct>:</Punct> <Str>"Tu Nombre"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>titulo</Property><Punct>:</Punct> <Str>"Desarrollador Full Stack"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>ubicacion</Property><Punct>:</Punct> <Str>"Buenos Aires, Argentina 🇦🇷"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>pasion</Property><Punct>:</Punct> <Punct>[</Punct></Line>
      <Line>{"    "}<Str>"Crear experiencias web increíbles"</Str><Punct>,</Punct></Line>
      <Line>{"    "}<Str>"Aprender nuevas tecnologías"</Str><Punct>,</Punct></Line>
      <Line>{"    "}<Str>"Resolver problemas complejos"</Str><Punct>,</Punct></Line>
      <Line>{"    "}<Str>"Código limpio y mantenible"</Str></Line>
      <Line>{"  "}<Punct>]</Punct><Punct>,</Punct></Line>
      <Line><Punct>{"}"}</Punct><Punct>;</Punct></Line>
      <BlankLine />
      <Line><Keyword>export</Keyword> <Keyword>default</Keyword> <Keyword>function</Keyword> <Func>SobreMi</Func><Punct>()</Punct> <Punct>{"{"}</Punct></Line>
      <Line>{"  "}<Keyword>return</Keyword> <Punct>(</Punct></Line>
      <Line>{"    "}<Punct>{"<"}</Punct><Tag>Developer</Tag></Line>
      <Line>{"      "}<Property>perfil</Property><Punct>=</Punct><Punct>{"{"}</Punct><Variable>yo</Variable><Punct>{"}"}</Punct></Line>
      <Line>{"      "}<Property>disponible</Property><Punct>=</Punct><Punct>{"{"}</Punct><Keyword>true</Keyword><Punct>{"}"}</Punct></Line>
      <Line>{"      "}<Property>cafeDiario</Property><Punct>=</Punct><Punct>{"{"}</Punct><Num>3</Num><Punct>{"}"}</Punct></Line>
      <Line>{"    "}<Punct>/{">"}</Punct></Line>
      <Line>{"  "}<Punct>)</Punct><Punct>;</Punct></Line>
      <Line><Punct>{"}"}</Punct></Line>
    </EditorContent>
  );
}
