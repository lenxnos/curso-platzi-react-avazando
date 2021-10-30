import { useQuery } from '@apollo/client'
import { withPhoto } from '../hoc/withPhoto'

export function useGetPhoto (id) {
  const { data, loading, error } = useQuery(withPhoto, { variables: { id } })
  return { data, loading, error }
}
