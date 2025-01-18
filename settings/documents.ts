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
    title: "Business Requirement",
    href: "/structure",
    items: [
      {
        title: "Stakeholder Requirement",
        href: "/deep",
        items: [
          {
        title: "System Requirement",
        href: "/deeper",
        items: [
          {
        title: "Software Requirement",
        href: "/even-deeper",
              },
            ],
          },
        ],
      },
      {
        title: "Diagrams",
        href: "/Diagrams",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Perancangan Desain Antarmuka",
    href: "/markdown",
    heading: "Dokumen design",
    items: [
      {
        title: "Sketsa Awal",
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
