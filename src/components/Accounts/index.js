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
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d5bfaab082227ea8ae3f8dcf985b10b2.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1665885600&x-signature=DahBoZoMigXff5hANibnIMlFSM0%3D"
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
