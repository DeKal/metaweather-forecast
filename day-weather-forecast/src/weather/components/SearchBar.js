import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { CircularProgress, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from 'core/styles/theme'
import Autocomplete from '@material-ui/lab/Autocomplete'
import InputAdornment from '@material-ui/core/InputAdornment'

import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(() => ({
  container: {
    height: theme.spacing(6.75),
    borderRadius: theme.spacing(1)
  },
  inputBox: theme.typography.body1,
  helperText: theme.typography.body3,
  cssOutlinedInput: {
    borderRadius: theme.spacing(1),
    '&$cssFocused $notchedOutline': {
      borderColor: theme.colors.primary[1]
    },
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: theme.colors.primary[1]
    }
  },
  cssLabel: {
    '&.Mui-focused': {
      color: theme.colors.primary[1]
    }
  },
  disabled: {},
  focused: {},
  error: {},
  cssFocused: {},
  notchedOutline: {}
}))

export const matchQueryToListCity = (list, query) => {
  if (typeof query === 'string') {
    // In case suggested list has one item, just go for it
    if (list.length === 1) {
      return list[0]
    }

    // Find exact match
    const city = list.find(
      (item) => item.title.toLowerCase() === query.toLowerCase()
    )

    return city || null
  }
  return query
}

const SearchBar = ({
  className,
  label,
  required,
  placeholder,
  onChange,
  onChangeInput,
  error,
  maxLength,
  type,
  disabled,
  fullWidth,
  list,
  loading
}) => {
  const classes = useStyles()
  return (
    <Autocomplete
      freeSolo
      id="auto-complete-text-field"
      disableClearable
      options={list}
      onChange={(_, selectedValue) => {
        const city = matchQueryToListCity(list, selectedValue)
        onChange(city)
      }}
      getOptionLabel={(options) =>
        typeof options === 'string' ? options : options.title
      }
      renderInput={(params) => (
        <TextField
          type="text"
          label={label}
          className={clsx(classes.container, className)}
          variant="outlined"
          placeholder={placeholder}
          required={required}
          InputProps={{
            className: classes.inputBox,
            classes: !error
              ? {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                }
              : null,
            endAdornment: (
              <InputAdornment position="end">
                {loading ? (
                  <CircularProgress
                    size={25}
                    style={{ color: theme.colors.disabledText }}
                  />
                ) : (
                  <SearchIcon
                    color={error ? 'error' : 'inherit'}
                    htmlColor={theme.colors.disabledText}
                  />
                )}
              </InputAdornment>
            )
          }}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
          inputProps={{
            ...params.inputProps,
            maxLength,
            type
          }}
          FormHelperTextProps={{
            className: classes.helperText
          }}
          error={error}
          disabled={disabled}
          fullWidth={fullWidth}
          ref={params.InputProps.ref}
          autoFocus
          onChange={(e) => {
            onChangeInput(e.target.value)
          }}
        />
      )}
    />
  )
}

export default SearchBar
SearchBar.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.any,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      woeid: PropTypes.number
    })
  ),
  onChangeInput: PropTypes.func,
  loading: PropTypes.bool
}
SearchBar.defaultProps = {
  list: [],
  placeholder: '',
  label: 'Search',
  required: false,
  disabled: false,
  error: false,
  onChange: () => {},
  onChangeInput: () => {},
  fullWidth: false,
  loading: false
}
