import * as React from "react"
import Joyride, { Step } from "react-joyride"
import { PageWrapper } from "../layouts/PageWrapper"
import { Typography } from "@material-ui/core"

const JoyrideSample: React.FC = () => {
  const [steps, setStep] = React.useState<Step[]>(
    [
      {
        content: "These are our super awesome projects!",
        placement: "bottom-start",
        styles: {
          options: {
            width: 900
          }
        },
        target: ".demo__projects",
        title: "Our projects"
      }
    ]
  )

  return (
    <PageWrapper>
      <Joyride
        run={true}
        steps={steps}
      />
        <div className="demo__projects">
          <h2>h1. Heading</h2>
        </div>
    </PageWrapper>
  )
}

export default JoyrideSample