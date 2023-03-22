import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@JA/react-single",
  app: () => System.import("@JA/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@JA/react-multiples",
  app: () => System.import("@JA/react-multiples"),
  activeWhen: ["/react-multiples"],
});
registerApplication({
  name: "@JA/react-parcel",
  app: () => System.import("@JA/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
});
// registerApplication({
//   name: "@JA/navbar",
//   app: () => System.import("@JA/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
