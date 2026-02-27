type AppRoutes = "/";
type PageRoutes = never;
type LayoutRoutes = "/";
type RedirectRoutes = never;
type RewriteRoutes = never;
type Routes =
  | AppRoutes
  | PageRoutes
  | LayoutRoutes
  | RedirectRoutes
  | RewriteRoutes;

interface ParamMap {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  "/": {};
}

export type ParamsOf<Route extends Routes> = ParamMap[Route];

interface LayoutSlotMap {
  "/": never;
}

export type {
  AppRoutes,
  PageRoutes,
  LayoutRoutes,
  RedirectRoutes,
  RewriteRoutes,
  ParamMap,
};

declare global {
  interface PageProps<AppRoute extends AppRoutes> {
    params: ParamMap[AppRoute];
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  }

  type LayoutProps<LayoutRoute extends LayoutRoutes> = {
    params: ParamMap[LayoutRoute];
    children: React.ReactNode;
  } & {
    [K in LayoutSlotMap[LayoutRoute]]: React.ReactNode;
  };
}
