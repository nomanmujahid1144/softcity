import React from 'react'
import Createdata_Chip from './createdata_Chip'

const chipData = [
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here(Group here)',
  },
  {
    title: 'Data point name goes here',
  },
]

const Create_data_chipbox = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {chipData.map((item) => {
        return (
          <>
            <div style={{ marginRight: '10px', marginBottom: '10px' }}>
              <Createdata_Chip data={item} />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Create_data_chipbox
