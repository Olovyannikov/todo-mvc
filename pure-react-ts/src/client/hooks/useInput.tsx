import {ChangeEvent, SyntheticEvent, useState} from "react";

export const useInput = (defaultValue: string = '') => {
    const [value, setValue] = useState<string>(defaultValue);
    return {
        bind: {
            value,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        },
        clear: () => setValue(''),
        value: () => value
    }
}