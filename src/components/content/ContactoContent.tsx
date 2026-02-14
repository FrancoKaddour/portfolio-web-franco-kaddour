import { EditorContent, Keyword, Str, Func, Variable, Comment, Property, Punct, Line, BlankLine, Type } from "../vscode/EditorContent";

export function ContactoContent() {
  return (
    <EditorContent lineCount={35}>
      <Line><Comment>{"// contacto/conectemos.ts"}</Comment></Line>
      <BlankLine />
      <Line><Keyword>interface</Keyword> <Type>Contacto</Type> <Punct>{"{"}</Punct></Line>
      <Line>{"  "}<Property>email</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>linkedin</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>github</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line>{"  "}<Property>twitter</Property><Punct>:</Punct> <Type>string</Type><Punct>;</Punct></Line>
      <Line><Punct>{"}"}</Punct></Line>
      <BlankLine />
      <Line><Keyword>const</Keyword> <Variable>contacto</Variable><Punct>:</Punct> <Type>Contacto</Type> <Punct>=</Punct> <Punct>{"{"}</Punct></Line>
      <Line>{"  "}<Property>email</Property><Punct>:</Punct>    <Str>"tu@email.com"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>linkedin</Property><Punct>:</Punct> <Str>"linkedin.com/in/tu-usuario"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>github</Property><Punct>:</Punct>   <Str>"github.com/tu-usuario"</Str><Punct>,</Punct></Line>
      <Line>{"  "}<Property>twitter</Property><Punct>:</Punct>  <Str>"@tu_usuario"</Str></Line>
      <Line><Punct>{"}"}</Punct><Punct>;</Punct></Line>
      <BlankLine />
      <Line><Comment>{"// ¡No dudes en escribirme! 📬"}</Comment></Line>
      <Line><Comment>{"// Siempre estoy abierto a nuevos proyectos"}</Comment></Line>
      <Line><Comment>{"// y oportunidades interesantes."}</Comment></Line>
      <BlankLine />
      <Line><Keyword>async function</Keyword> <Func>enviarMensaje</Func><Punct>(</Punct><Variable>msg</Variable><Punct>:</Punct> <Type>string</Type><Punct>)</Punct> <Punct>{"{"}</Punct></Line>
      <Line>{"  "}<Keyword>await</Keyword> <Func>fetch</Func><Punct>(</Punct><Str>"/api/contacto"</Str><Punct>,</Punct> <Punct>{"{"}</Punct></Line>
      <Line>{"    "}<Property>method</Property><Punct>:</Punct> <Str>"POST"</Str><Punct>,</Punct></Line>
      <Line>{"    "}<Property>body</Property><Punct>:</Punct> <Variable>JSON</Variable><Punct>.</Punct><Func>stringify</Func><Punct>({"{"}</Punct> <Property>mensaje</Property><Punct>:</Punct> <Variable>msg</Variable> <Punct>{"}"}</Punct><Punct>)</Punct></Line>
      <Line>{"  "}<Punct>{"}"}</Punct><Punct>)</Punct><Punct>;</Punct></Line>
      <Line>{"  "}<Keyword>return</Keyword> <Str>"¡Mensaje enviado con éxito! 🎉"</Str><Punct>;</Punct></Line>
      <Line><Punct>{"}"}</Punct></Line>
      <BlankLine />
      <Line><Keyword>export</Keyword> <Keyword>default</Keyword> <Variable>contacto</Variable><Punct>;</Punct></Line>
    </EditorContent>
  );
}
