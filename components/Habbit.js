import { Flex, Text } from "@chakra-ui/react"

function Habbit({ icon, name }) {
  return (
    <Flex
      w="64px"
      h="64px"
      fontSize="32px"
      alignItems="center"
      justifyContent="center"
    >
      {icon}
      <Text fontSize="sm" textAlign="center">
        {name}
      </Text>
    </Flex>
  )
}

export default Habbit
