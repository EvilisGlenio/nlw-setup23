// app/page.tsx
"use client"
import { Flex, Box } from "@chakra-ui/react"
import Header from "../components/Header"
import { WaterIcon } from "../components/DrinkWater"
import Habbit from "../components/Habbit"
import { StudyIcon } from "../components/Study"
import { BreakFastIcon } from "../components/BreakFast"
import { GymIcon } from "../components/Gym"
import { WorkIcon } from "../components/Work"
import { SleepIcon } from "../components/Sleep"

export default function Page() {
  const IconHabbit = [
    { name: "DrinkWater", icon: <WaterIcon /> },
    { name: "Gym", icon: <GymIcon /> },
    { name: "BreakFast", icon: <BreakFastIcon /> },
    { name: "Study", icon: <StudyIcon /> },
    { name: "Work", icon: <WorkIcon /> },
    { name: "Sleep", icon: <SleepIcon /> },
  ]
  return (
    <>
      <Header />
      <Flex padding="182px 48px 48px" width="fit-content">
        <Flex marginTop="57.5px" flexDirection="column" gap="24px">
          {IconHabbit.map((icon) => {
            return <Habbit key={icon.name} icon={icon.icon} />
          })}
        </Flex>
        <Flex gap="48px" marginLeft="32px"></Flex>
      </Flex>
      <script src="/NLWSetup/source/NLWSetup.js"></script>
    </>
  )
}
