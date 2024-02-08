import React from 'react';
import { DiResponsive } from 'react-icons/di';
import {
  MdOutlineLibraryBooks,
  MdOutlineDashboardCustomize,
} from 'react-icons/md';
import styles from './styles.module.css';

export const IconsList=()=> {
  return (
    <div className={styles.iconslist}>
      <div className={styles.icon}>
        <DiResponsive size={80} fill="white" />
        <p>Reponsive Design</p>
      </div>
      <div className={styles.icon}>
        <MdOutlineLibraryBooks
          size={35}
          style={{ marginTop: '20px' }}
          fill="white"
        />
        <p style={{ paddingTop: '20px' }}>Rich Library</p>
      </div>
      <div className={styles.icon}>
        <MdOutlineDashboardCustomize
          size={45}
          style={{ marginTop: '20px' }}
          fill="white"
        />
        <p style={{ paddingTop: '20px' }}>Cutomization</p>
      </div>
    </div>
  );
}
