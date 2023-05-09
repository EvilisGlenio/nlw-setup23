// app/layout.tsx
import { Providers } from "./providers"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto+Mono:wght@700&display=swap" rel="stylesheet"></link>
        <title>habits</title>
      </head>
      <body
        style={{ backgroundColor: "#09090A", color: "white", height: "100vh" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
