import { Box, Button, Flex, Image } from "@chakra-ui/react"

function Header() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="48px"
      w="100%"
      position="fixed"
      bgColor="#09090A"
    >
      <Image src="/assets/logo.svg" alt="Logomarca do aplicativo Habits" />
      <Button
        p="12px 24px"
        borderRadius="8px"
        border="1px solid #8B5CF6"
        bgColor="transparent"
        color="white"

        display="flex"
        alignItens="center"
        gap="12px"

        fontFamily="Inter"
        fontWeight="600"
        fontSize="1rem"
        lineHeight="125%"
      >
        <Image src="/assets/plus.svg" alt="ícone sinal de mais roxo" />
        <Box>Registrar o meu dia</Box>
      </Button>
    </Flex>
  )
}

export default Header
