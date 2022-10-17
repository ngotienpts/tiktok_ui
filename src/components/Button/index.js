import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    small = false,
    large = false,
    outline = false,
    outlineSecondary = false,
    disabled = false,
    children,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    };
    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }
    // remove event lister
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        small,
        large,
        outline,
        outlineSecondary,
        disabled,
    });
    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
