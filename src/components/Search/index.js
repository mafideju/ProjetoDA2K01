import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchStyle.css';

export default function Search({ handleSearch }) {
  return (
    <div className="search">
      <input
        className={styles.black}
        type="search"
        placeholder="Digite o Nome do Usuário"
        onChange={handleSearch}
      />
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func,
};
