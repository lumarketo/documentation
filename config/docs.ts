import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentación",
      href: "/docs",
    }
  ],
  sidebarNav: [
    {
      title: "Empezar",
      items: [
        {
          title: "Introducción",
          href: "/docs",
        },
      ],
    },
    {
      title: "Documentación",
      items: [
        {
          title: "Autenticación",
          href: "/docs/authentication",
        },
        {
          title: "Ordenes",
          href: "/docs/order",
        },
        {
          title: "Sucursales",
          href: "/docs/subsidiary",
        },
        {
          title: "Productos",
          href: "/docs/product",
        },
        {
          title: "Webhook",
          href: "/docs/webhook",
        },
      ],
    },
  ],
}
