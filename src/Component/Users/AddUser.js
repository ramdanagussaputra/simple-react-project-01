import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './AddUser.module.css';

function AddUser(props) {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formEl = document.querySelector(`form`);
        const formData = Object.fromEntries(new FormData(formEl).entries());
        props.onSubmit(formData);

        document.querySelector('input[name=username]').value = '';
        document.querySelector('input[name=age]').value = '';
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={onSubmitHandler}>
                <label>Username</label>
                <input type="text" name="username" />

                <label>Age (years)</label>
                <input type="number" name="age" />

                <Button>Add user</Button>
            </form>
        </Card>
    );
}

export default AddUser;
