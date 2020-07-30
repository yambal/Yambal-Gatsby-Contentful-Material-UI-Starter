import React, { Component } from 'react'
import { navigate } from 'gatsby'

import algoliasearch, { SearchIndex, SearchClient } from 'algoliasearch/lite'
import Autocomplete, { AutocompleteChangeDetails, AutocompleteRenderInputParams } from '@material-ui/lab/Autocomplete'
import { TextField, InputBase, Popper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'

const SearchIconWrapper = styled.div``
const SearchInput = styled(TextField)``
const SearchInputWrapper = styled.div`
  min-width: 240px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  ${SearchIconWrapper} {
    padding: 0 8px;
    display: flex;
    align-items: center;
  }
  ${SearchInput} {
    color: white;
    .MuiInputBase-root {
      color: inherit;
    }
    .MuiInput-underline:before {
      border-bottom: none;
    }
    .MuiInput-underline:after {
      border-bottom: none;
    }
  }
`

export const AlgoliaSearch: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>()
  const [options, setOptions] = React.useState<any[]>([])

  const algoliasearchIndex: SearchIndex | undefined = React.useMemo(
    () => {
      if (process.env.GATSBY_ALGOLIA_APP_ID && process.env.GATSBY_ALGOLIA_SEARCH_KEY && process.env.GATSBY_ALGOLIA_INDEX_NAME) {
        const client:SearchClient = algoliasearch(
          process.env.GATSBY_ALGOLIA_APP_ID,
          process.env.GATSBY_ALGOLIA_SEARCH_KEY
        )
        return client.initIndex(process.env.GATSBY_ALGOLIA_INDEX_NAME)
      }
      return
    },
    []
  )

  /**
   * 入力が変化したとき
   */
  const onInputChange = React.useCallback(
    (value: string) => {
      if(algoliasearchIndex && inputValue !== value){
        setInputValue(value)
        algoliasearchIndex.search(value)
        .then((results) => {
          setOptions(results.hits)
        })
      }
    },
    []
  )

  return (
    <Autocomplete
      getOptionLabel={(option: any) => ( option.title )}
      options={options}
      autoComplete
      onInputChange={(event, newInputValue) => {
        /* INPUT が変化したとき (選択後も呼ばれる)*/
        onInputChange(newInputValue)
      }}
      onChange={(event: any, newValue: any | null) => {
        /* OPTION が選ばれたとき */
        // console.log(77,newValue)
        setInputValue(newValue.title)
        navigate(`/post/${newValue.slug}`)
      }}
      getOptionSelected={(option, value) => {
        /* Option のマッピング */
        return option.title === value.title
      }}
      renderInput={(params: AutocompleteRenderInputParams) => {
        return (
          <SearchInputWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput {...params} variant="standard" fullWidth />
          </SearchInputWrapper>
        )
      }}
      disableClearable
      freeSolo
      disableListWrap
      PopperComponent={(popperProps) => {
        return <Popper
          anchorEl={popperProps.anchorEl}
          open={popperProps.open}
          className={popperProps.className}
          role={popperProps.role}
          placement="bottom-end"
        >{popperProps.children}</Popper>
      }}
    />
  )
}
