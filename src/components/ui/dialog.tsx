import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";
import { cn } from '@/lib/utils';

type DialogContextValue = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogContext = React.createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const value = React.useContext(DialogContext);
  if (!value) {
    throw new Error("Dialog components must be used within <Dialog>");
  }
  return value;
}

function Dialog({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = React.useCallback((next: React.SetStateAction<boolean>) => {
    const resolved = typeof next === "function" ? next(open) : next;
    if (controlledOpen === undefined) {
      setUncontrolledOpen(resolved);
    }
    onOpenChange?.(resolved);
  }, [controlledOpen, onOpenChange, open]);

  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}

function DialogTrigger({
  asChild,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; children?: React.ReactNode }) {
  const { setOpen } = useDialogContext();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);
    if (!event.defaultPrevented) setOpen(true);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ...props,
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
        (children as any).props?.onClick?.(event);
        if (!event.defaultPrevented) handleClick(event);
      },
    });
  }

  return <button type="button" {...props} onClick={handleClick}>{children}</button>;
}

function DialogPortal({ children }: { children?: React.ReactNode }) {
  const { open } = useDialogContext();
  if (!open) return null;
  return <>{children}</>;
}

function DialogOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { setOpen } = useDialogContext();
  return (
    <div
      className={cn("fixed inset-0 z-50 bg-black/50", className)}
      onClick={() => setOpen(false)}
      {...props}
    />
  );
}

function DialogClose({
  asChild,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; children?: React.ReactNode }) {
  const { setOpen } = useDialogContext();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(event);
    if (!event.defaultPrevented) setOpen(false);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ...props,
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
        (children as any).props?.onClick?.(event);
        if (!event.defaultPrevented) handleClick(event);
      },
    });
  }

  return <button type="button" {...props} onClick={handleClick}>{children}</button>;
}

function DialogContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = useDialogContext();
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="dialog-overlay"
          className="fixed inset-0 z-50 bg-black/50"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <motion.div
          key="dialog-panel"
          role="dialog"
          aria-modal="true"
          className={cn(
            "bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg",
            className
          )}
          // Centering lives in the motion transform, not Tailwind translate utilities —
          // framer-motion writes an inline transform that would override them.
          initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.15 }}
          {...(props as any)}
        >
          {children}
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2 text-center sm:text-left", className)} {...props} />;
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />;
}

function DialogTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("text-lg font-semibold leading-none", className)} {...props} />;
}

function DialogDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogPortal, DialogTitle, DialogTrigger };
