import React, { useState } from 'react'

const Rough = () => {
    const arr = ['cricket', 'football', 'basketball', 'tennis']
    const [list, setList] = useState(arr)
    const [deleteButton, setDeleteButton] = useState([])
    const handleDelete = (element) => {
        const result = list.filter((item) => item !== element)
        setList(result)
    }
    const showButtonHandler = (item, e) => {
        if (e.target.checked) {
            setDeleteButton([...deleteButton, item])
        } else {
            let index = deleteButton?.indexOf(item);
            if (index > -1) {
                deleteButton?.splice(index, 1);
                setDeleteButton(deleteButton);
                setList(list);
            }
        }
    }

    return (
        <>
            <ul>
                {list.map((item, index) => (
                    <li>
                        <input
                            type="checkbox"
                            onClick={(e) => showButtonHandler(item,e)}
                        />
                        {item}
                        {deleteButton?.includes(item) && (
                            <button
                                className="btn"
                                style={{ backgroundColor: 'red' }}
                                onClick={() => handleDelete(item)}
                            >
                                X
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </>

    )
}

export default Rough