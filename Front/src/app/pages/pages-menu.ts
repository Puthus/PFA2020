import { NbMenuItem } from "@nebular/theme";
import { CanActivate } from "@angular/router";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "All",
    group: true,
  },
  {
    title: "Map des monuments",
    icon: "map-outline",
    link: "/pages/maps/leaflet",
    home: true,
  },
  {
    title: "Admin",
    group: true,
  },
  {
    title: "Monuments",
    icon: "layout-outline",
    children: [
      {
        title: "List",
        link: "/pages/admin/list-monument",
      },
    ],
  },
  {
    title: "Region",
    icon: "layout-outline",
    children: [
      {
        title: "List",
        link: "/pages/admin/list-region",
      },
    ],
  },
  {
    title: "Traveaux",
    icon: "layout-outline",
    children: [
      {
        title: "List",
        link: "/pages/admin/list-travail",
      },
      {
        title: "Ajouter",
        link: "/pages/admin/add-travail",
      },
    ],
  },
  {
    title: "Constat",
    icon: "layout-outline",
    children: [
      {
        title: "List",
        link: "/pages/admin/list-constat",
      },
    ],
  },
  {
    title: "Recenseur",
    group: true,
  },
  {
    title: "Monuments",
    icon: "layout-outline",
    children: [
      {
        title: "List des monuments",
        link: "/pages/recenseur/list-monument",
      },
      {
        title: "Ajouter",
        link: "/pages/recenseur/add-monument",
      },
    ],
  },
  {
    title: "Constats",
    icon: "layout-outline",
    children: [
      {
        title: "List des constats",
        link: "/pages/recenseur/list-constat",
      },
      {
        title: "Ajouter",
        link: "/pages/recenseur/add-constat",
      },
    ],
  },
  {
    title: "Gestionnaire",
    group: true,
  },
  {
    title: "Users",
    icon: "layout-outline",
    children: [
      {
        title: "List des users",
        link: "/pages/gestionnaire/list-user",
      },
      {
        title: "Ajouter",
        link: "/pages/gestionnaire/add-monument",
      },
    ],
  },
];
