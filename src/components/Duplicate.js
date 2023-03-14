import React from 'react'
const data = {
  sectionA: [
    { id: 6904, name: 'shyam', society: 'dance' },
    { id: 6704, name: 'ram', society: 'dance' },
    { id: 6704, name: 'ram', society: 'painting' },
    { id: 6904, name: 'shyam', society: 'game' },
    { id: 6804, name: 'rishab', society: 'dance' },
    { id: 6704, name: 'ram', society: 'coding' },
    { id: 6804, name: 'rishab', society: 'coding' },
    { id: 6704, name: 'ram', society: 'game' },
    { id: 6904, name: 'shyam', society: 'drama' },
    { id: 6704, name: 'ram', society: 'drama' },
  ],
}
const Duplicate = () => {
  const newArray = []
  data.sectionA.forEach((elem) => {
    if (!newArray.includes(elem)) {
      newArray.push(elem)
    }
    return newArray
  })
  console.log(newArray)
  return <div>Duplicate</div>
}

export default Duplicate
