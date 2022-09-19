import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Renan Alves Cardoso</Text>
                    <Text 
                        color='gray.300' 
                        fontSize='small'
                    >
                        renancardoso0307@gmail.com
                    </Text>
            </Box>

            <Avatar size='md' name="Renan Cardoso" src="https://github.com/cardosorenanalves.png"/>
        </Flex>
    )
}