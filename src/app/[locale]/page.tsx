import {Box} from "@navikt/ds-react";
import {PageBlock} from "@navikt/ds-react/Page";
import NextLink from "next/link";
import {Link} from "@/i18n/navigation";

export default function Home() {
  return (
    <PageBlock as="main" width="xl" gutters>
      <Box asChild>
        <NextLink href="https://www.google.com/">Next's default Link is rendered asChild</NextLink>
      </Box>
      <Box asChild>
        <Link href="https://www.google.com/">next-intl's wrapper is not rendered asChild</Link>
      </Box>
    </PageBlock>
  );
}
