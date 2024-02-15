import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import { FaGithub } from 'react-icons/fa';
const iconsList = {
  Github: FaGithub,
};
export default function FooterLinkItem({ item }) {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const Icon = iconsList[label];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {Icon && <Icon size={19} />}

      <Link
        className="footer__link-item"
        {...(href
          ? {
              href: prependBaseUrlToHref ? normalizedHref : href,
            }
          : {
              to: toUrl,
            })}
        {...props}
      >
        {label}
        {href && !isInternalUrl(href) && <IconExternalLink />}
      </Link>
    </div>
  );
}
