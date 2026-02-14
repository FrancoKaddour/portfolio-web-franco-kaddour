import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t('contact.title')}</DialogTitle>
          <DialogClose />
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-6">
            {t('contact.description')}
          </p>

          <div className="bg-card border border-border rounded overflow-hidden">
            <div className="h-1 bg-primary" />
            
            <div className="p-6 font-mono text-[13px] leading-[22px]">
              <div className="flex">
                <div className="flex flex-col items-end pr-4 text-vscode-line-number select-none text-xs">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <div className="flex-1">
                  <div>
                    <span className="text-syntax-punctuation">.socials </span>
                    <span className="text-syntax-punctuation">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-syntax-property">email</span>
                    <span className="text-syntax-punctuation">: </span>
                    <a href="mailto:francokaddour@gmail.com" className="text-primary hover:underline">francokaddour@gmail.com</a>
                    <span className="text-syntax-punctuation">;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-syntax-property">github</span>
                    <span className="text-syntax-punctuation">: </span>
                    <a href="https://github.com/FrancoKaddour" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">github.com/FrancoKaddour</a>
                    <span className="text-syntax-punctuation">;</span>
                  </div>
                  <div className="pl-4">
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
      </DialogContent>
    </Dialog>
  );
}
