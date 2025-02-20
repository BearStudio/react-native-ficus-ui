"use client";

import { usePathname, useRouter } from 'next/navigation';

const versions = [
'v1','v2'
];

export default function VersionSwitcher() {
  const pathname = usePathname(); 
  const router = useRouter();

  const currentVersion = pathname.split('/')[2] || 'v2';

  const handleChange = (e) => {
    const newVersion = e.target.value; 
    router.push(`/docs/${newVersion}/getting-started`);
  };

  return (
    <select
      value={currentVersion}
      onChange={handleChange}
      style={{ borderWidth:1, paddingLeft: 8, paddingRight:8, paddingTop:4, paddingBottom:4, alignItems:'center' }}
    >
      {versions.map((version) => (
        <option key={version} value={version}>
          {version}
        </option>
      ))}
    </select>
  );
}
