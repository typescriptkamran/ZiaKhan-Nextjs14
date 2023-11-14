"use strict";
//import './globals.css'
Object.defineProperty(exports, "__esModule", { value: true });
function RootLayout({ children, }) {
    return (<html lang="en">
      {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
      <head />
      <body>{children}</body>
    </html>);
}
exports.default = RootLayout;
