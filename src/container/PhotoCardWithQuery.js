import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhoto } from '../hooks/useGetPhoto'

export const PhotoCardWithQuery = ({ id }) => {
  const { data: { photo = {} } = {}, loading, error } = useGetPhoto(id)
  if (error) return <p>Error :(</p>
  if (loading) return <p>Loading...</p>
  return (
    <PhotoCard {...photo} />
  )
}
