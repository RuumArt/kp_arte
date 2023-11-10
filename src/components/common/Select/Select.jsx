import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import useClickOutside from 'hooks/useClickOutside';
import modsClasses from 'utils/modsClasses';
import Text from 'components/Text';
import Chevron from 'components/Icons/Chevron';
import s from './Select.module.scss';

const Select = ({
  className,
  label,
  values,
  value,
  onChange,
  name,
  colorScheme,
  isSearch,
  isError,
}) => {
  const rootRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const mods = modsClasses(s, { colorScheme });

  const handleOpen = () => {
    setIsActive(prev => !prev);
  };

  const handleClick = useCallback(
    v => {
      if (onChange) onChange({ name, value: v });
      setIsActive(false);
    },
    [name, onChange]
  );

  useClickOutside(rootRef, () => {
    setIsActive(false);
  });

  const handleSearch = e => {
    const { value: sVal } = e.target;
    setSearchVal(sVal.toLowerCase());
  };

  const searchedData = useMemo(() => {
    return values.filter(el => {
      if (searchVal === '') {
        return el;
      }

      return el.value.toLowerCase().includes(searchVal);
    });
  }, [values, searchVal]);

  useEffect(() => {
    if (!isActive) {
      setSearchVal('');
    }
  }, [isActive]);

  return (
    <div
      className={cx(s.root, className, mods, {
        [s.isActive]: isActive,
        [s.isSearch]: isSearch,
        [s.isError]: isError,
      })}
      ref={rootRef}
    >
      {label && <Text className={s.label}>{label}</Text>}
      <div className={s.inner}>
        <div className={s.value} onClick={handleOpen}>
          <span>{value ? value.value : 'Выбрать...'}</span>
          <Chevron className={s.icon} />
        </div>
        {isActive && (
          <div className={s.list}>
            {isSearch && (
              <input
                type="text"
                placeholder="Поиск..."
                className={s.search}
                onInput={handleSearch}
              />
            )}
            <div className={s.listWrap}>
              {searchedData.length > 0 ? (
                searchedData.map(item => (
                  <button
                    type="button"
                    onClick={() => handleClick(item)}
                    key={item.id}
                    className={cx(s.item, {
                      [s.currentItem]: value && value.id === item.id,
                    })}
                  >
                    {item.value}
                  </button>
                ))
              ) : (
                <Text className={s.item}>Ничего не найдено...</Text>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.array,
  value: PropTypes.object,
  onChange: PropTypes.func,
  name: PropTypes.string,
  colorScheme: PropTypes.oneOf(['white']),
  isSearch: PropTypes.bool,
};

Select.defaultProps = {
  colorScheme: 'white',
};

export default React.memo(Select);
