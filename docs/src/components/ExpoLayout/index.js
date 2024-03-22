import React from 'react';
import { useColorMode } from "@docusaurus/theme-common";

const ExpoLayout = ({ id }) => {
  const { colorMode } = useColorMode();

  return (
    <iframe src={`/iframes/${id}${colorMode === 'dark' ? '-dark' : ''}.html`} width='100%' height="620px" title='Expo Frame'/>
  )
}

export default ExpoLayout;
