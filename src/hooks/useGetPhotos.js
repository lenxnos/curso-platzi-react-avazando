import { useQuery } from '@apollo/client'
import { GET_PHOTOS } from '../hoc/withPhotos'

export function useGetPhotos (categoryId) {
  const { data, loading, error } = useQuery(GET_PHOTOS, { variables: { categoryId } })
  return { data, loading, error }
}
