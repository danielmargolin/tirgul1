import {useState} from 'react'
import { Button } from '../Button'

export const Counter = () => {
    const [value, setValue] = useState(0)

    const onIncClick = () => {
        setValue(value + 1)
    }

    return (
        <div>
            {value}
            <Button  onClick={onIncClick}>
            x
            </Button>
        </div>
    )
}