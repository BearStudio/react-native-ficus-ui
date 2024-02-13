import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import * as Icons from 'react-icons/fa'
export default function FooterLinkItem({item}) {
  const {to, href, label, prependBaseUrlToHref,icon, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const Icon=Icons[icon]
  return (
    <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
      {icon && <Icon size={19}/>}
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
      {href && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
    </div>
  );
}
