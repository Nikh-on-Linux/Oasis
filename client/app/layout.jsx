import "./globals.css";


export const metadata = {
  title: "Oasis, build your dream home",
  description: "Oasis is an e-commerce platform for furnitures and home decor items in the most affordable price range",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
