import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { gql, useQuery } from '@apollo/client'

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
 `

export const ListOfPhotoCards = () => {
  const { loading, error, data: { photos = [] } = {} } = useQuery(withPhotos)

  if (error) return <p>Error :(</p>

  if (loading) return <p>Loading...</p>

  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
