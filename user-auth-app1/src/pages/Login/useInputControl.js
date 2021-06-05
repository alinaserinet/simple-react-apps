import {useState} from 'react';

const UseInputControl = (init) => {
    const [value, setValue] = useState(init);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return [value, handleChange];
};

export default UseInputControl;