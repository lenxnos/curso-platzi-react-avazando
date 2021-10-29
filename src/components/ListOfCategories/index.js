import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => (
  <List>
    {
      [1, 2, 3, 4].map(categorie => <Item key={categorie}><Category /></Item>)
    }
  </List>
)
