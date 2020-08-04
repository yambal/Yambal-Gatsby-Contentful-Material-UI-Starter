import * as React from "react"
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { PageWrapper } from "../layouts/PageWrapper"
import { Typography } from "@material-ui/core"

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

const LineEllipsisSample: React.FC = () => {
  return (
    <PageWrapper>
      <Typography variant="h3" component="h2">react-lines-ellipsis : Sample</Typography>
      <Typography variant="body1" component="div" >
        <ResponsiveEllipsis
          text='いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせすんいろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせすんいろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせすんいろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせすんいろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせすん'
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </Typography>
    </PageWrapper>
  )
}

export default LineEllipsisSample