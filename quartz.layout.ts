import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/kelreeeeey",
      "My X ( Twitter ) account": "https://x.com/PemudaMaluku___",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.Flex({
    //   components: [
    //     {
    //       Component: Component.Search(),
    //       grow: true,
    //     },
    //     { Component: Component.Darkmode() },
    //   ],
    // }),
    Component.PageTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  right: [
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Flex({
      components: [
        {
          Component: Component.Explorer({
            folderClickBehavior: "collapse",
            folderDefaultState: "collapsed",
            useSavedState: true,
            mapFn: (node) => {
              if (node.isFolder) {
                node.displayName = "📁 " + node.displayName
              } else {
                node.displayName = "📄 " + node.displayName
              }
            },
            order: ["filter", "map", "sort"],
          }),
        },
      ]
    }),
    Component.Backlinks(),
    // Component.RecentNotes({ limit: 5 }),
  ],
  left: [
    Component.DesktopOnly(Component.TableOfContents({
      collapseByDefault: true,
    })),
  ],
  afterBody: [
    Component.DesktopOnly(Component.Graph()),
    // Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer({
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
      mapFn: (node) => {
        if (node.isFolder) {
          node.displayName = "📁 " + node.displayName
        } else {
          node.displayName = "📄 " + node.displayName
        }
      },
      order: ["filter", "map", "sort"],
    }),
  ],
  right: [],
}
