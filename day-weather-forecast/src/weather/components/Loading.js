import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from 'core/styles/theme'

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center'
  },
  loading: {
    marginTop: theme.spacing(4),
    color: theme.colors.disabledText
  }
}))

const Loading = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <CircularProgress size={36} className={classes.loading} />
    </Grid>
  )
}

export default Loading
