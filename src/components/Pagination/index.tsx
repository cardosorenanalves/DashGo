import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegister: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

generatesPagesArray(2, 5)

function generatesPagesArray(from: number, to: number){
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter(page => page > 0)
}

export function Pagination({
    totalCountOfRegister,
    currentPage = 1,
    onPageChange,
    registersPerPage = 10,
}: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegister / registersPerPage);

    const previousPages = currentPage > 1
    ? generatesPagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPages = currentPage < lastPage
    ? generatesPagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

    return(
       <Stack 
       direction={['column','row']}
       spacing='6'
       mt='8'
       justify='space-between'
       align='center'
       >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction='row' spacing='2'>
                {currentPage > (1+ siblingsCount) && (
                    <>
                 <PaginationItem onPageChange={onPageChange} number={1}/>
                 {currentPage > (2 + siblingsCount) && <Text color='gray.300' w='8' textAlign='center' >...</Text> }
                 </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                })}
                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                })}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                {(currentPage + 1 + siblingsCount) < lastPage  && <Text color='gray.300' w='8' textAlign='center'>...</Text> }
                <PaginationItem onPageChange={onPageChange} number={lastPage}/> 
                 </>
                )}
            
            </Stack>
       </Stack> 
    );
}