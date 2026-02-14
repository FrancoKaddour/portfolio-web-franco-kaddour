const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-sans font-bold text-primary mb-4 text-center">
        Contact Me
      </h1>
      <p className="text-center text-foreground font-mono text-[14px] mb-12 max-w-xl mx-auto">
        Feel free to reach out to me through any of the social platforms below.
        I'm always open to new opportunities and connections.
      </p>

      <div className="max-w-2xl mx-auto bg-card border border-border rounded overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 bg-primary" />
        
        <div className="p-6 font-mono text-[14px] leading-[28px]">
          <div className="flex">
            <div className="flex flex-col items-end pr-6 text-vscode-line-number select-none">
              {Array.from({ length: 9 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div>
              <div>
                <span className="text-syntax-punctuation">.socials </span>
                <span className="text-syntax-punctuation">{"{"}</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">website</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="#" className="text-primary hover:underline">tudominio.com</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">email</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="mailto:tu@email.com" className="text-primary hover:underline">tu@email.com</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">github</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="https://github.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tu-usuario</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">linkedin</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="https://linkedin.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">tu-usuario</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">twitter</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="https://twitter.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">@tu_usuario</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">telegram</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="#" className="text-primary hover:underline">tu_usuario</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div>
                <span className="text-syntax-punctuation">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
