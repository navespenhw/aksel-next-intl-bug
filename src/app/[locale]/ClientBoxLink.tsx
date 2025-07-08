"use client";

import {Box} from "@navikt/ds-react";
import {Link} from "@/i18n/navigation";

const ClientBoxLink = (props: React.ComponentPropsWithRef<typeof Link>) =>
  <Box asChild borderColor="border-danger" borderWidth="1">
    <Link {...props} />
  </Box>
export default ClientBoxLink;
