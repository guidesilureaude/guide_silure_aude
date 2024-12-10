"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Guidage silure",
    href: "/prestations/guidage-silure",
    description: "Guidage silure sur le fleuve Aude, en float tube ou en bateau.",
  },
  {
    title: "Animation pêche enfants",
    href: "/prestations/animation-peche-enfants",
    description:
      "Animation pêche pour les enfants, du bord à la recherche des moustachus.",
  },
  {
    title: "Animation pêche au coup",
    href: "/prestations/animation-peche-au-coup",
    description:
      "Animation pêche au coup tout publics, à la recherche de différents poissons.",
  },
  {
    title: "Autres animations",
    href: "/prestations/autres-animations",
    description:
      "Pour des prestations sur mesure, contactez-moi pour en discuter.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-x-4"> {/* Ajout du gap */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={cn(navigationMenuTriggerStyle(), "text-lg font-bold")}
          >
            Accueil
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg font-bold">
            Prestations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/votre-guide"
            className={cn(navigationMenuTriggerStyle(), "text-lg font-bold")}
          >
            Votre guide
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/tarifs"
            className={cn(navigationMenuTriggerStyle(), "text-lg font-bold")}
          >
            Tarifs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/partenaires"
            className={cn(navigationMenuTriggerStyle(), "text-lg font-bold")}
          >
            Partenaires
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-lg font-bold leading-none">{title}</div>
            <p
              className={cn(
                "line-clamp-2 text-sm leading-snug text-muted-foreground transition-colors dark:text-white"
              )}
            >
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
