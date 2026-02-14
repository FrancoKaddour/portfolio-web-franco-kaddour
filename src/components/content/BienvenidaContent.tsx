import { EditorContent, Keyword, Str, Func, Variable, Comment, Property, Punct, Line, BlankLine, Type } from "../vscode/EditorContent";

export function BienvenidaContent() {
  return (
    <EditorContent lineCount={30}>
      <Line><Comment>{"// 👋 ¡Bienvenido a mi portfolio!"}</Comment></Line>
      <Line><Comment>{"// "}</Comment></Line>
      <Line><Comment>{"// Navega por las carpetas del explorador"}</Comment></Line>
      <Line><Comment>{"// para conocer más sobre mí."}</Comment></Line>
      <Line><Comment>{"// "}</Comment></Line>
      <Line><Comment>{"// 📁 sobre-mi     → ¿Quién soy?"}</Comment></Line>
      <Line><Comment>{"// 💼 experiencia  → Mi trayectoria profesional"}</Comment></Line>
      <Line><Comment>{"// 🌐 proyectos    → Lo que he construido"}</Comment></Line>
      <Line><Comment>{"// ⚡ habilidades  → Mis skills técnicos"}</Comment></Line>
      <Line><Comment>{"// 📧 contacto     → ¡Hablemos!"}</Comment></Line>
      <BlankLine />
      <Line><Keyword>const</Keyword> <Variable>portfolio</Variable> <Punct>=</Punct> <Keyword>new</Keyword> <Type>Portfolio</Type><Punct>({"{"}</Punct></Line>
      <Line>{"  "}<Property>autor</Property><Punct>:</Punct> <Str>"Tu Nombre"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>version</Property><Punct>:</Punct> <Str>"1.0.0"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>theme</Property><Punct>:</Punct> <Str>"VS Code Dark+"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>hecho_con</Property><Punct>:</Punct> <Str>"❤️ y mucho café ☕"</Str></Line>
      <Line><Punct>{"}"}</Punct><Punct>)</Punct><Punct>;</Punct></Line>
      <BlankLine />
      <Line><Variable>portfolio</Variable><Punct>.</Punct><Func>iniciar</Func><Punct>()</Punct><Punct>;</Punct></Line>
      <BlankLine />
      <Line><Comment>{"// Tip: Haz clic en los archivos del explorador ← "}</Comment></Line>
    </EditorContent>
  );
}
