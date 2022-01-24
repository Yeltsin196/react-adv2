import React from 'react';

export const useProduct = () => {
    const [Counter, setCounter] = React.useState<number>(0);
    const increaseBy = (value: number) => {
        setCounter((prev) => Math.max(prev + value, 0));
    };

    return { Counter, increaseBy }
};
