import { GithubUserData } from "./GithubUserIntertfaces"

export type cardTypes = 'githubUser' | 'another'

export interface CardProps {
  user: GithubUserData,
  inputSearch: string,
  error: boolean,
  loading: boolean,
  typeCard: cardTypes
}