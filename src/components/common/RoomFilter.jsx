import React, { useState } from 'react'
import { ButtonGroup } from 'react-bootstrap'

const RoomFilter = (data, setFilteredData) => {
    const [filter, setFilter] = useState("")

    const handleSelectChange = (e) => {
        const selectedRoomType = e.target.value
        setFilter(selectedRoomType)
        const filteredRooms = data.filter((room) =>
            room.roomType.toLowerCase()
                .includes(selectedRoomType.toLowerCase()))
        setFilteredData(filteredRooms)
    }
    const clearFilter = () => {
        setFilter("")
        setFilteredData(data)
    }
    const roomTypes = ["", ...new Set(data.map((room) => room.roomType))]

    return (
        <div className="input-group mb-3 ">
            <span className="input-group-text" id="room-type-filter">
                Filter rooms by type
            </span>
            <select
                className="form-select"
                value={filter}
                onChange={handleSelectChange}>
                <Option value={""}>select a room type to filter...</Option>
                {roomTypes.map((type, index) => (
                    <option key={index} value={String(type)}>
                        {String(type)}
                    </option>
                ))}
            </select>
            <Button className="btn btn-hotel" type="button" onClick={clearFilter}>
                Clear Filter
            </Button>
        </div>
    )
}

export default RoomFilter