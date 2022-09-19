import { Flex } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { NotificationNav } from "../Header/NotificationNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header(){
    return(
        <Flex 
            as='header' 
            w='100%'
            maxW={1480}
            h='20'
            mx='auto'
            mt='4'
            px='6'
            align='center'
        >
            <Logo/>
            <SearchBox/>
            <Flex
            align='center'
            ml='auto'
            >
                <NotificationNav/>
                <Profile />
            </Flex>

        </Flex>
    );
}