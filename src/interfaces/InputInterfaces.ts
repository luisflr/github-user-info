import { ChangeEvent } from 'react'

export interface InputSearchProps {
  placeholder: string,
  inputSearch: string,
  searchButtonText: string,
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void,
  onSearchUser: () => void
}