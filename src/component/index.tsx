import React from 'react';

export const Greeting: React.FC<{message?: string}> = (props) => {
    const { message = 'World' } = props

    return (
        <div>Hello, {message}!</div>
    )
}
