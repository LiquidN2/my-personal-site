'use client';

import { FC, useState, FormEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './header-search.module.scss';

const HeaderSearch: FC = () => {
  const [query, setQuery] = useState('');

  const onSubmit: FormEventHandler = e => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
      <input
        type="text"
        className={styles.input}
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
};

export default HeaderSearch;
