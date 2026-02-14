import { ReactNode } from "react";

interface EditorContentProps {
  children: ReactNode;
  lineCount?: number;
}

export function EditorContent({ children, lineCount = 40 }: EditorContentProps) {
  return (
    <div className="flex flex-1 overflow-auto bg-vscode-editor">
      {/* Line numbers */}
      <div className="flex flex-col items-end pr-4 pl-4 pt-0 select-none text-vscode-line-number text-[13px] leading-[20px] min-w-[60px] bg-vscode-editor">
        {Array.from({ length: lineCount }, (_, i) => (
          <span key={i + 1} className="font-mono">{i + 1}</span>
        ))}
      </div>
      {/* Content */}
      <div className="flex-1 pt-0 pr-8 text-[13px] leading-[20px] overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

// Syntax highlighting helpers
export const Keyword = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-keyword">{children}</span>
);

export const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-string">{children}</span>
);

export const Func = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-function">{children}</span>
);

export const Variable = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-variable">{children}</span>
);

export const Comment = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-comment">{children}</span>
);

export const Num = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-number">{children}</span>
);

export const Type = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-type">{children}</span>
);

export const Property = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-property">{children}</span>
);

export const Punct = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-punctuation">{children}</span>
);

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-tag">{children}</span>
);

export const Line = ({ children, highlight }: { children: ReactNode; highlight?: boolean }) => (
  <div className={`${highlight ? "bg-vscode-line-active" : ""} px-2 min-h-[20px]`}>
    {children}
  </div>
);

export const BlankLine = () => <div className="min-h-[20px]" />;
