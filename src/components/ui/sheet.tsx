import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from '@/lib/utils';

type SheetSide = "top" | "bottom" | "left" | "right";

type SheetContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextValue>({ open: false, setOpen: () => {} });
const useSheet = () => React.useContext(SheetContext);

const Sheet = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}) => {
  const [uncontrolled, setUncontrolled] = React.useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? (openProp as boolean) : uncontrolled;
  const setOpen = React.useCallback((next: boolean) => {
    if (!isControlled) setUncontrolled(next);
    if (onOpenChange) onOpenChange(next);
  }, [isControlled, onOpenChange]);
  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>;
};
Sheet.displayName = "Sheet";

const cloneWithClick = (children: React.ReactNode, ref: any, extraProps: any, action: (e: any) => void) => {
  const child = React.Children.only(children) as React.ReactElement<any>;
  return React.cloneElement(child, {
    ...extraProps,
    ref,
    onClick: (e: any) => { if (child.props.onClick) child.props.onClick(e); action(e); },
  });
};

const SheetTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }>(
  ({ asChild, children, onClick, ...props }, ref) => {
    const { setOpen } = useSheet();
    const act = (e: any) => { if (onClick) onClick(e); setOpen(true); };
    if (asChild && React.isValidElement(children)) return cloneWithClick(children, ref, props, act);
    return <button type="button" ref={ref} onClick={act} {...props}>{children}</button>;
  }
);
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }>(
  ({ asChild, children, onClick, ...props }, ref) => {
    const { setOpen } = useSheet();
    const act = (e: any) => { if (onClick) onClick(e); setOpen(false); };
    if (asChild && React.isValidElement(children)) return cloneWithClick(children, ref, props, act);
    return <button type="button" ref={ref} onClick={act} {...props}>{children}</button>;
  }
);
SheetClose.displayName = "SheetClose";

const SheetPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
SheetPortal.displayName = "SheetPortal";

// theme-compliance: the sheet scrim (bg-black/80) is an alpha overlay that dims content on every theme — justified exception.
const SheetOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { setOpen } = useSheet();
  return <div ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} onClick={() => setOpen(false)} {...props} />;
});
SheetOverlay.displayName = "SheetOverlay";

const SHEET_SIDE_CLASSES: Record<SheetSide, string> = {
  top: "inset-x-0 top-0 border-b",
  bottom: "inset-x-0 bottom-0 border-t",
  left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
  right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
};

const SHEET_SIDE_MOTION: Record<SheetSide, { hidden: any; visible: any }> = {
  top: { hidden: { y: "-100%" }, visible: { y: 0 } },
  bottom: { hidden: { y: "100%" }, visible: { y: 0 } },
  left: { hidden: { x: "-100%" }, visible: { x: 0 } },
  right: { hidden: { x: "100%" }, visible: { x: 0 } },
};

const SheetContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { side?: SheetSide }>(
  ({ side = "right", className, children, ...props }, ref) => {
    const { open, setOpen } = useSheet();
    React.useEffect(() => {
      if (!open) return;
      const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen]);

    const slide = SHEET_SIDE_MOTION[side] ?? SHEET_SIDE_MOTION.right;

    return (
      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet-overlay"
            className="fixed inset-0 z-50 bg-black/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.div
            key="sheet-panel"
            ref={ref}
            role="dialog"
            aria-modal="true"
            className={cn("fixed z-50 gap-4 bg-background p-6 shadow-lg", SHEET_SIDE_CLASSES[side] ?? SHEET_SIDE_CLASSES.right, className)}
            initial={slide.hidden} animate={slide.visible} exit={slide.hidden}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            {...(props as any)}
          >
            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
              <X className="h-4 w-4" /><span className="sr-only">Close</span>
            </SheetClose>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
SheetContent.displayName = "SheetContent";

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h2 ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
);
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
);
SheetDescription.displayName = "SheetDescription";

export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
