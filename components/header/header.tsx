import styles from '../../styles/header/header.module.css';

const Header = ({selectedpage}:{
    selectedpage: string,
}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>{selectedpage}</h2>
        </div>
    );
}