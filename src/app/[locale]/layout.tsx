import type {Metadata} from "next";
import "@navikt/ds-css";
import {NextIntlClientProvider} from "next-intl";
import {Page} from "@navikt/ds-react";

export const metadata: Metadata = {
  title: "aksel-next-intl-bug",
};

export default async function RootLayout({
                                           children,
                                           params
                                         }: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const {locale} = await params;
  return (
    <html lang={locale}>
    <body>
    <NextIntlClientProvider>
      <Page>
        {children}
      </Page>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
