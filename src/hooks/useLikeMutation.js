import { useMutation } from '@apollo/client'
import { LIKE_PHOTO } from '../hoc/likeMutation'

export const useLikeMutation = () => {
  const [mutation, { loading, error }] = useMutation(LIKE_PHOTO)
  return { mutation, loading, error }
}
