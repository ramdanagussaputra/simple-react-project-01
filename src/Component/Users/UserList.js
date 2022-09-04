import Card from '../UI/Card';

import styles from './UsersList.module.css';

function UserList(props) {
    return (
        <Card className={styles.users}>
            <ul>
                {props.userData.map((data) => {
                    const username = `${data.username[0]?.toUpperCase()}${data.username?.slice(
                        1
                    )}`;
                    const age = `(${data.age} years old)`;

                    return <li key={data.id}>{`${username} ${age}`}</li>;
                })}
            </ul>
        </Card>
    );
}

export default UserList;
