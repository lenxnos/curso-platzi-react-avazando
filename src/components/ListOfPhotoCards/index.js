import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => (
  <ul>
    <li>
      {
        [1, 2, 3].map(id => <PhotoCard key={id} />)
      }
    </li>
  </ul>
)
