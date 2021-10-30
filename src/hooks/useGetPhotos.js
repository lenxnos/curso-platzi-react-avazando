import { useQuery } from '@apollo/client'
import { withPhotos } from '../hoc/withPhotos'

export function useGetPhotos (categoryId) {
  const { data, loading, error } = useQuery(withPhotos, { variables: { categoryId } })
  return { data, loading, error }
}
