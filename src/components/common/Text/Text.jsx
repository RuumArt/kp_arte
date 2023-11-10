import { forwardRef, memo } from 'react';
import { oneOf, any, string, bool } from 'prop-types';

import cx from 'classnames';

import modsClasses from 'utils/modsClasses';
import s from './Text.module.scss';

const Text = forwardRef(
  (
    {
      as: As,
      className,
      children,
      size,
      family,
      type,
      transform,
      weight,
      isHtml,
      color,
      ...otherProps
    },
    ref
  ) => {
    const mods = modsClasses(s, {
      size,
      family,
      type,
      transform,
      weight,
      color,
    });

    if (isHtml) {
      return (
        <As
          className={cx(s.root, className, mods)}
          ref={ref}
          {...otherProps}
          dangerouslySetInnerHTML={{ __html: children }}
        />
      );
    }

    return (
      <As className={cx(s.root, className, mods)} ref={ref} {...otherProps}>
        {children}
      </As>
    );
  }
);

Text.propTypes = {
  children: any,
  className: string,
  size: oneOf(['normal', 'h1', 'h2', 'h3', 'h4', 'medium', 'p2', 'p3']),
  family: oneOf(['S', 'I']),
  weight: oneOf(['normal', 'medium', 'regular', 'semi', 'bold', 'black']),
  as: any,
  type: oneOf(['opacity', 'none']),
  transform: oneOf(['uppercase', 'none', 'capitalize']),
  color: oneOf(['malta', 'cream', 'none']),
  isHtml: bool,
};

Text.defaultProps = {
  as: 'div',
  size: 'normal',
  family: 'S',
  type: 'none',
  transform: 'none',
  weight: 'normal',
  color: 'none',
};

export default memo(Text);
