import { useState } from 'react';

import AddUser from './Component/Users/AddUser';
import UserList from './Component/Users/UserList';
import ErrorModal from './Component/UI/ErrorModal';

function App() {
    // STATE
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState();

    // HANDLER
    const onSubmitHandler = (formData) => {
        if (!formData.username?.trim() || !formData.age)
            return setError({
                title: 'Invalid Empty Input',
                message: 'Please fill all the input',
            });
        if (formData.age <= 1)
            return setError({ title: 'Invalid Age', message: 'Age must > 1' });

        setUserData((prevState) => {
            const newData = { id: +Math.random(), ...formData };
            return [newData, ...prevState];
        });
    };

    const onErrorClick = () => {
        setError();
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    onErrorClick={onErrorClick}
                    errTitle={error.title}
                    errMessage={error.message}
                />
            )}
            <AddUser onSubmit={onSubmitHandler} />
            <UserList userData={userData} />
        </div>
    );
}

export default App;
