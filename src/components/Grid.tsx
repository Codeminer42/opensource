import styled from 'styled-components'
import { grid, GridProps } from 'styled-system'
import Box from './Box'

type Props = GridProps

const Grid = styled(Box)<Props>`
  display: grid;

  ${grid}
`

export default Grid
