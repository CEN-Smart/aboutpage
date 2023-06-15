import { Box, Flex, Heading } from '@chakra-ui/react'
import classNames from 'classnames'
import Link from 'next/link'
interface FooterListProps {
  title: string
  link1: string
  link2: string
  link3: string
  link4?: string
  linkTitle1: string
  linkTitle2: string
  linkTitle3: string
  linkTitle4?: string
}

const FooterList = ({ title, link1, link2, link3, link4, linkTitle1, linkTitle2, linkTitle3, linkTitle4 }: FooterListProps) => {
  return (
    <Box>
      <Heading as="h6" size="md" mb="1rem">{title}</Heading>
      <Flex direction="column" gap='1rem'>
        <Link className={classNames(`transition-all duration-300 hover:border-b hover:border-b-blue-700 w-fit`)} href={link1}>{linkTitle1}</Link>
        <Link className={classNames(`transition-all duration-300 hover:border-b hover:border-b-blue-700 w-fit`)} href={link2}>{linkTitle2}</Link>
        <Link className={classNames(`transition-all duration-300 hover:border-b hover:border-b-blue-700 w-fit`)} href={link3}>{linkTitle3}</Link>
        {link4 && <Link className={classNames(`transition-all duration-300 hover:border-b hover:border-b-blue-700 w-fit`)} href={link4}>{linkTitle4}</Link>}
      </Flex>

    </Box>
  )
}

export default FooterList