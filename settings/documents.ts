import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Pendahuluan",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Keterkaitan dengan Mata Kuliah",
        href: "/installation",
      },
      {
        title: "Teknologi yang Digunakan",
        href: "/setup",
      },
      {
        title: "description Proyek",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Analisis Kebutuhan",
    href: "/navigation",
    heading: "Analisis dan Desain Perangkat Lunak",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deep",
        href: "/deep",
        items: [
          {
            title: "Deeper",
            href: "/deeper",
            items: [
              {
                title: "Even deeper",
                href: "/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
]
