import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-sans font-bold text-primary mb-4 text-center">
        {t('contact.title')}
      </h1>
      <p className="text-center text-foreground font-mono text-[14px] mb-12 max-w-xl mx-auto">
        {t('contact.description')}
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
                <span className="text-syntax-property">email</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="mailto:francokaddour@gmail.com" className="text-primary hover:underline">francokaddour@gmail.com</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">github</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="https://github.com/FrancoKaddour" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">github.com/FrancoKaddour</a>
                <span className="text-syntax-punctuation">;</span>
              </div>
              <div className="pl-6">
                <span className="text-syntax-property">linkedin</span>
                <span className="text-syntax-punctuation">: </span>
                <a href="https://www.linkedin.com/in/francokaddour/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/francokaddour</a>
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
