import { useQuery } from '@apollo/client'
import { GET_SINGLE_PHOTO } from '../hoc/withPhoto'

export function useGetPhoto (id) {
  const { data, loading, error } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })
  return { data, loading, error }
}
