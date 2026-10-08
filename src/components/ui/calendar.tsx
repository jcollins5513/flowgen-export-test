import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from '@/lib/utils';
import { buttonVariants } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, components: userComponents, ...props }: CalendarProps) {
  const defaultComponents = {
    Chevron: (props: any) => {
      if (props.orientation === "left") {
        return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      classNames={{
        months: "relative flex flex-col sm:flex-row gap-4",
        month: "w-full",
        month_caption: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
        caption_label: "text-sm font-medium",
        nav: "absolute top-0 flex w-full justify-between z-10",
        button_previous: cn(buttonVariants({ variant: "ghost" }), "size-9 text-muted-foreground/80 hover:text-foreground p-0"),
        button_next: cn(buttonVariants({ variant: "ghost" }), "size-9 text-muted-foreground/80 hover:text-foreground p-0"),
        weekday: "size-9 p-0 text-xs font-medium text-muted-foreground/80",
        day_button: "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg p-0 text-foreground outline-offset-2 focus:outline-none hover:bg-accent group-data-[selected]:bg-primary hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[disabled]:text-foreground/30 group-data-[disabled]:line-through group-data-[outside]:text-foreground/30",
        day: "group size-9 px-0 text-sm",
        range_start: "range-start",
        range_end: "range-end",
        range_middle: "range-middle",
        today: "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary",
        outside: "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={mergedComponents}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
