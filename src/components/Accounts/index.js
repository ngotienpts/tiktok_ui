import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Accounts.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/564x/f3/ba/94/f3ba94a0c06fcf11c1f9ae2946c909f5.jpg"
                alt="name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('user-name')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default Account;
