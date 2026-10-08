import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from '@/lib/utils';

type DrawerContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DrawerContext = React.createContext<DrawerContextValue>({ open: false, setOpen: () => {} });
const useDrawer = () => React.useContext(DrawerContext);

const Drawer = ({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  shouldScaleBackground,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  shouldScaleBackground?: boolean;
  children?: React.ReactNode;
}) => {
  const [uncontrolled, setUncontrolled] = React.useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? (openProp as boolean) : uncontrolled;
  const setOpen = React.useCallback((next: boolean) => {
    if (!isControlled) setUncontrolled(next);
    if (onOpenChange) onOpenChange(next);
  }, [isControlled, onOpenChange]);
  return <DrawerContext.Provider value={{ open, setOpen }}>{children}</DrawerContext.Provider>;
};
Drawer.displayName = "Drawer";

const cloneWithClick = (children: React.ReactNode, ref: any, extraProps: any, action: (e: any) => void) => {
  const child = React.Children.only(children) as React.ReactElement<any>;
  return React.cloneElement(child, {
    ...extraProps,
    ref,
    onClick: (e: any) => { if (child.props.onClick) child.props.onClick(e); action(e); },
  });
};

const DrawerTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }>(
  ({ asChild, children, onClick, ...props }, ref) => {
    const { setOpen } = useDrawer();
    const act = (e: any) => { if (onClick) onClick(e); setOpen(true); };
    if (asChild && React.isValidElement(children)) return cloneWithClick(children, ref, props, act);
    return <button type="button" ref={ref} onClick={act} {...props}>{children}</button>;
  }
);
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }>(
  ({ asChild, children, onClick, ...props }, ref) => {
    const { setOpen } = useDrawer();
    const act = (e: any) => { if (onClick) onClick(e); setOpen(false); };
    if (asChild && React.isValidElement(children)) return cloneWithClick(children, ref, props, act);
    return <button type="button" ref={ref} onClick={act} {...props}>{children}</button>;
  }
);
DrawerClose.displayName = "DrawerClose";

const DrawerPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
DrawerPortal.displayName = "DrawerPortal";

// theme-compliance: drawer scrims (bg-black/80) are alpha overlays that dim content on every theme — justified exception.
const DrawerOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const { setOpen } = useDrawer();
  return <div ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} onClick={() => setOpen(false)} {...props} />;
});
DrawerOverlay.displayName = "DrawerOverlay";

const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = useDrawer();
    React.useEffect(() => {
      if (!open) return;
      const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen]);

    return (
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer-overlay"
            className="fixed inset-0 z-50 bg-black/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.div
            key="drawer-panel"
            ref={ref}
            role="dialog"
            aria-modal="true"
            className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)}
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            {...(props as any)}
          >
            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h2 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
);
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
);
DrawerDescription.displayName = "DrawerDescription";

export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };
