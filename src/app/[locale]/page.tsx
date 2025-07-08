import {Box, VStack} from "@navikt/ds-react";
import {PageBlock} from "@navikt/ds-react/Page";
import NextLink from "next/link";
import {Link} from "@/i18n/navigation";
import ClientBoxLink from "@/app/[locale]/ClientBoxLink";
import ClientLink from "@/app/[locale]/ClientLink";

export default function Home() {
  return (
    <PageBlock as="main" width="xl" gutters>
      <VStack>
        <Box asChild>
          <NextLink href="https://www.google.com/">Next's default Link is rendered asChild</NextLink>
        </Box>
        <Box>
          <Link href="https://www.google.com/">next-intl's wrapper is rendered NOT-asChild in a server component</Link>
        </Box>
        <Box asChild>
          <Link href="https://www.google.com/">next-intl's wrapper is NOT rendered asChild in a server component</Link>
        </Box>
        <ClientBoxLink href="https://www.google.com/">
          next-intl's wrapper IS rendered asChild in a client component
        </ClientBoxLink>
        <Box asChild>
          <ClientLink href="https://www.google.com/">
            next-intl's wrapper IS rendered asChild in a client component, redux
          </ClientLink>
        </Box>
      </VStack>
    </PageBlock>
  );
}
