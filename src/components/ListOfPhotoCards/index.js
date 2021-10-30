import React from 'react'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'
export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data: { photos = [] } = {} } = useGetPhotos(categoryId)

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
